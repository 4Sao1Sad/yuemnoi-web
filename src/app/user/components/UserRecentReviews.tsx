import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface UserRecentReviewProp {
  id: string;
  reviewer_name: string;
  surname: string;
  reviewer_id: number;
  rating: number;
  description: string;
}

export default function UserRecentReview({
  data,
}: {
  data: UserRecentReviewProp[];
}) {
  return (
    <div className="h-fit flex flex-1 flex-col space-y-4">
      {data.map(
        ({
          id,
          reviewer_name: name,
          surname,
          reviewer_id,
          rating,
          description,
        }) => {
          return (
            <div
              key={id}
              className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg"
            >
              <div className="flex flex-row justify-between w-full items-center">
                <h2 className="text-sm font-medium line-clamp-1 break-all text-gray">{`${name}`}</h2>
                <div className="flex flex-row justify-between space-x-1  items-center">
                  <span className="text-md font-semibold">
                    <FontAwesomeIcon icon={faStar} className="text-primary" />
                  </span>
                  <span className="text-md font-semibold">{rating}</span>
                </div>
              </div>
              <div className="text-md font-medium">{description}</div>
            </div>
          );
        }
      )}
    </div>
  );
}
