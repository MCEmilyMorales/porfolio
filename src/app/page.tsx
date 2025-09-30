import Titulos from "@/components/ui/Titulos";

export default function Home() {
  return (
    <div>
      <Titulos text="Bienvenido al Porfolio de:" />
      <div className="flex flex-col items-center p-14 md:p-20">
        <p className="text-center font-island text-7xl md:text-9xl text-shadow-lg/30 text-shadow animate-ping-slow">
          Emily Morales
        </p>
        <div className="w-1/3 h-[2px] rounded-[100] bg-gradient-to-r from-shadow-dorado via-transparent to-shadow-dorado mt-4 "></div>
      </div>
    </div>
  );
}
