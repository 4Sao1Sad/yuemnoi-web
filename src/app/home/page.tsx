"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@yuemnoi/components/ui/tabs";
import BorrowingPage from "./components/BorrowingPage";
import LendingPage from "./components/LendingPage";
import CreateButton from "./components/CreateButton";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
} from "../../components/ui/dialog";

export default function HomePage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("lending");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="min-h-screen max-w-screen w-screen flex flex-col p-6">
      <div className="w-full px-4">
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <Tabs defaultValue="lending" className="w-full">
          <div className="w-full flex flex-row justify-between">
            <div>
              <TabsList>
                <TabsTrigger
                  value="lending"
                  onClick={() => setActiveTab("lending")}
                >
                  Lending Hub
                </TabsTrigger>
                <TabsTrigger
                  value="borrowing"
                  onClick={() => setActiveTab("borrowing")}
                >
                  Looking For
                </TabsTrigger>
              </TabsList>
            </div>
            <div>
              <CreateButton onCreateClick={handleCreateClick} />
            </div>
          </div>

          <TabsContent value="lending">
            <LendingPage searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="borrowing">
            <BorrowingPage searchTerm={searchTerm} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader className="text-start">
              {activeTab === "lending" ? (
                <>
                  <DialogTitle>Create Lending Post</DialogTitle>
                  <DialogDescription>
                    This post will allow others to request and borrow your item.
                  </DialogDescription>
                </>
              ) : (
                <>
                  <DialogTitle>Create Borrowing Post</DialogTitle>
                </>
              )}
            </DialogHeader>
            <form className="space-y-4">
              {activeTab === "lending" ? (
                <>
                  <div>
                    <label className="block mb-1" htmlFor="itemName">
                      Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Name"
                      id="itemName"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="description">
                      Description
                    </label>
                    <Textarea
                      placeholder="Description"
                      id="description"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="imageUrl">
                      Image URL
                    </label>
                    <Input
                      type="url"
                      placeholder="Image URL"
                      id="imageUrl"
                      required
                      className="mb-4"
                    />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="price">
                      Price
                    </label>
                    <Input
                      type="number"
                      placeholder="Price"
                      id="price"
                      step="0.5"
                      required
                      className="mb-4"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <Textarea
                    placeholder="Write what you're looking for! "
                    id="description"
                    className="resize-none"
                    required
                  />
                </div>
              )}
            </form>
            <DialogFooter className="flex flex-row gap-4">
              <Button
                onClick={handleCloseDialog}
                variant="outline"
                size="default"
                className="mt-2 w-full"
              >
                Close
              </Button>
              <Button
                onClick={handleCloseDialog}
                variant="default"
                size="default"
                className="mt-2 w-full"
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
