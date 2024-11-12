import { Button } from "@yuemnoi/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@yuemnoi/components/ui/dialog";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@yuemnoi/app/client/client";
import Image from "next/image";

interface BorrowingPostProp {
  id: number;
  description: string;
  owner_name: string;
  created_at: string;
}
interface BorrowingPostRequestProp {
  id: number;
  lending_post: {
    id: number;
    item_name: string;
    description: string;
    owner_name: string;
    image_url: string;
  };
}

export default function BorrowingPost({ data }: { data: BorrowingPostProp[] }) {
  const [accept, setAccepted] = useState<number>();
  const [borrowingPostRequestData, setBorrowingPostRequestData] =
    useState<BorrowingPostRequestProp[]>();
  const [selected, setSelected] = useState<number>();
  const [requestId, setRequestId] = useState<number>();

  useEffect(() => {
    const accepted = async (lending_request_id: number) => {
      if (lending_request_id != 0) {
        AxiosInstance.get(
          `reserves/lending-requests/accept/${lending_request_id}`
        )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    };
    accepted(accept || 0);
  }, [accept]);

  useEffect(() => {
    if (requestId != undefined) {
      const fetchData = async () => {
        AxiosInstance.get(`reserves/lending-requests/my-requests/${requestId}`)
          .then((response) => {
            console.log("test", response);
            setBorrowingPostRequestData(response.data.data || []);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      };
      fetchData();
    }
  }, [requestId]);

  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ id, description, owner_name, created_at }) => {
        return (
          <Dialog key={id}>
            <DialogTrigger
              className="w-full "
              onClick={() => {
                setRequestId(id);
                console.log(id);
              }}
            >
              <div className="h-fit flex-1 flex-col justify-start items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-slate-200">
                <div className="flex flex-row justify-between">
                  <h2 className="text-sm font-bold">{`${owner_name}`}</h2>
                  <h2 className="text-sm line-clamp-1 break-all text-gray-400 ">{`Created At:   ${created_at}`}</h2>
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
              <div className="h-[250px] overflow-scroll p-2">
                <div className="h-fit flex flex-1 flex-col space-y-4">
                  {borrowingPostRequestData?.map(
                    ({ id, lending_post }, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            selected != id
                              ? "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg hover:bg-secondary-hover hover:ring-2 hover:ring-primary hover:cursor-pointer"
                              : "h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg bg-secondary-hover ring-2 ring-primary hover:cursor-pointer"
                          }
                          onClick={() => {
                            setSelected(id);
                          }}
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
                                {lending_post.description}
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
                    }
                  )}
                </div>
              </div>

              <DialogClose>
                <div className="w-full flex justify-end">
                  <Button
                    className="w-fit"
                    onClick={() => {
                      console.log("accepted", selected);
                      setAccepted(selected);
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              </DialogClose>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
