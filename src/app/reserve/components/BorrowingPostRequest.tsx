/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import { borrowStatusEnum } from "./BorrowStatusEnum";
import Image from "next/image";
import { useState } from "react";

interface BorrowingPostRequestProp {
  id: string;
  itemName: string;
  lenderUserName: string;
  imageUrl: string;
  borrowStatus: borrowStatusEnum;
}
export default function BorrowingPostRequest({
  data,
}: {
  data: BorrowingPostRequestProp[];
}) {
  const [selected, setSelected] = useState("");
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({ id, itemName, lenderUserName, imageUrl, borrowStatus }, index) => {
          return (
            <div
              key={id}
              className={
                selected != id
                  ? "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-secondary-hover hover:ring-2 hover:ring-primary hover:cursor-pointer"
                  : "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg bg-secondary-hover ring-2 ring-primary hover:cursor-pointer"
              }
              onClick={() => setSelected(id)}
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
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${lenderUserName}`}</h2>
                    <h2 className="text-sm font-bold text-primary line-clamp-1 break-all ">
                      {borrowStatus}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
      <div className="w-full flex justify-end">
        <Button className="w-fit">Confirm</Button>
      </div>
    </div>
  );
}
