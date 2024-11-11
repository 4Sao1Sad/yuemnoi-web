//GetMyBorrowingPosts
export default async function GetMyBorrowingPosts() {
  const response = await fetch(
    `https://2ec3-184-22-33-12.ngrok-free.app/posts/borrowing-posts/me`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Sets the Content-Type header
      },
    }
  );
  console.log("responseeiei", response);
  if (!response.ok) {
    throw new Error("Failed to get borrowing posts");
  }
  return await response.json();
}
