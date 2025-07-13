import { useQuery } from "@tanstack/react-query";
import { fetchDefects } from "../api/fetchDefects";
import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";
import { useMemo, useState } from "react";
import type { IQueryControls } from "../types/IQueryControls";
import debounce from "../utilities/debounce";

export default function Container() {
  const [debouncedControls, setDebouncedControls] = useState<
    Partial<IQueryControls>
  >({});

  const debouncedSetControls = useMemo(
    () => debounce((nextControls) => setDebouncedControls(nextControls), 1000),
    [],
  );

  const {
    isPending,
    error,
    data: defects,
  } = useQuery({
    queryKey: ["defects", debouncedControls],
    queryFn: ({ queryKey }) => fetchDefects(queryKey[1] as IQueryControls),
  });

  return (
    <div className="flex">
      <QueryControls debouncedSetControls={debouncedSetControls} />
      {!error && !isPending && <DefectList defects={defects} />}
      {error && "There was an error loading the defect"}
      {isPending && "Loading defects..."}
    </div>
  );
}
