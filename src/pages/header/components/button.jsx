export const Button = ({ text, icon, handleButton, selectedButton, id }) => {
  const onclick = () => {
    handleButton(id);
  };

  return (
    <button
      class={`flex 
              items-center  
              justify-between  
              px-4 
              py-2.5 
            hover:bg-blue-300
            hover:text-white 
              border-[1px]
              bg-white
             border-gray-300
              rounded-full
              text-xs	
              ${id && selectedButton === id && "text-white bg-blue-300"}`}
      onClick={onclick}
    >
      <div class="flex gap-3">
        {text}
        {icon && icon}
      </div>
    </button>
  );
};
