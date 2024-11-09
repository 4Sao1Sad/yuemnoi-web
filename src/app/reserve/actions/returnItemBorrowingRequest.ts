//ReturnItemBorrowingRequest
export default async function ReturnItemBorrowingRequest(requestId: number) {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/borrowing-requests/return/${requestId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to return item");
  }
  return await response.json();
}
