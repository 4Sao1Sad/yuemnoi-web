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
  const response = await fetch(`http://localhost:8082/get-my-history-request`);
  if (!response.ok) {
    throw new Error("Failed to get history request");
  }
  return await response.json();
}
