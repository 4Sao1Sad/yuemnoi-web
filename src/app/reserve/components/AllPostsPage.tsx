"use client";
import { useEffect, useState } from "react";
import GetMyBorrowingPosts from "../actions/getMyBorrowingPosts";
import GetMyLendingPosts from "../actions/getMyLendingPosts";
import BorrowingPost from "./BorrowingPost";
import LendingPost from "./LendingPost";
interface BorrowingPostProp {
  id: string;
  description: string;
  name: string;
  surname: string;
  createdAt: string;
}
interface LendingPostProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  borrowerUserName: string;
  imageUrl: string;
}

export default function AllPostsPage() {
  const [borrowingPostData, setBorrowingPostData] =
    useState<BorrowingPostProp[]>();
  const [lendingPostData, setLendingPostData] = useState<LendingPostProp[]>();
  useEffect(() => {
    const fetchData = async () => {
      setBorrowingPostData(await GetMyBorrowingPosts());
      setLendingPostData(await GetMyLendingPosts());
    };
    fetchData();
  }, []);
  return (
    <div className="w-full min-h-screen">
      <h3 className="text-lg font-semibold my-3">Borrowing Post</h3>
      <BorrowingPost data={borrowingPostData}></BorrowingPost>
      <h3 className="text-lg font-semibold my-3">Lending Post</h3>
      <LendingPost data={lendingPostData}></LendingPost>
    </div>
  );
}
