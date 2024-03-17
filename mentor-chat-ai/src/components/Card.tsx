import { Stack, Group, Text } from "@mantine/core";

type CardProps = {
  icon: JSX.Element;
  title: string;
  content: string[];
};

const Card = ({ icon, title, content }: CardProps) => {
  return (
    <Stack p={10} className=" bg-white/[.04] border border-stone-700 rounded-2xl">
      <Group>
        <Text component="span" className="p-2 bg-indigo-600 rounded-md">
          {icon}
        </Text>
        <Text size="lg" fw={500}>
          {title}
        </Text>
      </Group>
      <Stack>
        {content.map((item, index) => (
          <Group p={10} key={index} className="min-h-12 bg-white/[.06] rounded-md text-left">
            <Text component="span" className="text-xs inline-block align-middle break-words whitespace-pre-line">
              {item}
            </Text>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
};

export default Card;
