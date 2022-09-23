export const Profile = () => {
  return (
    <div>
      <label class="text-blue-200">Startseite | Mitarbeiter | Anna Lara</label>
      <div class="flex justify-start bg-blue-50 py-2.5 px-4 rounded-md mt-4">
        <img
          src="https://github.com/AnnaLaraMoraes.png"
          alt="Anna photo"
          class="w-20 h-20 rounded-full border-2 border-white drop-shadow-md"
        />
        <div class="mx-4 flex flex-col">
          <label class="text-3xl font-normal mb-1">Anna Lara</label>
          <label class="text-blue-200 text-sm">Heumarkt 1, 50674 Koln</label>
          <label class="text-blue-200 text-sm">+46 151 700 77000</label>
        </div>
      </div>
    </div>
  );
};
