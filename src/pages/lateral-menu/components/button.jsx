export const Button = ({
  icon,
  text,
  expansion,
  iconExpansion,
  handleButton,
  selectedButton,
  id,
}) => {
  const onclick = () => {
    handleButton(id);
  };
  return (
    <button
      class={`flex items-center  
    justify-between  
    px-4 py-2.5 hover:bg-blue-100
     hover:text-blue-300 w-full 
     rounded-md	${selectedButton === id && "text-blue-300 bg-blue-100"}`}
      onClick={onclick}
    >
      <div class="flex gap-3">
        {icon}
        {text}
      </div>
      {expansion && iconExpansion}
    </button>
  );
};
