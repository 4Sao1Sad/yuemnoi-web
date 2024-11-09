import { activeStatusEnum } from "../enum/ActiveStatusEnum";

// GetMyHistoryRequest
interface RequestHistoryProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  lenderUserName: string;
  imageUrl: string;
  activeStatus: activeStatusEnum;
}
export default async function GetMyLendingPosts(): Promise<
  RequestHistoryProp[]
> {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/history-requests`
  );
  if (!response.ok) {
    throw new Error("Failed to get history request");
  }
  return await response.json();
}
