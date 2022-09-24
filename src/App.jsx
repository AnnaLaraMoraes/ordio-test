import { LateralMenu } from "./pages/lateral-menu/lateral-menu";
import { Header } from "./pages/header/header";
import { MainPage } from "./pages/main/main";

function App() {
  return (
    <div class="flex">
      <LateralMenu />
      <div class="flex flex-col w-full">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
