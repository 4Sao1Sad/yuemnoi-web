import GetMyBorrowingPosts from "../actions/getMyBorrowingPosts";
import GetMyLendingPosts from "../actions/getMyLendingPosts";
import BorrowingPost from "./BorrowingPost";
import LendingPost from "./LendingPost";

export default async function AllPostsPage() {
  const borrowingPostData = await GetMyBorrowingPosts();
  const lendingPostData = await GetMyLendingPosts();
  return (
    <div className="w-full min-h-screen">
      <h3 className="text-lg font-semibold my-3">Borrowing Post</h3>
      <BorrowingPost data={borrowingPostData}></BorrowingPost>
      <h3 className="text-lg font-semibold my-3">Lending Post</h3>
      <LendingPost data={lendingPostData}></LendingPost>
    </div>
  );
}
