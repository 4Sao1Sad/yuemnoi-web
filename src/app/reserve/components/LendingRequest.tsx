import Image from "next/image";

interface LendingRequestProp {
  id: string;
  lending_post: {
    item_name: string;
    description: string;
    owner_name: string;
    image_url: string;
  };
  borrowing_post: {
    item_name: string;
    owner_name: string;
    description: string;
    created_at: string;
  };
}
export default function LendingRequest({
  data,
}: {
  data: LendingRequestProp[];
}) {
  console.log("data", data);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data?.map(({ id, lending_post, borrowing_post }) => {
        return (
          <div
            key={id}
            className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
          >
            <h2 className="text-xs font-medium">ฉันกำลังเสนอ..</h2>

            <div className="flex flex-row  w-full items-center gap-4">
              <Image
                src={lending_post.image_url}
                width={45}
                height={45}
                alt="imageUrl"
              ></Image>
              <div className="flex flex-col">
                <h1 className="line-clamp-1 break-all font-medium">
                  {lending_post.item_name}
                </h1>
                <div className="flex flex-row gap-2">
                  <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${lending_post.owner_name}`}</h2>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-1">
                <h2 className="text-sm font-medium ">ให้กับ</h2>
                <h2 className="text-sm font-bold ">
                  {borrowing_post.owner_name}
                </h2>
              </div>
            </div>
            <h1 className="line-clamp-1 break-all">
              {borrowing_post.description}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
