"use client";

import React from "react";
import { BorrowingPost } from "../mockData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "../../../components/ui/dialog";
import { Button } from "@yuemnoi/components/ui/button";
import LendingOffer from "./LendingOffer";
import { lendingStatusEnum } from "./LendingStatusEnum";

export default function BorrowingCard({ post }: { post: BorrowingPost }) {
  const lendingPostRequestData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      lendingStatus: lendingStatusEnum.available,
    },
    {
      id: "2",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      lendingStatus: lendingStatusEnum.unavailable,
    },
    {
      id: "3",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      lendingStatus: lendingStatusEnum.unavailable,
    },
    {
      id: "4",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      lendingStatus: lendingStatusEnum.unavailable,
    },
    {
      id: "5",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      lendingStatus: lendingStatusEnum.unavailable,
    },
  ];
  return (
    <Dialog>
      <DialogTrigger className="w-full ">
        <div className="h-fit flex flex-col items-start px-4 py-3 space-y-2 shadow-lg rounded-lg mb-4">
          <p className="font-semibold">{post.ownerName}</p>
          <h3 className="items-start">{post.description}</h3>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="w-full text-start">
          <DialogTitle>Select Your Lending Items</DialogTitle>
        </DialogHeader>
        <div className="h-[250px] overflow-scroll p-2">
          <LendingOffer data={lendingPostRequestData}></LendingOffer>
        </div>

        <DialogFooter>
          <Button
            // onClick={}
            variant="outline"
            size="default"
            className="mt-2 w-full"
          >
            Reject
          </Button>
          <Button
            // onClick={}
            variant="default"
            size="default"
            className="mt-2 w-full"
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
