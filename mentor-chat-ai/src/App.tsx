import RouterSwitcher from "./components/RouterSwitcher";
import Navigation from "./components/Navigation";
import ModalWindow from "./components/UI/Modal";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-4 h-screen grid grid-cols-[minmax(150px,_15%)_1fr] grid-rows-1 gap-4 bg-gradient-to-tr from-indigo-950 via-stone-900 to-stone-950 bg-blend-color-burn">
      <ModalWindow opened={opened} onClose={close} />
      <Navigation open={open} />
      <article className="backdrop-blur-3sm backdrop-brightness-150 border border-stone-700 rounded-2xl">
        <RouterSwitcher />
      </article>
    </div>
  );
}

// bg-gradient-to-br from-purple-900 from-0% via-indigo-900 via-5% to-slate-900 to-90%
// bg-gradient-to-tr from-indigo-950 via-stone-900 to-stone-950 bg-blend-color-burn
// h-full w-full bg-zinc-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100
