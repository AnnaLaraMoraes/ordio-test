import {
  HomeIcon,
  CalendarIcon,
  QueueListIcon,
  UserIcon,
  DocumentIcon,
  DocumentMagnifyingGlassIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  Bars3BottomLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import logoImg from "../../images/logo.png";
import { Button } from "./components/button";
import { Profile } from "./components/profile";

export const LateralMenu = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleButton = (id) => {
    setSelectedButton(id);
    handleMenu();
  };

  return (
    <>
      <button onClick={handleMenu} class="p-1 md:hidden inline fixed z-50">
        {showMenu ? (
          <Bars3BottomLeftIcon class="w-8 h-8" />
        ) : (
          <XMarkIcon class="w-8 h-8" />
        )}
      </button>
      <div
        class={`${
          showMenu && "hidden"
        } md:flex flex-col justify-between p-4 bg-white absolute md:relative z-40 h-full`}
      >
        <div class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-y-4 pl-2 mt-4 md:mt-0">
            <h1 class="text-2xl font-bold">ordio</h1>
            <img class="text-2xl font-bold w-36" src={logoImg} alt="" />
          </div>
          <Button
            id={1}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Start"
            icon={<HomeIcon className="h-6 w-6" />}
          />
          <Button
            id={2}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Plan"
            icon={<CalendarIcon className="h-6 w-6" />}
            expansion={true}
            iconExpansion={<ChevronDownIcon className="h-4 w-4" />}
          />
          <Button
            id={3}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Alle Schichten"
            icon={<QueueListIcon className="h-6 w-6" />}
          />
          <Button
            id={4}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Mitarbeiter"
            icon={<UserIcon className="h-6 w-6" />}
          />
          <Button
            id={5}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Dokumente"
            icon={<DocumentIcon className="h-6 w-6" />}
          />
          <Button
            id={6}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Lohnauswertung"
            icon={<DocumentMagnifyingGlassIcon className="h-6 w-6" />}
          />
        </div>
        <div class="flex flex-col gap-y-4">
          <Button
            id={7}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Einstellungen"
            icon={<Cog6ToothIcon className="h-6 w-6" />}
          />
          <Button
            id={8}
            handleButton={handleButton}
            selectedButton={selectedButton}
            text="Abmelden"
            icon={<ArrowRightOnRectangleIcon className="h-6 w-6" />}
          />
          <Profile />
        </div>
      </div>
    </>
  );
};
