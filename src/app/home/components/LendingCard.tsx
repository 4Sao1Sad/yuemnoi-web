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
    <div className="h-fit flex-1 flex-col justify-center max-w-[300px] items-start py-2 space-y-2 shadow-lg rounded-lg mb-4">
      <Image
        src={post.imageUrl}
        alt={post.itemName}
        width={0}
        height={0}
        className="rounded-t-lg"

        style={{ width: "100%", height: "auto" }}
      />
      <div className="gap-3 px-6 py-4 flex flex-col">
        <div className="gap-1 pb-1 flex flex-row justify-between border-b border-gray">
          <div className="flex flex-col">
            <h3 className="font-semibold">{post.itemName}</h3>
            <p className="text-tiny text-gray">by {post.ownerName}</p>
          </div>
          <div className="flex flex-row gap-1">
            <h3 className="font-bold">{post.price} Bath</h3>
            <p className="text-body2 text-gray font-bold pt-0.5">/day</p>
          </div>
        </div>
        <p className="line-clamp-4 flex h-[90px]">{post.description}</p>
        <Button
          onClick={() => onReserveClick(post)}
          variant="default"
          size="default"
          className="w-full"
        >
          Reserve
        </Button>
      </div>
    </div>
  );
}
