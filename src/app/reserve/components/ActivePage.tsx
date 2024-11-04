import ActiveRequest from "./ActiveRequest";
import { requestTypeEnum } from "./RequestType";

export default function ActionPage() {
  const activeRequestData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      borrowerUsername: "เจ้าของ น้องขิม",
      lenderUserName: "Khimmoon",
      imageUrl: "/next.svg",
      type: requestTypeEnum.borrowing,
    },
    {
      id: "2",
      itemName: "เครื่องคิดเลข",
      borrowerUsername: "เจ้าของ น้องขิม",
      lenderUserName: "Khimmoon",
      imageUrl: "/next.svg",
      type: requestTypeEnum.lending,
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <ActiveRequest data={activeRequestData}></ActiveRequest>
    </div>
  );
}
