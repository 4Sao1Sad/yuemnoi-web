"use client"
import EditProfileDialog from "../components/EditProfileDialog";
import UserRecentReview from "../components/UserRecentReviews";
export default function UserPage() {
  const name = "Bruce";
  const surname = "nun";
  const email = "bruce@hotmail.com"
  const description = "This is a description of the user profile review page."
  const score = 0;
  const data = [{ id: "1", name, surname, score, description },
  { id: "2", name, surname, score, description },
  { id: "3", name, surname, score, description },
  { id: "4", name, surname, score, description },
  { id: "5", name, surname, score, description },
  { id: "6", name, surname, score, description },
  { id: "7", name, surname, score, description },
  { id: "8", name, surname, score, description },
  { id: "9", name, surname, score, description },
  { id: "10", name, surname, score, description }
  ]

  return <div className=" min-h-screen max-w-screen w-screen flex flex-col">
    <div className="w-full px-4">
      <h3 className="text-xl font-bold my-3">User Profile</h3>
      <div className="h-fit flex-1 flex-col justify-center items-start my-3 px-6 py-3 space-y-2 shadow-lg rounded-lg">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-lg font-semibold line-clamp-1 break-all ">{`${name}   ${surname}`}</h2>
          <EditProfileDialog name="bruce" surname="nun" />
        </div>
        <h4 className="line-clamp-1 break-all h6">{`Contact:  ${email}`}</h4>
      </div>
      <hr className="w-full text-input-outline" />
      <h3 className="text-xl font-bold my-4">Recent Review</h3>
      <UserRecentReview data={data} />
    </div>

  </div>
}
