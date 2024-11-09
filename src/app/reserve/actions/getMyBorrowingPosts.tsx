//GetMyBorrowingPosts
export default async function GetMyBorrowingPosts() {
  const response = await fetch(`http://localhost:8082/get-my-borrowing-posts`);
  if (!response.ok) {
    throw new Error("Failed to get borrowing posts");
  }
  return await response.json();
}
