"use client";
import { Button } from "@yuemnoi/components/ui/button";
import { useState } from "react";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllRequestsPage from "./AllRequestsPage";
import AllPostsPage from "./AllPostsPage";

export default function RequestPage() {
  const [requestState, setRequestState] = useState(true);

  return (
    <div className="w-full min-h-screen">
      <Button className="w-full" onClick={() => setRequestState(!requestState)}>
        <span className="text-lg font-semibold">
          <FontAwesomeIcon icon={faRepeat} className="text-white" />
        </span>
        {requestState ? "My Requests" : "My Post Requests"}
      </Button>
      {requestState ? <AllRequestsPage /> : <AllPostsPage />}
    </div>
  );
}
