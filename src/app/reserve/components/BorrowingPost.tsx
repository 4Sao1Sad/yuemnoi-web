/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@yuemnoi/components/ui/dialog";
import { Input } from "@yuemnoi/components/ui/input";
import Image from "next/image";
import { borrowStatusEnum } from "./BorrowStatusEnum";
import BorrowingPostRequest from "./BorrowingPostRequest";

interface BorrowingPostProp {
  id: string;
  description: string;
  name: string;
  surname: string;
  createdAt: string;
}
export default function BorrowingPost({ data }: { data: BorrowingPostProp[] }) {
  const borrowingPostRequestData = [
    {
      id: "1",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      borrowStatus: borrowStatusEnum.available,
    },
    {
      id: "2",
      itemName: "เครื่องคิดเลข",
      lenderUserName: " น้องขิม",
      imageUrl: "/next.svg",
      borrowStatus: borrowStatusEnum.unavailable,
    },
  ];

  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ id, description, name, surname, createdAt }, index) => {
        return (
          <Dialog key={id}>
            <DialogTrigger className="w-full ">
              <div className="h-fit flex-1 flex-col justify-start items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-slate-200">
                <div className="flex flex-row justify-between">
                  <h2 className="text-sm font-bold">{`${name}   ${surname}`}</h2>
                  <h2 className="text-sm line-clamp-1 break-all text-gray-400 ">{`Created At:   ${createdAt}`}</h2>
                </div>
                <h1 className=" flex justify-start line-clamp-1 break-all">
                  {description}
                </h1>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="w-full text-start">
                <DialogTitle>Select Post to Borrow</DialogTitle>
              </DialogHeader>
              <BorrowingPostRequest
                data={borrowingPostRequestData}
              ></BorrowingPostRequest>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
