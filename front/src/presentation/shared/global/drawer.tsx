import { useDrawer } from "../../../application/core/hooks/useDrawer";

export const Drawer = () => {
  const { isVisible, toggle } = useDrawer();
  return (
    <div
      className={`w-[250px] bg-white fixed top-0 right-0 h-[100dvh] z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={toggle}
        className="p-2 bg-red-500 text-white rounded m-4"
      >
        Close
      </button>
      <h1 className="p-4">Drawer Content</h1>
    </div>
  );
};
