import { useWatch, useController } from "react-hook-form";

export const PopulatableInput = ({
  label,
  name,
  setValue,
  control,
  ...props
}) => {
  const defaultValue = useWatch({
    name: "defaultTitle",
    control,
    defaultValue: "",
  });

  const { field } = useController({ control, name, defaultValue: "" });

  const handleCopy = (event) => {
		event.preventDefault()
    setValue(name, defaultValue);
  };

  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      <button onClick={handleCopy}>Copy from default</button>
    </>
  );
};
