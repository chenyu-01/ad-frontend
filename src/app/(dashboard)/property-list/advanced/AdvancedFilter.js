"use client";
import SearchDialogue from "@/app/(dashboard)/property-list/advanced/SearchDialog";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

function AdvancedFilter() {
  const dialog = useRef();

  return (
    <div>
      <SearchDialogue ref={dialog} />
      <Button onClick={() => dialog.current?.showModal()}>
        Advanced Search
      </Button>
      <Button onClick={() => console.log(dialog.dataParam)}> Log Data</Button>
    </div>
  );
}
export default AdvancedFilter;
