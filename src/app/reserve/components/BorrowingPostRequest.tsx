import { useState } from "react";
import { borrowStatusEnum } from "../enum/BorrowStatusEnum";
import Image from "next/image";
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
  data: BorrowingPostRequestProp;
}) {
  const [selected, setSelected] = useState("");
  return (
    <div
      key={data.id}
      className={
        selected != data.id
          ? "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-secondary-hover hover:ring-2 hover:ring-primary hover:cursor-pointer"
          : "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg bg-secondary-hover ring-2 ring-primary hover:cursor-pointer"
      }
      onClick={() => setSelected(data.id)}
    >
      <div className="flex flex-row  w-full items-center gap-4">
        <Image
          src={data.imageUrl}
          width={45}
          height={45}
          alt="imageUrl"
        ></Image>
        <div className="flex flex-col">
          <h1 className="line-clamp-1 break-all font-medium">
            {data.itemName}
          </h1>
          <div className="flex flex-row gap-2">
            <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${data.lenderUserName}`}</h2>
            <h2 className="text-sm font-bold text-primary line-clamp-1 break-all ">
              {data.borrowStatus}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
