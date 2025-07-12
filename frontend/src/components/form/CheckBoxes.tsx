import type { IDefect } from "../../types/IDefect";
import lowerAndSnakeCase from "../../utilities/lowerAndSnakeCase";
interface CheckBoxesProps {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: string[];
  label: string;
  queryControlField: string;
  selection: string[] | undefined;
}

export default function CheckBoxes({
  handleCheckboxChange,
  items,
  label,
  queryControlField,
  selection,
}: CheckBoxesProps) {
  return (
    <>
      <h1>{label}</h1>
      <div className="flex flex-wrap">
        {items.map((item: string) => (
          <div key={item}>
            <input
              className="accent-green-100"
              data-value={item}
              type="checkbox"
              id={lowerAndSnakeCase(item)}
              name={queryControlField}
              onChange={handleCheckboxChange}
              checked={selection?.includes(item)}
            />
            <label
              htmlFor={lowerAndSnakeCase(item)}
              className="cursor-pointer ml-1 mr-2"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
