import { useDrawer } from "../../../application/core/hooks/useDrawer";

export const Drawer = () => {
  const { toggle, state } = useDrawer();
  const { buttons, isVisible, content, title } = state;
  return (
    <main
      className={`w-[400px] bg-white fixed top-0 right-0 h-[100dvh] z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h4> {title && title}</h4>
      <button
        onClick={toggle}
        className="p-2 bg-red-500 text-white rounded m-4"
      >
        Close
      </button>
      <body>
        {content ? (
          content
        ) : (
          <h4>Error en proporcionar contenido de configuracion</h4>
        )}
      </body>
      <footer>
        {buttons.length > 0 ? (
          buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="p-2 m-2 bg-blue-500 text-white rounded"
            >
              {button.label}
            </button>
          ))
        ) : (
          <p>No buttons available</p>
        )}
      </footer>
    </main>
  );
};
