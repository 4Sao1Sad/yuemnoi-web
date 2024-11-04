// src/apps/home/components/BorrowingPage.tsx

"use client";

import React from "react";
import BorrowingCard from "./BorrowingCard";
import { borrowingPosts } from "../mockData";

export default function BorrowingPage({ searchTerm }: { searchTerm: string }) {
  const filteredPosts = borrowingPosts.filter((post) =>
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.map((post) => (
        <BorrowingCard key={post.id} post={post} />
      ))}
    </div>
  );
}
