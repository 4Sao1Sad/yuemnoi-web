import { Button } from "@yuemnoi/components/ui/button";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@yuemnoi/app/client/client";
import Image from "next/image";
interface ActiveRequestProp {
  requset_type: string;
  id: number;
  role: string;
  post: {
    id: 1;
    description: string;
    owner_name: string;
    image_url: string;
  };
  borrower: string;
}

export function ActiveRequest({ data }: { data: ActiveRequestProp[] }) {
  const [returned, setReturned] = useState<number>(0);
  const [requestType, setRequestType] = useState<string>("");
  useEffect(() => {
    const returnItem = async (id: number, request_type: string) => {
      if (returned != 0) {
        if (request_type == "Lending request") {
          AxiosInstance.post(`reserves/lending-requests/return/${id}`)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error("Error:", error.message);
            });
        }
        if (request_type == "Borrowing request") {
          AxiosInstance.post(`reserves/borrowing-requests/return/${id}`)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error("Error:", error.message);
            });
        }
      }
    };
    returnItem(returned, requestType);
  }, [returned, requestType]);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ id, borrower, role, post, requset_type }, index) => {
        return (
          <div
            key={index}
            className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
          >
            <h2 className="text-xs font-medium">
              {role == "lender" ? `${borrower} กำลังยืม..` : "ฉันกำลังยืม.."}
            </h2>

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
                <div className="flex flex-row gap-2">
                  <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`by ${post.owner_name}`}</h2>
                </div>
              </div>
            </div>
            {role == "lender" ? (
              <Button
                className="w-full"
                onClick={() => {
                  setRequestType(requset_type);
                  setReturned(id);
                  console.log("id", id);
                  console.log("request", requset_type);
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
