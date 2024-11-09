//GetMyBorrowingRequests
export default async function getMyBorrowingRequests() {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/borrowing-requests/my-requests`
  );
  if (!response.ok) {
    throw new Error("Failed to get borrowing request");
  }
  return await response.json();
}
