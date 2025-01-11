import React from "react";
import { Outlet } from "react-router-dom";

export const PrivateLayaut = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] grid grid-cols-[250px_1fr] ">
      <nav className=" w-full bg-primary">navbar</nav>
      <main className="bg-secondary flex flex-col w-full">
        <header className="bg-secondary">navTop</header>
        <Outlet />
      </main>
    </div>
  );
};
