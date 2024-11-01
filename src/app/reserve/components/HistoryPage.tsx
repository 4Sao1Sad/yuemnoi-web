import { activeStatusEnum } from "./ActiveStatusEnum";
import RequestHistory from "./RequestHistory";

export default function HistoryPage() {
  const requestHistoryData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      lenderUserName: "เนยเน่ยเน้ยเน๊ยเน๋ย",
      imageUrl: "/next.svg",
      activeStatus: activeStatusEnum.accepted,
    },
    {
      id: "2",
      itemName: "เครื่องคิดเลข",
      name: "เจ้าของ",
      surname: "น้องขิม",
      lenderUserName: "เนยเน่ยเน้ยเน๊ยเน๋ย",
      imageUrl: "/next.svg",
      activeStatus: activeStatusEnum.rejected,
    },
  ];
  return (
    <div className="w-full min-h-screen">
      <RequestHistory data={requestHistoryData}></RequestHistory>
    </div>
  );
}
