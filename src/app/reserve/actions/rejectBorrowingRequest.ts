//RejectBorrowingRequest
export default async function RejectBorrowingRequest(requestId: number) {
  const response = await fetch(
    `https://2ec3-184-22-33-12.ngrok-free.app/reserves/borrowing-requests/reject/${requestId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to reject request");
  }
  return await response.json();
}
