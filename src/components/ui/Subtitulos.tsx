interface Datos {
  text: string;
}

const Subtitulos = ({ text }: Datos) => {
  return (
    <h2 className="relative text-center pt-10 text-2xl font-quicksand before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-shadow-dorado before:scale-x-50">
      {text}
    </h2>
  );
};
export default Subtitulos;
