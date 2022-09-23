import { useState } from "react";
import { Button } from "./button";
import {
  IdentificationIcon,
  CursorArrowRaysIcon,
  ClipboardDocumentIcon,
  GlobeEuropeAfricaIcon,
  BanknotesIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/24/solid";

export const Menu = () => {
  const [selectedButton, setSelectedButton] = useState(5);

  const handleButton = (id) => {
    setSelectedButton(id);
  };
  return (
    <div class="flex gap-y-4 gap-x-4 mt-8 flex-wrap">
      <Button
        id={1}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Ubersicht"
      />
      <Button
        id={2}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Stammdaten"
        icon={<IdentificationIcon className="h-3.5 w-3.5" />}
      />
      <Button
        id={3}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Apps"
        icon={<CursorArrowRaysIcon className="h-3.5 w-3.5" />}
      />
      <Button
        id={4}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Dokumente"
        icon={<ClipboardDocumentIcon className="h-3.5 w-3.5" />}
      />
      <Button
        id={5}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Abwesenheit"
        icon={<GlobeEuropeAfricaIcon className="h-3.5 w-3.5" />}
      />
      <Button
        id={6}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Lohn"
        icon={<BanknotesIcon className="h-3.5 w-3.5" />}
      />
      <Button
        id={7}
        handleButton={handleButton}
        selectedButton={selectedButton}
        text="Trinkgeld"
        icon={<CurrencyEuroIcon className="h-3.5 w-3.5" />}
      />
    </div>
  );
};
