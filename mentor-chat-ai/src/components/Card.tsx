import React from "react";

type CardProps = {
  icon: JSX.Element;
  title: string;
  content: string[];
};

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="basis-2/6 p-2 flex flex-col bg-white/[.04] border border-stone-700 rounded-2xl">
      <div className="flex justify-left items-center gap-4">
        <span className="p-2 bg-indigo-600 rounded-md">{icon}</span>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="mt-6 flex flex-col justify-center gap-4">
        {content.map((item, index) => (
          <div key={index} className="min-h-12 p-2 bg-white/[.06] rounded-md text-left">
            <span className="text-xs inline-block align-middle break-words whitespace-pre-line">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
