/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { activeStatusEnum } from "./ActiveStatusEnum";

interface BorrowingRequestProp {
  id: string;
  itemName: string;
  name: string;
  surname: string;
  imageUrl: string;
  activeStatus: activeStatusEnum;
}

// response := pb.BorrowingRequest{
//     Id:              uint64(res.ID),
//     LendingUserId:   uint64(res.LendingUserID),
//     BorrowingUserId: uint64(res.BorrowingUserID),
//     LendingPostId:   uint64(res.LendingPostID),
//     BorrowingPostId: uint64(res.BorrowingPostID),
//     Status:          util.MapModelToProtoStatus(res.Status),
//     ActiveStatus:    res.ActiveStatus,
// }

export default function BorrowingRequest({
  data,
}: {
  data: BorrowingRequestProp[];
}) {
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({ id, itemName, name, surname, imageUrl, activeStatus }, index) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg "
            >
              <div className="flex flex-row  w-full items-center gap-4">
                <Image
                  src={imageUrl}
                  width={45}
                  height={45}
                  alt="imageUrl"
                ></Image>
                <div className="flex flex-col">
                  <h1 className="line-clamp-1 break-all font-medium">
                    {itemName}
                  </h1>
                  <div className="flex flex-row gap-2">
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${name}   ${surname}`}</h2>
                    <h2 className="text-sm font-bold line-clamp-1 break-all text-primary">
                      {activeStatus}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
