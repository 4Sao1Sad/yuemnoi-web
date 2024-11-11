import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface UserRecentReviewProp { id: string, name: string, surname: string, score: number, description: string }


export default function UserRecentReview({ data }: { data: UserRecentReviewProp[] }) {
    return <div className="h-fit flex flex-1 flex-col space-y-4">
        {data.map(({ id, name, surname, score, description }) => {
            return <div key={id} className="h-fit flex-1 flex-col justify-center items-start  px-4 py-3 space-y-2 shadow-lg rounded-lg">
                <div className="flex flex-row justify-between w-full items-center">
                    <h2 className="text-sm font-medium line-clamp-1 break-all text-gray">{`${name}   ${surname}`}</h2>
                    <div className="flex flex-row justify-between space-x-1  items-center">
                        <span className="text-md font-semibold">
                            <FontAwesomeIcon icon={faStar} className="text-primary" />
                        </span>
                        <span className="text-md font-semibold">{score}</span>
                    </div>
                </div>
                <div className="text-md font-medium">
                    {description}
                </div>
            </div>
        })}
    </div>
}