import lowerAndSnakeCase from "../../utilities/lowerAndSnakeCase";
interface CheckBoxesProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: string[];
  label: string;
}

export default function CheckBoxes({
  handleChange,
  items,
  label,
}: CheckBoxesProps) {
  return (
    <>
      <h1>{label}</h1>
      <div className="flex flex-wrap ">
        {items.map((item: string) => (
          <div key={item}>
            <input
              className="accent-green-100"
              type="checkbox"
              id={lowerAndSnakeCase(item)}
              name={lowerAndSnakeCase(item)}
              onChange={handleChange}
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
