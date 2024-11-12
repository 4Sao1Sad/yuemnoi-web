"use client";

import React, { use, useEffect, useState } from "react";
import BorrowingCard from "./BorrowingCard";
import type { BorrowingPost } from "../mockData";
import { AxiosInstance } from "@yuemnoi/app/client/client";
import type { LendingPostOfferProp } from "./LendingOffer";
import { set } from "react-hook-form";

export default function BorrowingPage({ searchTerm }: { searchTerm: string }) {
  const [borrowingPosts, setBorrowingPosts] = useState<BorrowingPost[]>([]);
  const [myLendingPosts, setMyLendingPosts] = useState<LendingPostOfferProp[]>(
    []
  );
  useEffect(() => {
    AxiosInstance.get(
      `/posts/borrowing-posts?search=${searchTerm.toLocaleLowerCase()}`
    )
      .then((res) => {
        console.log(res.data);
        setBorrowingPosts(res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  useEffect(() => {
    AxiosInstance.get("/posts/lending-posts/me")
      .then((res) => {
        console.log(res.data);
        setMyLendingPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {borrowingPosts.map((post) => (
        <BorrowingCard
          key={post.id}
          post={post}
          lendingPostRequestData={myLendingPosts}
        />
      ))}
    </div>
  );
}
