/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

interface LendingRequestProp {
  id: string;
  itemName: string;
  description: string;
  name: string;
  surname: string;
  borrowerUserName: string;
  imageUrl: string;
  createdAt: string;
}

// resp := pb.LendingRequest{
//     Id:              uint64(request.ID),
//     LendingUserId:   uint64(request.LendingUserID),
//     BorrowingUserId: uint64(request.BorrowingUserID),
//     PostId:          uint64(request.PostID),
//     Status:          util.MapModelToProtoStatus(request.Status),
//     ActiveStatus:    request.ActiveStatus,
// }

export default async function LendingRequest({
  data,
}: {
  data: Promise<LendingRequestProp[]>;
}) {
  const lendingRequestsData = await data;
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {lendingRequestsData.map(
        (
          {
            id,
            itemName,
            description,
            name,
            surname,
            borrowerUserName,
            imageUrl,
            createdAt,
          },
          index
        ) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <h2 className="text-xs font-medium">ฉันกำลังเสนอ..</h2>

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
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <h2 className="text-sm font-medium ">ให้กับ</h2>
                  <h2 className="text-sm font-bold ">{borrowerUserName}</h2>
                </div>
                <h2 className="text-sm line-clamp-1 break-all text-gray-400 ">{`Created At:   ${createdAt}`}</h2>
              </div>
              <h1 className="line-clamp-1 break-all">{description}</h1>
            </div>
          );
        }
      )}
    </div>
  );
}
