import { useState } from "react";
import { VscSend } from "react-icons/vsc";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  function formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
  }

  function inputChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  return (
    <form className="relative mx-10 flex items-center" onSubmit={formSubmitHandler}>
      <textarea
        id="chat"
        rows={1}
        value={inputValue}
        onChange={inputChangeHandler}
        className="block p-2.5 w-full text-sm text-white rounded-lg  resize-none outline-none"
        placeholder="Start your learning journey..."
      ></textarea>
      <button
        type="submit"
        className="absolute right-2 inline-flex justify-center p-2 text-white rounded-lg cursor-pointer hover:bg-indigo-600 transition"
      >
        <VscSend />
      </button>
    </form>
  );
};

export default Form;
