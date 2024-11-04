import { Button } from "@yuemnoi/components/ui/button";
import BorrowingRequest from "./BorrowingRequest";
import LendingRequest from "./LendingRequest";
import BorrowingPost from "./BorrowingPost";
import LendingPost from "./LendingPost";
import { activeStatusEnum } from "./ActiveStatusEnum";
import { useState } from "react";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RequestPage() {
  const [requestState, setRequestState] = useState(true);
  const borrowingData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      imageUrl: "/next.svg",
      activeStatus: activeStatusEnum.pending,
    },
    {
      id: "2",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      imageUrl: "/next.svg",
      activeStatus: activeStatusEnum.pending,
    },
    {
      id: "3",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      imageUrl: "/next.svg",
      activeStatus: activeStatusEnum.accepted,
    },
  ];
  const lendingData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      description: "จะขอยืม กระทะมาทำหมูกระทะหน่อยคับ มีมั้ยคับ รีบมากเลยคับ",
      name: "เจ้าของ",
      surname: "น้องขิม",
      borrowerUserName: "Khimmoon",
      imageUrl: "/next.svg",
      createdAt: "10/7/2024",
    },
  ];
  const lendingPostData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      borrowerUserName: "Khimmoon",
      imageUrl: "/next.svg",
    },
  ];
  const borrowingPostData = [
    {
      id: "1",
      description: "จะขอยืม กระทะมาทำหมูกระทะหน่อยคับ มีมั้ยคับ รีบมากเลยคับ",
      name: "เจ้าของ",
      surname: "น้องขิม",
      createdAt: "10/7/2024",
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <Button className="w-full" onClick={() => setRequestState(!requestState)}>
        <span className="text-lg font-semibold">
          <FontAwesomeIcon icon={faRepeat} className="text-white" />
        </span>
        {requestState ? "My Requests" : "My Post Requests"}
      </Button>
      {requestState ? (
        <div>
          <h3 className="text-lg font-semibold my-3">Borrowing Request</h3>
          <BorrowingRequest data={borrowingData}></BorrowingRequest>
          <h3 className="text-lg font-semibold my-3">Lending Request</h3>
          <LendingRequest data={lendingData}></LendingRequest>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold my-3">Borrowing Post</h3>
          <BorrowingPost data={borrowingPostData}></BorrowingPost>
          <h3 className="text-lg font-semibold my-3">Lending Post</h3>
          <LendingPost data={lendingPostData}></LendingPost>
        </div>
      )}
    </div>
  );
}
