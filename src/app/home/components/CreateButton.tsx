"use client";

import React from "react";
import { Button } from "../../../components/ui/button";

export default function CreateButton({
  onCreateClick,
}: {
  onCreateClick: () => void;
}) {
  return (
    <Button onClick={onCreateClick} variant="default" size="default">
      Create
    </Button>
  );
}
