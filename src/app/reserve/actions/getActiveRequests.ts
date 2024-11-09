import { requestTypeEnum } from "../enum/RequestType";

//GetMyActiveRequest
interface ActiveRequestProp {
  id: string;
  itemName: string;
  borrowerUsername: string;
  lenderUserName: string;
  imageUrl: string;
  type: requestTypeEnum;
}

export default async function getActiveRequest(): Promise<ActiveRequestProp[]> {
  const response = await fetch(
    `http://localhost:8082/requests/get-my-active-request`
  );
  if (!response.ok) {
    throw new Error("Failed to get active request");
  }
  return await response.json();
}
