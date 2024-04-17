import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderedCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
};
export const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  renderedCount++;
  return (
    <div>
      <h1>Yoututbe Rendered Count {renderedCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
