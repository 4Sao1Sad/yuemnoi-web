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
import { AxiosInstance } from "../client/client";

export default function HomePage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("lending");
  const [searchTerm, setSearchTerm] = useState("");

  // State for form fields
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreateClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (activeTab === "lending") {
      if (!itemName || !description || !imageUrl || !price) {
        alert("Please fill in all required fields.");
        return;
      }
      AxiosInstance.post("/posts/lending-posts", {
        item_name: itemName,
        description,
        image_url: imageUrl,
        price: price,
      }).then((res) => {
        console.log("borrowing post created");
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
      // Handle lending form submission here (e.g., send data to server)
    } else {
      if (!description) {
        alert("Please provide a description.");
        return;
      }
      AxiosInstance.post("/posts/borrowing-posts", {
        description,
      }).then((res) => {
        console.log(res.data);
        console.log("lending post created");
      }).catch((err) => {
        console.log(err);
      });
      // Handle borrowing form submission here
    }

    handleCloseDialog();
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
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="imageUrl">
                      Image URL
                    </label>
                    <Input
                      placeholder="Image URL"
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(Number.parseFloat(e.target.value))}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="resize-none"
                    required
                  />
                </div>
              )}
              <Button
                onClick={handleCloseDialog}
                variant="outline"
                size="default"
                className="mt-2 w-full"
                type="button"
              >
                Close
              </Button>
              <Button
                variant="default"
                size="default"
                className="mt-2 w-full"
                type="submit"
              >
                Create
              </Button>
            </form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}
