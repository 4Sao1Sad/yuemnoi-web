/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import Image from "next/image";
import { activeStatusEnum } from "./ActiveStatusEnum";
import Rating from "@mui/material/Rating";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@yuemnoi/components/ui/dialog";
import { Input } from "@yuemnoi/components/ui/input";

interface RequestHistoryProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  lenderUserName: string;
  imageUrl: string;
  activeStatus: activeStatusEnum;
}

// getHistory

export default function RequestHistory({
  data,
}: {
  data: RequestHistoryProp[];
}) {
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        (
          {
            id,
            itemName,
            name,
            surname,
            lenderUserName,
            imageUrl,
            activeStatus,
          },
          index
        ) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <h2 className="text-xs font-medium">
                {activeStatus == activeStatusEnum.accepted
                  ? "การยืมเสร็จสิ้น"
                  : ""}
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
                    {activeStatus == activeStatusEnum.rejected ? (
                      <h2 className="text-sm font-bold line-clamp-1 break-all text-primary">
                        Rejected by
                      </h2>
                    ) : (
                      <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">
                        ยืมโดย
                      </h2>
                    )}
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${name}   ${surname}`}</h2>
                  </div>
                </div>
              </div>
              {activeStatus == activeStatusEnum.accepted ? (
                <Dialog>
                  <DialogTrigger className="w-full ">
                    <Button className="w-full">Review</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="w-full text-start">
                      <DialogTitle>{`Review to ${lenderUserName}`}</DialogTitle>
                    </DialogHeader>
                    <Rating></Rating>
                    <Input
                      className="h-[100px] overflow-scroll"
                      placeholder="Write your review here !"
                    ></Input>
                    <div className="w-full flex gap-2 justify-end">
                      <DialogClose>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button>Create</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : null}
            </div>
          );
        }
      )}
    </div>
  );
}
