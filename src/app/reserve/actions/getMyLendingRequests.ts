//GetMyLendingRequests
export default async function GetMyLendingRequests() {
  const response = await fetch(
    `http://localhost:8082/lending-requests/get-my-lending-request`
  );
  if (!response.ok) {
    throw new Error("Failed to get lending request");
  }
  return await response.json();
}
