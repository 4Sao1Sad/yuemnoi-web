//GetMyLendingPosts
export default async function GetMyLendingPosts() {
  const response = await fetch(`http://localhost:8082/get-my-lending-posts`);
  if (!response.ok) {
    throw new Error("Failed to get lending posts");
  }
  return await response.json();
}
