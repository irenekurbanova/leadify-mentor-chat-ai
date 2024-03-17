import { Stack } from "@mantine/core";
import QueryItem from "./QueryItem";

const DUMMY_QUERIES_DATA: { id: string; date: string; query: string[] }[] = [
  {
    id: "1",
    date: "Yesterday",
    query: ["How to center a div?"],
  },
  {
    id: "2",
    date: "February",
    query: ["Create a learning plan", "Top 10 books Python", "Make a code review", "Most popolar UI libraries"],
  },
  {
    id: "3",
    date: "February",
    query: ["Create a learning plan", "Top 10 books Python", "Make a code review", "Most popolar UI libraries"],
  },
  {
    id: "4",
    date: "2023",
    query: [
      "How to parse JSON object",
      "Explain the event loop in JS",
      "How to dictructure object values from the array of objects",
      "Pet project ideas",
      "Programmer resume examples from real professionals",
      "FSD architecture example",
      "The Best Frontend Architectures",
    ],
  },
];

const QueryHistory = () => {
  return (
    <Stack gap={"xl"}>
      {DUMMY_QUERIES_DATA.map((query: { id: string; date: string; query: string[] }) => {
        return <QueryItem key={query.id} date={query.date} id={query.id} query={query.query} />;
      })}
    </Stack>
  );
};

export default QueryHistory;
