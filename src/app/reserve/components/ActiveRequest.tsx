/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import { requestTypeEnum } from "../enum/RequestType";
import Image from "next/image";

interface ActiveRequestProp {
  id: string;
  itemName: string;
  borrowerUsername: string;
  lenderUserName: string;
  imageUrl: string;
  type: requestTypeEnum;
}

// get my active request

export function ActiveRequest({ data }: { data: ActiveRequestProp[] }) {
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        (
          { id, itemName, borrowerUsername, lenderUserName, imageUrl, type },
          index
        ) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <h2 className="text-xs font-medium">
                {type == requestTypeEnum.lending
                  ? `${borrowerUsername} กำลังยืม..`
                  : "ฉันกำลังยืม.."}
              </h2>

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
                  </div>
                </div>
              </div>
              {type == requestTypeEnum.lending ? (
                <Button className="w-full">Mark Return</Button>
              ) : null}
            </div>
          );
        }
      )}
    </div>
  );
}
