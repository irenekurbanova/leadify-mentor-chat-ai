import { ActionIcon, TextInput } from "@mantine/core";
import { SendHorizontal } from "lucide-react";
import { useForm } from "@mantine/form";

const Form: React.FC = () => {
  const form = useForm({
    initialValues: {
      query: "",
    },
    validate: {
      query: (value) => (value.length < 3 ? "Your question should be more descriptive" : null),
    },
  });

  return (
    <form
      className="flex items-center"
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        form.reset();
      })}
    >
      <TextInput
        radius="lg"
        id="chat"
        error={form.errors}
        {...form.getInputProps("query")}
        className="w-full text-white outline-none"
        placeholder="Start your learning journey..."
        rightSection={
          <ActionIcon
            variant="subtle"
            color="rgba(255, 255, 255, 1)"
            type="submit"
            className="absolute right-2 inline-flex justify-center p-2 text-white rounded-lg cursor-pointer hover:bg-indigo-600 transition"
          >
            <SendHorizontal size={16} />
          </ActionIcon>
        }
      ></TextInput>
    </form>
  );
};

export default Form;
