"use client";

import React from "react";
import LendingCard from "./LendingCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";

import { lendingPosts, LendingPost } from "../mockData";

export default function LendingPage({ searchTerm }: { searchTerm: string }) {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState<LendingPost | null>(
    null
  );

  const filteredPosts = lendingPosts.filter((post) =>
    post.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReserveClick = (post: LendingPost) => {
    setSelectedPost(post);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedPost(null);
  };

  const handleConfirmReservation = () => {
    console.log(`Reserving item: ${selectedPost?.itemName}`);
    handleCloseDialog();
  };

  return (
    <div>
      {filteredPosts.map((post) => (
        <LendingCard
          key={post.id}
          post={post}
          onReserveClick={handleReserveClick}
        />
      ))}

      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogTitle>Reserve {selectedPost?.itemName}</DialogTitle>
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
