import { Card } from "./card";
import { SubCard } from "./sub-card";

export const VocationSum = () => {
  return (
    <div class="flex flex-col bg-white rounded-md md:max-w-[700px] shadow-md">
      <Card border noHover={true}>
        <h1 class="font-bold ">Urlaubkonto</h1>
      </Card>
      <Card>
        <div class="font-medium text-blue-200 flex justify-between">
          <label>Monate</label>
          <label>Entwicklung Urlaubskonto</label>
        </div>
      </Card>
      <Card border noHover={true}>
        <div class="font-medium  flex justify-between">
          <div>
            <label>Mai 2021</label>
            <label class="bg-blue-50 text-blue-200 text-[8px] p-1 rounded-full ml-4">
              DATEN VERALTED
            </label>
          </div>
          <label>+ 3,67 Tage</label>
        </div>
        <SubCard border="border-b-2 border-blue-50 pb-4">
          <div class="flex flex-col">
            <label class="text-blue-200 font-medium">
              Konflikt - Daten nicht mehr aktuell
            </label>
            <label class="text-blue-200 text-sm">
              Die Berechnung basiert auf veralteten Daten
            </label>
            <label class="text-blue-200 text-sm">
              Lohnregel wurde geandert {`(02.01.2021, 10:54 Uhr)`}
            </label>
          </div>
        </SubCard>
        <SubCard border="border-b-2 border-blue-50 pb-4">
          <div class="flex flex-col">
            <label class="text-xs text-blue-80">20.12.2020, 01:28 Uhr</label>
            <label class="text-blue-200 ">
              Wochen: 4,43 Wochen {`(31 Tage / 7 Tage)`}
            </label>
            <label class="text-blue-200 ">Arbeitstage: 14 Tage</label>
            <label class="text-blue-200 ">
              Tagewoche: 3,16 Tage {`(14 Tage / 4,43 Wochen)`}
            </label>
            <label class="text-blue-200 ">
              Neuer Urlaubsanspuch: 1,67 Tage
            </label>
          </div>
        </SubCard>
        <SubCard>
          <div class="flex flex-col">
            <label class="text-xs text-blue-80">20.12.2020, 01:28 Uhr</label>
            <label class="text-blue-200">Manuelle Anderung | Korretur</label>
          </div>
        </SubCard>
      </Card>
      <Card border>
        <div class="font-medium text-blue-200 flex justify-between">
          <div>
            <label>April 2021</label>
            <label class="bg-blue-50 text-blue-200 text-[8px] p-1 rounded-full ml-4">
              DATEN VERALTED
            </label>
          </div>
          <label>+ 2,00 Tage</label>
        </div>
      </Card>
      <Card border>
        <div class="font-medium text-blue-200 flex justify-between">
          <div>
            <label>Marz 2021</label>
            <label class="bg-blue-50 text-blue-200 text-[8px] p-1 rounded-full ml-4 ">
              DATEN VERALTED
            </label>
          </div>
          <label>+ 2,00 Tage</label>
        </div>
      </Card>
      <Card border>
        <div class="font-medium text-blue-200 flex justify-between">
          <label>Februar 2021</label>
          <label>+ 2,00 Tage</label>
        </div>
      </Card>
      <Card noHover={true}>
        <button class="text-blue-300 w-full text-end">Mehr anzeigen</button>
      </Card>
    </div>
  );
};
