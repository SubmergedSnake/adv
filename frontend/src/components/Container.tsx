import { useQuery } from "@tanstack/react-query";
import { fetchDefects } from "../api/fetchDefects";
import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";
import { useState } from "react";
import type { IQueryControls } from "../types/IQueryControls";

export default function Container() {
  const [controls, setControls] = useState<Partial<IQueryControls>>({});

  const {
    isPending,
    error,
    data: defects,
  } = useQuery({
    queryKey: ["defects"],
    queryFn: fetchDefects,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.id);
  };

  if (error) return "There was an error loading the defects.";
  if (isPending) return "Loading...";
  return (
    <div className="flex">
      <QueryControls handleChange={handleChange} controls={controls} />
      <DefectList defects={defects} />
    </div>
  );
}
