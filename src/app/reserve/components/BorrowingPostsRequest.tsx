/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@yuemnoi/components/ui/button";
import { borrowStatusEnum } from "../enum/BorrowStatusEnum";
import { useState } from "react";
import BorrowingPostRequest from "./BorrowingPostRequest";
import GetBorrowingPostsById from "../actions/getBorrowingPostsById";

export default async function BorrowingPostsRequest({
  postId,
}: {
  postId: number;
}) {
  const borrowingPostRequestData = await GetBorrowingPostsById();
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {borrowingPostRequestData.map((data, index) => {
        return <BorrowingPostRequest data={data} key={index} />;
      })}
    </div>
  );
}
