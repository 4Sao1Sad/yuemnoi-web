"use client";

import React from "react";
import { LendingPost } from "../mockData";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

export default function LendingCard({
  post,
  onReserveClick,
}: {
  post: LendingPost;
  onReserveClick: (post: LendingPost) => void;
}) {
  return (
    <div className="h-fit flex-1 flex-col justify-center items-start py-2 space-y-2 shadow-lg rounded-lg mb-4">
      <Image
        src={post.imageUrl}
        alt={post.itemName}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="gap-3 px-6 py-4 flex flex-col">
        <div className="gap-1 flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="font-semibold">{post.itemName}</h3>
            <p className="text-tiny text-gray-500">by {post.ownerName}</p>
          </div>
          <div className="flex flex-row">
            <h3 className="font-bold">{post.price} Bath</h3>
            <p className="text-body2 text-gray-500 font-bold pt-0.5">/day</p>
          </div>
        </div>
        <p>{post.description}</p>
      </div>
      <Button
        onClick={() => onReserveClick(post)}
        variant="default"
        size="default"
        className="w-full"
      >
        Reserve
      </Button>
    </div>
  );
}
