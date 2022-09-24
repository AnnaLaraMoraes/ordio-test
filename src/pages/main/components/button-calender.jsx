export const CalenderButton = ({
  title,
  icon,
  handleButton,
  id,
  selectedButton,
}) => {
  const onclick = () => {
    handleButton(id);
  };

  return (
    <button
      onClick={onclick}
      class={`rounded-full border-2 border-blue-50 hover:bg-blue-300 hover:border-blue-300 hover:text-white px-4 py-2 flex gap-x-2 items-center
      ${
        id && selectedButton === id && "text-white bg-blue-300 border-blue-300"
      }`}
    >
      {title}
      {icon}
    </button>
  );
};
