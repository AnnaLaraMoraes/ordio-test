export const SubCard = ({ children, border }) => {
  return (
    <div class="p-4 hover:bg-blue-50 rounded-md my-2">
      <div class={`flex ${border && border}`}>
        <div class="border-l-2 border-blue-50 mr-4" />
        {children}
      </div>
    </div>
  );
};
