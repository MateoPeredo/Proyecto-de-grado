import { useDrawer } from "../../../application/core/hooks/useDrawer";
import { ICON_CLOSE } from "./icons";

export const Drawer = () => {
  const { toggle, state } = useDrawer();
  const { buttons, isVisible, content, title } = state;
  return (
    <main
      className={`w-[400px] bg-white fixed top-0 right-0 h-[100dvh] z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } p-4`}
    >
      <header className=" flex justify-between items-center">
        <h4 className="text-xl font-bold"> {title && title}</h4>
        <button onClick={toggle} className=" text-xl text-gray-500">
          {ICON_CLOSE}
        </button>
      </header>
      <body className="py-2">
        {content ? (
          content
        ) : (
          <h4>Error en proporcionar contenido de configuracion</h4>
        )}
      </body>
      <footer>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="p-2 m-2 bg-blue-500 text-white rounded"
          >
            {button.label}
          </button>
        ))}
      </footer>
    </main>
  );
};
