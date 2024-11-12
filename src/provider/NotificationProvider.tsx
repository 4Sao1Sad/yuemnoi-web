"use client";
import { getToken, onMessage } from "firebase/messaging";
import React, { use, useEffect } from "react";
import { messaging } from "@yuemnoi/lib/firebase/notification";
import { toast } from "sonner";
import { useAuth } from "./AuthProvider";
import { AxiosInstance } from "@yuemnoi/app/client/client";

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const [token, setToken] = React.useState("");
  useEffect(() => {
    const handleTokenRefresh = async () => {
      if (typeof Notification === "undefined") {
        console.log("Notification API is not available in this environment.");
        return;
      }
      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          return;
        }
      } catch (error) {
        console.error(
          "An error occurred while trying to get permission to notify.",
          error
        );
        return;
      }
      const message = messaging();

      if ("serviceWorker" in navigator) {
        try {
          const currentToken = await getToken(message, {
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
          });
          if (currentToken) {
            setToken(currentToken);
            console.log("FCM Token:", currentToken);
          } else {
            console.log("No registration token available.");
          }
        } catch (error) {
          console.error(
            "An error occurred during service worker registration.",
            error
          );
          return;
        }
      }

      onMessage(message, (payload) => {
        console.log("should show toast", payload);
        toast(payload.notification?.body ?? "New Notification");
      });
    };
    handleTokenRefresh();
  }, []);

  useEffect(() => {
    if (auth.id && token) {
      AxiosInstance.post("/notifications/user-device", {
        userId: auth.id,
        token,
      })
        .then((res) => {
          console.log("Token sent to server", res.data);
        })
        .catch((err: unknown) => {
          console.error("Error sending token to server", err);
        });
    }
  }, [auth.id, token]);
  return <>{children}</>;
}
