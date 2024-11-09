//GetMyBorrowingRequests
export default async function getMyBorrowingRequests() {
  const response = await fetch(
    `http://localhost:8082/borrowing-requests/get-my-borrowing-request`
  );
  if (!response.ok) {
    throw new Error("Failed to get borrowing request");
  }
  return await response.json();
}
