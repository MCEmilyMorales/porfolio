import BoxProyecto from "@/components/ui/BoxProyecto";
import Titulos from "@/components/ui/Titulos";
import Image from "next/image";
import Link from "next/link";

const Proyectos = () => {
  return (
    <>
      <Titulos text="Mis proyectos" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-16 px-4 md:px-24">
        <BoxProyecto>
          <Link
            href={"https://eccomerce-flame.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-bold text-2xl hover:text-amber-500 py-3 ">
              {" "}
              Eccomerce
            </p>
          </Link>

          <div className="relative w-full h-80 overflow-hidden">
            <Image
              src={"/image/registro.png"}
              alt="e commerce"
              fill
              priority
              sizes="100vw"
            />
            <Link
              href={"https://eccomerce-flame.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
          </div>
          <div className="pt-4 space-y-2">
            <Link
              href={"https://eccomerce-flame.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xl font-semibold">Tienda de productos</p>
            </Link>

            <hr className="border text-yellow-300" />
            <p>
              {" "}
              <strong>Front</strong> con Next.js, Tailwind, Axios. Deployado
              VERCEL
            </p>

            <p>
              {" "}
              <strong>Back </strong> con Nest.js, JWT, Cookies,TypeOrm,
              Cloudinary, Swagger
            </p>

            <p>
              <strong>Base de datos </strong> con PostgreSQL Deployado Render
            </p>
          </div>
        </BoxProyecto>
      </div>
    </>
  );
};
export default Proyectos;
