"use client";
import SearchDialogue from "@/app/(dashboard)/property-list/advanced/searchDialog";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Test() {
  let dialog = useRef();

  return (
    <div>
      <SearchDialogue ref={dialog} />
      <Button onClick={() => dialog.current?.showModal()}>Open</Button>
    </div>
  );
}
