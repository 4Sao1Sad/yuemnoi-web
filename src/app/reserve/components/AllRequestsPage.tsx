import getMyBorrowingRequests from "../actions/getMyBorrowingRequests";
import GetMyLendingRequests from "../actions/getMyLendingRequests";
import BorrowingRequest from "./BorrowingRequest";
import LendingRequest from "./LendingRequest";

export default async function AllRequestsPage() {
  const borrowingData = await getMyBorrowingRequests();
  const lendingData = await GetMyLendingRequests();
  return (
    <div className="w-full min-h-screen">
      <h3 className="text-lg font-semibold my-3">Borrowing Request</h3>
      <BorrowingRequest data={borrowingData}></BorrowingRequest>
      <h3 className="text-lg font-semibold my-3">Lending Request</h3>
      <LendingRequest data={lendingData}></LendingRequest>
    </div>
  );
}
