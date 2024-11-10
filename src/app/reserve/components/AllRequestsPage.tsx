"use client";
import { useEffect, useState } from "react";
import getMyBorrowingRequests from "../actions/getMyBorrowingRequests";
import GetMyLendingRequests from "../actions/getMyLendingRequests";
import BorrowingRequest from "./BorrowingRequest";
import LendingRequest from "./LendingRequest";
import { activeStatusEnum } from "../enum/ActiveStatusEnum";
interface BorrowingRequestProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  imageUrl: string;
  activeStatus: activeStatusEnum;
}
interface LendingRequestProp {
  id: string;
  itemName: string;
  description: string;
  name: string;
  surname: string;
  borrowerUserName: string;
  imageUrl: string;
  createdAt: string;
}
export default function AllRequestsPage() {
  const [borrowingData, setBorrowingData] = useState<BorrowingRequestProp[]>();
  const [lendingData, setLendingData] = useState<LendingRequestProp[]>();
  useEffect(() => {
    const fetchData = async () => {
      setBorrowingData(await getMyBorrowingRequests());
      setLendingData(await GetMyLendingRequests());
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
