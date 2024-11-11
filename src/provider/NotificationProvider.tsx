"use client";
import { getToken, onMessage } from "firebase/messaging";
import React, { useEffect } from "react";
import { messaging } from "@yuemnoi/lib/firebase/notification";
import { toast } from 'sonner';

export function NotificationProvider({
	children,
}: { children: React.ReactNode }) {
	const [,setToken] = React.useState("");
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
					error,
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
						error,
					);
					return;
				}
			}

			onMessage(message, (payload) => {
				console.log("should show toast", payload);
				toast(payload.notification?.title ?? "New Notification");
			});
		};
		handleTokenRefresh();
	}, []);
	return <>{children}</>;
}
