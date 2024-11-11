"use client";

import React, { useEffect } from "react";
import type { BorrowingPost } from "../mockData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "../../../components/ui/dialog";
import { Button } from "@yuemnoi/components/ui/button";
import LendingOffer, { type LendingPostOfferProp } from "./LendingOffer";
import { lendingStatusEnum } from "./LendingStatusEnum";
import { set } from "react-hook-form";
import { AxiosInstance } from "@yuemnoi/app/client/client";

export default function BorrowingCard({ post, lendingPostRequestData }: { post: BorrowingPost, lendingPostRequestData: LendingPostOfferProp[] }) {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  function handleConfirm() {
    console.log("confirm");
    setDialogOpen(false);
  }
  return (
    <Dialog open={isDialogOpen} >
      <DialogTrigger className="w-full " onClick={() => setDialogOpen(true)}>
        <div className="h-fit flex flex-col items-start px-4 py-3 space-y-2 shadow-lg rounded-lg mb-4">
          <p className="font-semibold text-start">{post.owner_name}</p>
          <h3 className="items-start text-start">{post.description}</h3>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="w-full text-start">
          <DialogTitle>Select Your Lending Items</DialogTitle>
        </DialogHeader>
        <div className="h-[250px] overflow-scroll p-2">
          <LendingOffer data={lendingPostRequestData} />
        </div>

        <DialogFooter className="flex flex-row gap-4">
          <Button
            onClick={() => setDialogOpen(false)}
            variant="outline"
            size="default"
            className="mt-2 w-full"
          >
            Reject
          </Button>
          <Button
            onClick={handleConfirm}
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
