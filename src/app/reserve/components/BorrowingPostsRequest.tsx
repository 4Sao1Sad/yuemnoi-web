"use client";
import { borrowStatusEnum } from "../enum/BorrowStatusEnum";
import { useEffect, useState } from "react";
import Image from "next/image";
import GetBorrowingPostsById from "../actions/getBorrowingPostsById";
import { AxiosInstance } from "@yuemnoi/app/client/client";
interface BorrowingPostRequestProp {
  id: string;
  item_name: string;
  lender_username: string;
  image_url: string;
  borrowStatus: borrowStatusEnum;
}
export default function BorrowingPostsRequest({ postId }: { postId: number }) {
  const [borrowingPostRequestData, setBorrowingPostRequestData] =
    useState<BorrowingPostRequestProp[]>();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      AxiosInstance.get("posts/lending-posts/me")
        .then((response) => {
          console.log(response);
          setBorrowingPostRequestData(response.data.data || []);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {borrowingPostRequestData?.map((data, index) => {
        return (
          <div
            key={index}
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
      })}
    </div>
  );
}
