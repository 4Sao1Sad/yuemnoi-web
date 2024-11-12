"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AxiosInstance } from "@yuemnoi/app/client/client";
interface BorrowingPostRequestProp {
  id: string;
  lending_post: {
    item_name: string;
    owner_name: string;
    image_url: string;
  };
}

// resp = append(resp, &dto.LendingPost{
//   Id:          uint64(post.ID),
//   ItemName:    post.ItemName,
//   Description: post.Description,
//   Price:       post.Price,
//   ImageURL:    post.ImageURL,
//   OwnerId:     post.OwnerID,
//   OwnerName:   post.OwnerName,
//   CreatedAt:   post.CreatedAt,
// })
export default function BorrowingPostsRequest({ postId }: { postId: number }) {
  // const [borrowingPostRequestData, setBorrowingPostRequestData] =
  //   useState<BorrowingPostRequestProp[]>();
  const [selected, setSelected] = useState<number>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     AxiosInstance.get(`reserves/lending-requests/my-requests/${postId}`)
  //       .then((response) => {
  //         console.log(response);
  //         setBorrowingPostRequestData(response.data.data || []);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error.message);
  //       });
  //   };
  //   fetchData();
  // }, []);

  const borrowingPostRequestData = [
    {
      id: 1,
      lending_post: {
        item_name: "eiei",
        owner_name: "wow",
        image_url: "",
      },
    },
  ];

  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {borrowingPostRequestData?.map(({ id, lending_post }, index) => {
        return (
          <div
            key={index}
            className={
              selected != id
                ? "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-secondary-hover hover:ring-2 hover:ring-primary hover:cursor-pointer"
                : "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg bg-secondary-hover ring-2 ring-primary hover:cursor-pointer"
            }
            onClick={() => setSelected(id)}
          >
            <div className="flex flex-row  w-full items-center gap-4">
              <Image
                src={lending_post.image_url}
                width={45}
                height={45}
                alt="imageUrl"
              ></Image>
              <div className="flex flex-col">
                <h1 className="line-clamp-1 break-all font-medium">
                  {lending_post.item_name}
                </h1>
                <div className="flex flex-row gap-2">
                  <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${lending_post.owner_name}`}</h2>
                  {/* <h2 className="text-sm font-bold text-primary line-clamp-1 break-all ">
                    {lending_post.}
                  </h2> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
