//GetMyBorrowingPosts
export default async function GetMyBorrowingPosts() {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/posts/borrowing-posts/me`
  );
  if (!response.ok) {
    throw new Error("Failed to get borrowing posts");
  }
  return await response.json();
}
