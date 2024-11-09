/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface LendingPostProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  borrowerUserName: string;
  imageUrl: string;
}

export default async function LendingRequest({
  data,
}: {
  data: Promise<LendingPostProp[]>;
}) {
  const lendingPostData = await data;
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {lendingPostData.map(
        (
          { id, itemName, name, surname, borrowerUserName, imageUrl },
          index
        ) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <div className="flex flex-row  w-full items-center gap-4">
                <Image
                  src={imageUrl}
                  width={45}
                  height={45}
                  alt="imageUrl"
                ></Image>
                <div className="flex flex-col">
                  <h1 className="line-clamp-1 break-all font-medium">
                    {itemName}
                  </h1>
                  <div className="flex flex-row gap-2">
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${name}   ${surname}`}</h2>
                  </div>
                </div>
              </div>
              <h2 className="text-xs font-medium">{`${borrowerUserName} ต้องการที่จะยืม..`}</h2>
              <div className="flex flex-row gap-3">
                <Button variant="outline" className="w-full">
                  Reject
                </Button>
                <Button className="w-full">Accept</Button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
