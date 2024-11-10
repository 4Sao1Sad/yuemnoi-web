// import { requestTypeEnum } from "../enum/RequestType";

//GetMyActiveRequest
// interface ActiveRequestProp {
//   id: string;
//   itemName: string;
//   borrowerUsername: string;
//   lenderUserName: string;
//   imageUrl: string;
//   type: requestTypeEnum;
//   post: Post;
// }
// interface Post {
//   id: number;
//   description: string;
//   activeStatus: boolean;
//   ownerId: number;
//   ownerName: string;
// }

export default async function getActiveRequest() {
  const response = await fetch(
    `https://2ec3-184-22-33-12.ngrok-free.app/reserves/active-requests`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  console.log();
  if (!response.ok) {
    throw new Error("Failed to get active request");
  }

  return await response.json();
}

// {
//   "data": [
//       {
//           "requset_type": "Borrowing request",
//           "id": 3,
//           "borrowing_user_id": 1,
//           "lending_user_id": 2,
//           "post_id": 1,
//           "role": "borrower",
//           "post": {
//               "id": 1,
//               "description": "testAgain",
//               "active_status": true,
//               "owner_id": 2,
//               "owner_name": "Premika",
//               "updated_at": {
//                   "seconds": 1730726460,
//                   "nanos": 607403000
//               }
//           },
//           "borrower": "bolona"
//       }
//   ]
// }
