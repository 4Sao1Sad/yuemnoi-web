import { AxiosInstance } from "@yuemnoi/app/client/client";
import { Button } from "@yuemnoi/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
interface LendingPostProp {
  id: number;
  item_name: string;
  post_id: number;
  borrower: string;
  borrowing_post_id: number;
  lending_post_id: number;
  post: {
    id: number;
    description: string;
    owner_name: string;
    image_url: string;
  };
}

export default function LendingPost({ data }: { data: LendingPostProp[] }) {
  const [accept, setAccepted] = useState<number>(0);
  const [reject, setRejected] = useState<number>(0);

  useEffect(() => {
    const accepted = async (borrowing_request_id: number) => {
      if (borrowing_request_id != 0) {
        AxiosInstance.post(
          `reserves/borrowing-requests/accept/${borrowing_request_id}`
        )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    };
    accepted(accept);
  }, [accept]);

  useEffect(() => {
    const rejected = async (borrowing_request_id: number) => {
      if (borrowing_request_id != 0) {
        AxiosInstance.post(
          `reserves/borrowing-requests/reject/${borrowing_request_id}`
        )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    };
    rejected(reject);
  }, [reject]);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ id, post, borrower }, index) => {
        return (
          <div
            key={index}
            className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
          >
            <div className="flex flex-row  w-full items-center gap-4">
              <Image
                src={post.image_url}
                width={45}
                height={45}
                alt="imageUrl"
              ></Image>
              <div className="flex flex-col">
                <h1 className="line-clamp-1 break-all font-medium">
                  {post.description}
                </h1>
                <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-300">{`by ${post.owner_name}`}</h2>
              </div>
            </div>
            <h2 className="text-xs font-medium">{`${borrower} ต้องการที่จะยืม..`}</h2>
            <div className="flex flex-row gap-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setRejected(id);
                }}
              >
                Reject
              </Button>
              <Button className="w-full" onClick={() => setAccepted(id)}>
                Accept
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
