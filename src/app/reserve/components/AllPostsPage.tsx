"use client";
import { useEffect, useState } from "react";
import BorrowingPost from "./BorrowingPost";
import LendingPost from "./LendingPost";
import { AxiosInstance } from "@yuemnoi/app/client/client";
// interface BorrowingPostProp {
//   id: string;
//   description: string;
//   name: string;
//   surname: string;
//   createdAt: string;
// }
// interface LendingPostProp {
//   id: string;
//   itemName: string;
//   name: string;
//   surname: string;
//   borrowerUserName: string;
//   imageUrl: string;
// }

// resp = append(resp, &dto.BorrowingPost{
//   Id:          uint64(post.ID),
//   OwnerId:     post.OwnerID,
//   OwnerName:   post.OwnerName,
//   Description: post.Description,
//   CreatedAt:   post.CreatedAt,
// })

export default function AllPostsPage() {
  const [borrowingPostData, setBorrowingPostData] = useState([]);
  const [lendingPostData, setLendingPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      AxiosInstance.get("posts/borrowing-posts/me")
        .then((response) => {
          setBorrowingPostData(response.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
      AxiosInstance.get("reserves/borrowing-requests/my-lending-posts")
        .then((response) => {
          console.log(response);
          setLendingPostData(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
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
