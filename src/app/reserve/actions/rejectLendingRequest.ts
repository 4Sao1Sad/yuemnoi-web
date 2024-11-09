//RejectLendingRequest
export default async function RejectLendingRequest(requestId: number) {
  const response = await fetch(
    `https://cd3b-184-22-33-12.ngrok-free.app/reserves/lending-requests/reject/${requestId}`,
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
