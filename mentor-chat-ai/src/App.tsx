import Main from "./components/Main";
import Navigation from "./components/Navigation";
// import ModalWindow from "./components/UI/Modal";
import { Grid, Box } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

export default function App() {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className="p-4 w-full h-screen bg-gradient-to-tr from-indigo-950 via-stone-900 to-stone-950 bg-blend-color-burn ">
      <Grid justify="flex-start" className="flex h-full">
        {/* <ModalWindow opened={opened} onClose={close} /> */}
        <Grid.Col span={2} h={"100%"}>
          <Navigation />
        </Grid.Col>
        <Grid.Col span={10}>
          <Main />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
