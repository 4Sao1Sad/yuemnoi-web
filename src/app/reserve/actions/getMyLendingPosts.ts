//GetMyLendingPosts
export default async function GetMyLendingPosts() {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/posts/lending-posts/me`
  );
  if (!response.ok) {
    throw new Error("Failed to get lending posts");
  }
  return await response.json();
}
