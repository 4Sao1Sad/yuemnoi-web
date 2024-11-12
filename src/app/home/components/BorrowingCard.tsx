"use client";

import React from "react";
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
import { AxiosInstance } from "@yuemnoi/app/client/client";

export default function BorrowingCard({
  post,
  lendingPostRequestData,
}: {
  post: BorrowingPost;
  lendingPostRequestData: LendingPostOfferProp[];
}) {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  function handleConfirm() {
    if (!selected || !post.owner_id || !post.id) {
      return;
    }
    AxiosInstance.post("/reserves/lending-requests/", {
      borrowing_user_id: post.owner_id,
      borrowing_post_id: post.id,
      lending_post_id: lendingPostRequestData[0].id,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setDialogOpen(false);
  }
  function handleSelect(id: string) {
    setSelected(id);
  }
  return (
    <Dialog open={isDialogOpen}>
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
          <LendingOffer
            data={lendingPostRequestData}
            setSelected={handleSelect}
            selected={selected}
          />
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
