"use client";
import { useEffect, useState } from "react";
import BorrowingRequest from "./BorrowingRequest";
import LendingRequest from "./LendingRequest";
import { AxiosInstance } from "@yuemnoi/app/client/client";

export default function AllRequestsPage() {
  const [borrowingData, setBorrowingData] = useState([]);
  const [lendingData, setLendingData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      AxiosInstance.get("reserves/borrowing-requests/my-requests")
        .then((response) => {
          console.log(response);
          setBorrowingData(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
      AxiosInstance.get("reserves/lending-requests/my-requests")
        .then((response) => {
          console.log(response);
          setLendingData(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="w-full min-h-screen">
      <h3 className="text-lg font-semibold my-3">Borrowing Request</h3>
      <BorrowingRequest data={borrowingData}></BorrowingRequest>
      <h3 className="text-lg font-semibold my-3">Lending Request</h3>
      <LendingRequest data={lendingData}></LendingRequest>
    </div>
  );
}
