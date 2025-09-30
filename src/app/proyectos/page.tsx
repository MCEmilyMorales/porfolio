import BoxProyecto from "@/components/ui/BoxProyecto";
import Titulos from "@/components/ui/Titulos";
import Image from "next/image";

const Proyectos = () => {
  return (
    <>
      <Titulos text="Mis proyectos" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-16 px-4 md:px-24">
        <BoxProyecto>
          <Image
            src={"/icons/postgresql.svg"}
            alt="e commerce"
            width={90}
            height={90}
            className="border-2  w-full"
          />
          <p>
            Proyecto es una tienda de productos. <br />
            En Proceso...
          </p>
        </BoxProyecto>
      </div>
    </>
  );
};
export default Proyectos;
