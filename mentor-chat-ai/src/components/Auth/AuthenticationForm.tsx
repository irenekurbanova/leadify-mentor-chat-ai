import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const AuthenticationForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="self-center text-3xl">Welcome</h1>
      <p className="self-center text-sm">Sing in or sign up to continue</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-6 flex flex-col gap-2">
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">Email</label>
        <input type="email" {...register("email", { required: true })} className="p-1 rounded-md" />
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm">Password</label>
        <input type="password" {...register("password", { required: true })} className="p-1 rounded-md" />
        <button type="submit" className="mt-6 cursor-pointer p-2 bg-indigo-600 rounded-md">
          Continue
        </button>
      </form>
    </div>
  );
};

export default AuthenticationForm;
