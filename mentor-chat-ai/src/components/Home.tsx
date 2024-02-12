import { Textarea } from "@mantine/core";
import { FaRegArrowAltCircleRight, FaRegQuestionCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="pt-40 text-3xl font-bold">Your AI Mentor for Infinite Possibilities</h1>
      <div className="w-4/6 flex flex-col gap-4">
        <Textarea size="md" placeholder="Start your learning journey..." minRows={2} maxRows={4} />
        <div className="flex flex-row items-center justify-center flex-wrap gap-2 text-xs">
          <div className="flex flex-row items-center gap-1">
            <FaRegArrowAltCircleRight />
            <span>Try asking</span>
          </div>
          <div className="p-1 flex flex-row items-center gap-1 border border-stone-600 rounded-lg">
            <span>How to center a div</span>
            <FaRegQuestionCircle />
          </div>
          <div className="p-1 flex flex-row items-center gap-1 border border-stone-600 rounded-lg">
            <span>Event Loop for dummies</span>
            <FaRegQuestionCircle />
          </div>
          <div className="p-1 flex flex-row items-center gap-1 border border-stone-600 rounded-lg">
            <span>Am I studing wrong type of programming language</span>
            <FaRegQuestionCircle />
          </div>
          <div className="p-1 flex flex-row items-center gap-1 border border-stone-600 rounded-lg">
            <span>How do you measure code complexity</span>
            <FaRegQuestionCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
