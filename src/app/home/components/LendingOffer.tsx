import Image from "next/image";
import type { lendingStatusEnum } from "./LendingStatusEnum";
import { useState } from "react";

export interface LendingPostOfferProp {
  id: string;
  item_name: string;
  owner_name: string;
  image_url: string;
  lending_status: lendingStatusEnum;
}
export default function LendingOffer({
  data,
  setSelected,
  selected,
}: {
  data: LendingPostOfferProp[];
  setSelected: (id: string) => void;
  selected: string;
}) {
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({
          id,
          item_name: itemName,
          owner_name: lenderUserName,
          image_url: imageUrl,
          lending_status: lendingStatus,
        }) => {
          return (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={id}
              className={
                selected !== id
                  ? "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-secondary-hover hover:ring-2 hover:ring-primary hover:cursor-pointer"
                  : "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg bg-secondary-hover ring-2 ring-primary hover:cursor-pointer"
              }
              onClick={() => setSelected(id)}
            >
              <div className="flex flex-row  w-full items-center gap-4">
                <Image src={imageUrl} width={45} height={45} alt="imageUrl" />
                <div className="flex flex-col">
                  <h1 className="line-clamp-1 break-all font-medium">
                    {itemName}
                  </h1>
                  <div className="flex flex-row gap-2">
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${lenderUserName}`}</h2>
                    <h2 className="text-sm font-bold text-primary line-clamp-1 break-all ">
                      {lendingStatus}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
