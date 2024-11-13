"use client";

import React from "react";
import type { LendingPost } from "../mockData";
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
    <div className="h-fit flex-1 flex-col justify-center w-[300px] items-start py-2 space-y-2 shadow-lg rounded-lg mb-4">
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={post.image_url}
          alt={post.item_name}
          width={240}
          height={240}
          className="rounded-t-lg"
        />

      </div>
      <div className="gap-3 px-6 py-4 flex flex-col">
        <div className="gap-1 pb-1 flex flex-row justify-between border-b border-gray">
          <div className="flex flex-col">
            <h3 className="font-semibold w-full line-clamp-1">{post.item_name}</h3>
            <p className="text-tiny text-gray">by {post.owner_name}</p>
          </div>
          <div className="flex flex-row gap-1 min-w-[150px] justify-end">
            <h3 className="font-bold">{post.price} Baht</h3>
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
