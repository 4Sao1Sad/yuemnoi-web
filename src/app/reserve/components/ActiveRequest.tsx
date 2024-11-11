import { Button } from "@yuemnoi/components/ui/button";
import { requestTypeEnum } from "../enum/RequestType";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@yuemnoi/app/client/client";

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

interface requestId {
  lending: number;
  borrowing: number;
}
// get my active request

export function ActiveRequest({ data }: { data: ActiveRequestProp[] }) {
  const [returned, setReturned] = useState<requestId>();

  useEffect(() => {
    const returnItem = async (
      lending_request_id: number,
      borrowing_request_id: number
    ) => {
      AxiosInstance.post(`reserves/active-requests${lending_request_id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
      AxiosInstance.post(`reserves/active-requests${borrowing_request_id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    returnItem(returned?.lending || 0, returned?.borrowing || 0);
  }, [returned]);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ id, borrower, post, requset_type }) => {
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
                  setReturned({ lending: id, borrowing: post.id });
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
