import { AxiosInstance } from "@yuemnoi/app/client/client";
import { Button } from "@yuemnoi/components/ui/button";
import { useEffect, useState } from "react";

interface LendingPostProp {
  id: string;
  item_name: string;
  post_id: number;
  borrower: string;
  borrowing_post_id: number;
  lending_post_id: number;
  // image_url: string;
  post: {
    id: number;
    owner_name: string;
  };
}

interface requestId {
  lending: number;
  borrowing: number;
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

export default function LendingPost({ data }: { data: LendingPostProp[] }) {
  const [accept, setAccepted] = useState<requestId>();
  const [reject, setRejected] = useState<requestId>();

  useEffect(() => {
    const accepted = async (
      lending_request_id: number,
      borrowing_request_id: number
    ) => {
      AxiosInstance.get(
        `reserves/lending-requests/accept/${lending_request_id}`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
      AxiosInstance.get(
        `reserves/borrowing-requests/accept/${borrowing_request_id}`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    accepted(accept?.lending || 0, accept?.borrowing || 0);
  }, [accept]);

  useEffect(() => {
    const rejected = async (
      lending_request_id: number,
      borrowing_request_id: number
    ) => {
      AxiosInstance.post(
        `reserves/lending-requests/reject/${lending_request_id}`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
      AxiosInstance.post(
        `reserves/borrowing-requests/reject/${borrowing_request_id}`
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    rejected(reject?.lending || 0, reject?.borrowing || 0);
  }, [reject]);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({
          id,
          item_name,
          post,
          borrower,
          borrowing_post_id,
          lending_post_id,
        }) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <div className="flex flex-row  w-full items-center gap-4">
                {/* <Image
                src={`/${image_url}`}
                width={45}
                height={45}
                alt="imageUrl"
              ></Image> */}
                <div className="flex flex-col">
                  <h1 className="line-clamp-1 break-all font-medium">
                    {item_name}
                  </h1>
                  <div className="flex flex-row gap-2">
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${post.owner_name}`}</h2>
                  </div>
                </div>
              </div>
              <h2 className="text-xs font-medium">{`${borrower} ต้องการที่จะยืม..`}</h2>
              <div className="flex flex-row gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setRejected({
                      lending: borrowing_post_id,
                      borrowing: lending_post_id,
                    });
                  }}
                >
                  Reject
                </Button>
                <Button
                  className="w-full"
                  onClick={() =>
                    setAccepted({
                      lending: borrowing_post_id,
                      borrowing: lending_post_id,
                    })
                  }
                >
                  Accept
                </Button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
