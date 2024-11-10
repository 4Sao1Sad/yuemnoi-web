/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import { requestTypeEnum } from "../enum/RequestType";
import Image from "next/image";
import ReturnItemBorrowingRequest from "../actions/returnItemBorrowingRequest";
import ReturnItemLendingRequest from "../actions/returnItemLendingRequest";
import { useEffect } from "react";

interface ActiveRequestProp {
  requset_type: string;
  id: number;
  role: string;
  post: {
    id: 1;
    description: string;
    owner_name: string;
  };
  borrower: string;
}

// get my active request

export function ActiveRequest({
  data,
}: {
  data: ActiveRequestProp[] | undefined;
}) {
  // const mockData = {
  //   data: [
  //     {
  //       requset_type: "Borrowing request",
  //       id: 3,
  //       borrowing_user_id: 1,
  //       lending_user_id: 2,
  //       post_id: 1,
  //       role: "borrower",
  //       post: {
  //         id: 1,
  //         description: "testAgain",
  //         active_status: true,
  //         owner_id: 2,
  //         owner_name: "Premika",
  //         updated_at: {
  //           seconds: 1730726460,
  //           nanos: 607403000,
  //         },
  //       },
  //       borrower: "bolona",
  //     },
  //     {
  //       requset_type: "Borrowing request",
  //       id: 3,
  //       borrowing_user_id: 1,
  //       lending_user_id: 2,
  //       post_id: 1,
  //       role: "borrower",
  //       post: {
  //         id: 1,
  //         description: "testAgain",
  //         active_status: true,
  //         owner_id: 2,
  //         owner_name: "Premika",
  //         updated_at: {
  //           seconds: 1730726460,
  //           nanos: 607403000,
  //         },
  //       },
  //       borrower: "bolona",
  //     },
  //   ],
  // };

  useEffect(() => {
    const returnItem = async (id: number) => {
      await ReturnItemBorrowingRequest(id);
      await ReturnItemLendingRequest(id);
    };
  }, []);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data?.map(({ id, borrower, post, requset_type }, index) => {
        return (
          <div
            key={id}
            className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
          >
            <h2 className="text-xs font-medium">
              {requset_type == requestTypeEnum.lending
                ? `${borrower} กำลังยืม..`
                : "ฉันกำลังยืม.."}
            </h2>

            <div className="flex flex-row  w-full items-center gap-4">
              {/* <Image
                  src={imageUrl}
                  width={45}
                  height={45}
                  alt="imageUrl"
                ></Image> */}
              <div className="flex flex-col">
                <h1 className="line-clamp-1 break-all font-medium">
                  {post.description}
                </h1>
                <div className="flex flex-row gap-2">
                  <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${post.owner_name}`}</h2>
                </div>
              </div>
            </div>
            {requset_type == requestTypeEnum.lending ? (
              <Button
                className="w-full"
                onClick={() => {
                  // returnItem();
                }}
              >
                Mark Return
              </Button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
