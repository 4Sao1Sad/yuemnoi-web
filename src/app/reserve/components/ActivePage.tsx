"use client";
import { useEffect, useState } from "react";
import getActiveRequest from "../actions/getActiveRequests";
import { ActiveRequest } from "./ActiveRequest";
import { useQuery } from "@tanstack/react-query";
// import { requestTypeEnum } from "./RequestType";

export default function ActionPage() {
  const [activeRequestData, setActiveRequestData] = useState();
  // const activeRequestData = [
  //   {
  //     id: "1",
  //     itemName: "เครื่องคิดเลข",
  //     borrowerUsername: "เจ้าของ น้องขิม",
  //     lenderUserName: "Khimmoon",
  //     imageUrl: "/next.svg",
  //     type: requestTypeEnum.borrowing,
  //   },
  //   {
  //     id: "2",
  //     itemName: "เครื่องคิดเลข",
  //     borrowerUsername: "เจ้าของ น้องขิม",
  //     lenderUserName: "Khimmoon",
  //     imageUrl: "/next.svg",
  //     type: requestTypeEnum.lending,
  //   },
  // ];
  useEffect(() => {
    AxiosInstance.get("/reserves/active-requests")
      .then((response) => {
        setActiveRequestData(response.data);
      })
      .catch((error) => {
        setErrorMap(error.message);
      });
    // const activeRequestData = async () => {
    //   setActiveRequestData(await getActiveRequest());
    // };
    // activeRequestData();
  }, []);
  console.log(activeRequestData);

  // useQuery({
  //   queryKey: [""],
  //   queryFn: async () => {
  //     const response = await fetch("/reserves/active-requests");
  //     if (!response.ok) {
  //       throw new Error("failed to fetch active requests");
  //     }
  //     console.log(response.status);
  //     return response.json();
  //   },
  // });

  return (
    <div className="w-full min-h-screen">
      <ActiveRequest data={activeRequestData}></ActiveRequest>
    </div>
  );
}
