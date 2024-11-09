import { borrowStatusEnum } from "../enum/BorrowStatusEnum";

//GetBorrowingPostsByIds
interface BorrowingPostRequestProp {
  id: string;
  itemName: string;
  lenderUserName: string;
  imageUrl: string;
  borrowStatus: borrowStatusEnum;
}

export default async function GetBorrowingPostsById(
  id: number
): Promise<BorrowingPostRequestProp[]> {
  const response = await fetch(
    `http://localhost:8082/borrowing-post/get-borrowing-posts-by-id/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to get borrowing posts of this request");
  }
  return await response.json();
}
