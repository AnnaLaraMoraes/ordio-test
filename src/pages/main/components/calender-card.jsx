export const CalenderCard = ({ title, text, color }) => {
  return (
    <div class="flex gap-x-2  px-4 py-2">
      <div class={`${color && color} rounded-full h-2 w-2 mt-2`} />
      <div class="max-w-[65ch]">
        <label class="text-lg">{title}</label>
        <label class="text-blue-80 text-sm">{text}</label>
      </div>
    </div>
  );
};
