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
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/history-requests`,
    {
      headers: {
        cookies_google_auth:
          "cookies_google_auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpc3MiOiJ5dWVtIG5vaSIsImV4cCI6MTczMTIzNjE4MSwiaWF0IjoxNzMxMjMyNTgxfQ.gGtYTrRHVWwvIf2a8dGSQ68nQe1lQePBgmE64xntzEw; Path=/; Expires=Sun, 09 Nov 2025 10:28:56 GMT;",
      },
      credentials: "include",
    }
  );
  console.log("history", response.status);
  if (!response.ok) {
    throw new Error("Failed to get history request");
  }
  return await response.json();
}
