import RouterSwitcher from "./components/RouterSwitcher";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="p-4 h-screen grid grid-cols-[minmax(150px,_20%)_1fr] grid-rows-1 gap-4 bg-gradient-to-tr from-indigo-950 via-stone-900 to-stone-950 bg-blend-color-burn">
      <Navigation />
      <article className="backdrop-blur-3sm backdrop-brightness-150 border border-stone-700 rounded-2xl">
        <RouterSwitcher />
      </article>
    </div>
  );
}
