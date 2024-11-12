"use client";

import React, { useEffect } from "react";
import LendingCard from "./LendingCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";

import type { LendingPost } from "../mockData";
import { AxiosInstance } from "@yuemnoi/app/client/client";
import { useAuth } from "@yuemnoi/provider/AuthProvider";

export default function LendingPage({ searchTerm }: { searchTerm: string }) {
  const user = useAuth();
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState<LendingPost | null>(
    null
  );
  const [lendingPosts, setLendingPosts] = React.useState<LendingPost[]>([]);

  const handleReserveClick = (post: LendingPost) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPost(null);
  };

  const handleConfirmReservation = () => {
    console.log(`Reserving item: ${selectedPost?.id}`);

    AxiosInstance.post("/reserves/borrowing-requests", {
      lending_user_id: user.id,
      post_id: selectedPost?.id,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCloseDialog();
  };
  useEffect(() => {
    AxiosInstance.get(
      `/posts/lending-posts?search=${searchTerm.toLocaleLowerCase()}`
    )
      .then((res) => {
        console.log(res.data);
        setLendingPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit gap-8">
      {lendingPosts.map((post) => (
        <LendingCard
          key={post.id}
          post={post}
          onReserveClick={handleReserveClick}
        />
      ))}

      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogTitle>Reserve {selectedPost?.item_name}</DialogTitle>
          <DialogDescription>
            Are you sure you want to reserve this item?
          </DialogDescription>
          <DialogFooter>
            <Button
              onClick={handleCloseDialog}
              variant="outline"
              size="default"
              className="mt-2"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmReservation}
              variant="default"
              size="default"
              className="mt-2"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
