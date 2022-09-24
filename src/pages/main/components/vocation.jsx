import { Card } from "./card";
import { Button } from "./button";

export const Vocation = ({ width }) => {
  return (
    <div class="flex flex-col bg-white rounded-md shadow-md">
      <Card border noHover={true}>
        <h1 class="font-bold ">Urlaubsandpruch</h1>
      </Card>
      <Card border>
        <div class="flex justify-between">
          <label>Lohnregel</label>
          <label>30 Tage Urlaub/Jahr</label>
        </div>
      </Card>
      <Card border>
        <div class="flex flex-col">
          <div class="text-blue-80 flex justify-between">
            <label>Ubertrag aus 2020</label>
            <label>10 Tage</label>
          </div>
          <div class="text-blue-80 flex justify-between">
            <label>Resturlaub verfallen {`(31.03.)`}</label>
            <label>-10 Tage</label>
          </div>
          <div class="flex justify-between text-blue-200">
            <label>Resturlaub 2020</label>
            <label>0 Tage</label>
          </div>
        </div>
      </Card>
      <Card border>
        <div class="flex justify-between text-blue-200">
          <label>Urlaubsanspruch 2021</label>
          <label>30 Tage</label>
        </div>
        <div class="flex justify-between text-blue-200">
          <label>Genommener Urlaub 2021</label>
          <label>-8 Tage</label>
        </div>
      </Card>
      <Card border>
        <div class="flex justify-between text-blue-200">
          <label>Manuella Korrektur</label>
          <label>+ 3 Tage</label>
        </div>
      </Card>
      <Card border>
        <div class="flex justify-between">
          <label>Verfugbar Gesamt</label>
          <label>25 Tage</label>
        </div>
      </Card>
      <Card noHover={true}>
        <div class="flex flex-col gap-y-4">
          <label class="text-xs text-blue-80">
            letzte Aktualisierung der Stammdaten am 01.01.2019 um 14:54Uhr.
            Aktualisiert durch Robert Taglauer
          </label>
          <Button text="Manuelle Korrektur" />
        </div>
      </Card>
    </div>
  );
};
