//GetMyLendingRequests
export default async function GetMyLendingRequests() {
  const response = await fetch(
    `https://2ec3-184-22-33-12.ngrok-free.app/reserves/lending-requests/my-requests`
  );
  if (!response.ok) {
    throw new Error("Failed to get lending request");
  }
  return await response.json();
}
