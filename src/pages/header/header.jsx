import { Profile } from "./components/profile";
import { Menu } from "./components/menu";

export const Header = () => {
  return (
    <div class="p-6 flex flex-col w-full mt-4 md:mt-0">
      <div class=" flex flex-col md:flex-row justify-between">
        <Profile />
        <div class="flex flex-col gap-y-2 md:items-end">
          <label class="text-left md:text-right text-blue-80 text-xs">
            vor wenigen Sekunden
          </label>
          <h2 class="text-left md:text-right md:w-[25ch] text-blue-80 text-sm">
            Robert Taglauer hat sich fur eine Schicht beworben
          </h2>
        </div>
      </div>
      <Menu />
    </div>
  );
};
