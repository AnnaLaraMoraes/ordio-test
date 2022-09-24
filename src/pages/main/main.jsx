import { Vocation } from "./components/vocation";
import { VocationSum } from "./components/vocation-sum";
import { Calender } from "./components/calender";

export const MainPage = () => {
  return (
    <div class="flex flex-col w-full p-6 gap-y-4">
      <div class="flex flex-col md:flex-row gap-x-4 gap-y-4">
        <Calender />
        <Vocation />
      </div>
      <VocationSum />
    </div>
  );
};
