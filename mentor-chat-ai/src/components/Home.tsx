import Card from "./Card";
import Form from "./Form";
// import { FaRegArrowAltCircleRight, FaRegQuestionCircle } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { LuBoxes, LuAlertTriangle } from "react-icons/lu";

const Home: React.FC = () => {
  return (
    <div className="container h-full flex flex-col items-center justify-center gap-8 text-center">
      <div className="flex-1 flex flex-col justify-center align-middle gap-12">
        <h1 className="text-3xl font-bold">Your AI Mentor for Infinite Possibilities</h1>
        <div className="mx-14 flex gap-4">
          <Card
            icon={<VscListSelection />}
            title="Example"
            content={["How to center a div?", "Event Loop for dummies", "How do you measure code complexity?"]}
          />
          <Card
            icon={<LuBoxes />}
            title="Capabilities"
            content={[
              "High-level expertise of your code",
              "Various programming languges support",
              "Supports user-proviede folow-up corrections",
            ]}
          />
          <Card
            icon={<LuAlertTriangle />}
            title="Limitations"
            content={["Lorem ipsum dolor sit, amet consectetur", "Lorem ipsum dolor sit", "Lorem ipsum consectetur"]}
          />
        </div>
      </div>
      <div className="w-full mb-4">
        <Form />
      </div>
      {/* <div className="w-4/6 flex flex-col gap-4">
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
      </div> */}
    </div>
  );
};

export default Home;
