export const Card = ({ children, noHover, border }) => {
  return (
    <div
      class={`${!noHover && "hover:bg-blue-50"} p-4 ${
        border && "border-b-2 border-blue-50"
      }`}
    >
      {children}
    </div>
  );
};
