import Card from "./Card";
import Form from "./Form";
import { Grid, Group, Title } from "@mantine/core";
import { Text, Boxes, TriangleAlert } from "lucide-react";

const Main = () => {
  return (
    <Grid
      h={"100%"}
      justify="space-around"
      className="grid grid-col-1 p-8 backdrop-blur-3sm backdrop-brightness-150 border border-stone-700 rounded-2xl"
    >
      <Grid.Col span={12} className="self-end">
        <Title order={1} className="self-end text-center">
          Your AI Mentor for Infinite Possibilities
        </Title>
      </Grid.Col>
      <Grid.Col span={9} className="self-center">
        <Group justify="center" gap="xs" grow preventGrowOverflow={false} wrap="nowrap">
          <Card
            icon={<Text size={16} />}
            title="Example"
            content={["How to center a div?", "Event Loop for dummies", "How do you measure code complexity?"]}
          />
          <Card
            icon={<Boxes size={16} />}
            title="Capabilities"
            content={[
              "High-level expertise of your code",
              "Various programming languges support",
              "Supports user-provide follow-up corrections",
            ]}
          />
          <Card
            icon={<TriangleAlert size={16} />}
            title="Limitations"
            content={["Lorem ipsum dolor sit, amet consectetur", "Lorem ipsum dolor sit", "Lorem ipsum consectetur"]}
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={12} className="self-end">
        <Form />
      </Grid.Col>
    </Grid>
  );
};

export default Main;
