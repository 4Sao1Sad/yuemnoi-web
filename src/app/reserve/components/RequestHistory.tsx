import { Button } from "@yuemnoi/components/ui/button";
import Image from "next/image";
import { activeStatusEnum } from "../enum/ActiveStatusEnum";
import Rating from "@mui/material/Rating";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@yuemnoi/components/ui/dialog";
import { Input } from "@yuemnoi/components/ui/input";
import { AxiosInstance } from "@yuemnoi/app/client/client";
import { useEffect, useState } from "react";

interface RequestHistoryProp {
  id: string;
  borrower: string;
  lenderUserName: string;
  image_url: string;
  borrowing_user_id: number;
  activeStatus: activeStatusEnum;
  is_reject: boolean;
  post: {
    item_name: string;
    description: string;
  };
}

interface reviewInstance {
  rating: number;
  description: string;
  reviewee_id: number;
}

export default function RequestHistory({
  data,
}: {
  data: RequestHistoryProp[];
}) {
  const [reviewData, setReviewData] = useState<reviewInstance>();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  useEffect(() => {
    const createReview = async (
      rating: number,
      description: string,
      reviewee_id: number
    ) => {
      AxiosInstance.post(`/review`, {
        rating: rating,
        description: description,
        reviewee_id: reviewee_id,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    };
    createReview(
      reviewData?.rating || 0,
      reviewData?.description || "",
      reviewData?.reviewee_id || 0
    );
  }, [reviewData]);

  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({
          id,
          post,
          borrower,
          borrowing_user_id,
          lenderUserName,
          image_url,
          is_reject,
          activeStatus,
        }) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <h2 className="text-xs font-medium">
                {activeStatus == activeStatusEnum.accepted
                  ? "การยืมเสร็จสิ้น"
                  : ""}
              </h2>

              <div className="flex flex-row  w-full items-center gap-4">
                <Image
                  src={image_url}
                  width={45}
                  height={45}
                  alt="imageUrl"
                ></Image>
                <div className="flex flex-col">
                  <h1 className="line-clamp-1 break-all font-medium">
                    {post.description}
                  </h1>
                  <div className="flex flex-row gap-2">
                    {is_reject ? (
                      <h2 className="text-sm font-bold line-clamp-1 break-all text-primary">
                        Rejected by
                      </h2>
                    ) : (
                      <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">
                        ยืมโดย
                      </h2>
                    )}
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${borrower}`}</h2>
                  </div>
                </div>
              </div>
              {activeStatus == activeStatusEnum.accepted ? (
                <Dialog>
                  <DialogTrigger className="w-full ">
                    <Button className="w-full">Review</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="w-full text-start">
                      <DialogTitle>{`Review to ${lenderUserName}`}</DialogTitle>
                    </DialogHeader>
                    <Rating
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue || 0);
                      }}
                    />
                    <Input
                      className="h-[100px] overflow-scroll"
                      placeholder="Write your review here !"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    ></Input>
                    <div className="w-full flex gap-2 justify-end">
                      <DialogClose>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button
                          onClick={() =>
                            setReviewData({
                              rating: rating,
                              description: description,
                              reviewee_id: borrowing_user_id,
                            })
                          }
                        >
                          Create
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : null}
            </div>
          );
        }
      )}
    </div>
  );
}
