import { borrowStatusEnum } from "../enum/BorrowStatusEnum";

//GetBorrowingPostsByIds
interface BorrowingPostRequestProp {
  id: string;
  itemName: string;
  lenderUserName: string;
  imageUrl: string;
  borrowStatus: borrowStatusEnum;
}

export default async function GetBorrowingPostsById(): Promise<
  BorrowingPostRequestProp[]
> {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/borrowing-requests/my-lending-posts`
  );
  if (!response.ok) {
    throw new Error("Failed to get borrowing posts of this request");
  }
  return await response.json();
}