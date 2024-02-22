import RouterSwitcher from "./components/RouterSwitcher";
import Navigation from "./components/Navigation";
import ModalWindow from "./components/UI/Modal";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-4 h-screen grid grid-cols-[minmax(150px,_20%)_1fr] grid-rows-1 gap-4 bg-gradient-to-tr from-indigo-950 via-stone-900 to-stone-950 bg-blend-color-burn">
      <ModalWindow opened={opened} onClose={close} />
      <Navigation open={open} />
      <article className="backdrop-blur-3sm backdrop-brightness-150 border border-stone-700 rounded-2xl">
        <RouterSwitcher />
      </article>
    </div>
  );
}
