import Image from "next/image";
interface BorrowingRequestProp {
  id: string;
  status: string;
  post: {
    item_name: string;
    description: string;
    image_url: string;
    owner_name: string;
  };
}
export default function BorrowingRequest({
  data,
}: {
  data: BorrowingRequestProp[];
}) {
  console.log("data", data);
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(({ post, status }, index) => {
        return (
          <div
            key={index}
            className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg "
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
                <div className="flex flex-row gap-2">
                  <h2 className="text-sm font-medium line-clamp-1 break-all text-gray-500">{`${post.owner_name}`}</h2>
                  <h2 className="text-sm font-bold line-clamp-1 break-all text-primary">
                    {status}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
