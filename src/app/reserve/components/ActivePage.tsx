"use client";
import { useEffect, useState } from "react";
import { ActiveRequest } from "./ActiveRequest";
import { AxiosInstance } from "@yuemnoi/app/client/client";

export default function ActionPage() {
  const [activeRequestData, setActiveRequestData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      AxiosInstance.get("reserves/active-requests")
        .then((response) => {
          console.log(response);
          setActiveRequestData(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <ActiveRequest data={activeRequestData}></ActiveRequest>
    </div>
  );
}
