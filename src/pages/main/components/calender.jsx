import { useState } from "react";
import { Card } from "./card";
import Calendar from "react-calendar";
import { CalenderCard } from "./calender-card";
import { CalenderButton } from "./button-calender";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";

export const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButton = (id) => {
    setSelectedButton(id);
  };

  return (
    <div class="flex flex-col bg-white rounded-md w-full shadow-md">
      <Card border noHover>
        <h1 class="font-bold text-blue-200">Abwesenheiten</h1>
      </Card>
      <div class="flex flex-col justify-between h-full">
        <div class="p-4">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-6 flex gap-2">
              <CalenderButton
                selectedButton={selectedButton}
                id={1}
                handleButton={handleButton}
                title="Mai 2021"
              />
              <CalenderButton
                selectedButton={selectedButton}
                id={2}
                handleButton={handleButton}
                icon={<ChevronLeftIcon class="h-4 w-4" />}
              />
              <CalenderButton
                selectedButton={selectedButton}
                id={3}
                handleButton={handleButton}
                icon={<ChevronRightIcon class="h-4 w-4" />}
              />
            </div>
            <div class="mb-4 flex gap-2">
              <CalenderButton
                selectedButton={selectedButton}
                id={4}
                handleButton={handleButton}
                title="Abwesenheit eintragen"
                icon={<PlusCircleIcon class="h-4 w-4" />}
              />
              <CalenderButton
                selectedButton={selectedButton}
                id={5}
                handleButton={handleButton}
                title="Export"
                icon={<InboxArrowDownIcon class="h-4 w-4" />}
              />
            </div>
          </div>
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div>
          <CalenderCard
            title="12.05. - 21.05.2021"
            text="15 Tage bezahlter Urlaub, 15 x 8,00 Stunden, Urlaubskonto 2021, Eingetragen von Sofien Kouraichi"
            color="bg-blue-300"
          />
          <CalenderCard
            title="05.08. - 07.08.2021"
            text="3 Tage Krakheit, 3 x 8,00 Stunden"
            color="bg-red-300"
          />
          <CalenderCard
            title="22.09. - 02.10.2021"
            text="11 Tage unbezahlter Urlaub"
            color="bg-blue-800"
          />
        </div>
      </div>
    </div>
  );
};
