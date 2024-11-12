import { useEffect, useState } from "react";
import RequestHistory from "./RequestHistory";
import { AxiosInstance } from "@yuemnoi/app/client/client";

export default function HistoryPage() {
  const [requestHistory, setRequestHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      AxiosInstance.get("reserves/history-requests")
        .then((response) => {
          console.log(response);
          setRequestHistory(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <RequestHistory data={requestHistory}></RequestHistory>
    </div>
  );
}
