import React from "react";

type Datos = {
  children: React.ReactNode; // puede ser 1 o varios elementos
};
const BoxProyecto = ({ children }: Datos) => {
  return (
    <div className="flex flex-col items-center border-1 rounded-md p-4 border-shadow-dorado">
      {children}
    </div>
  );
};

export default BoxProyecto;
