import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export const Profile = () => {
  return (
    <div class="flex bg-blue-50 py-2.5 px-4 rounded-md justify-between mt-4">
      <img
        src="https://github.com/AnnaLaraMoraes.png"
        alt="Anna photo"
        class="w-12 rounded-full"
      />
      <div class="mx-4 flex flex-col">
        <label class="text-lg font-medium">Anna Lara</label>
        <label class="text-blue-200 text-sm">anna@gmail.com</label>
      </div>
      <EllipsisVerticalIcon class="w-7" />
    </div>
  );
};
