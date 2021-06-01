import { useForm } from "react-hook-form";
import { PopulatableInput } from "./PopulatableInput";

function App() {
  const { register, handleSubmit, setValue, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Default Title:
        <input {...register("defaultTitle")} />
      </label>
      <hr />
      <PopulatableInput
        control={control}
        name="facebookTitle"
        setValue={setValue}
        label="Facebook Title:"
      />
      <hr />
      <PopulatableInput
        control={control}
        name="youtubeTitle"
        setValue={setValue}
        label="Youtube Title:"
      />
			<hr />
      <button>Submit</button>
    </form>
  );
}

export default App;
