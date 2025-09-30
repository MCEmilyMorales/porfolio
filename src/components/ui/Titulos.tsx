interface Datos {
  text: string;
}

const Titulos = ({ text }: Datos) => {
  return (
    <h2 className="flex justify-center pt-16 text-xl md:text-3xl font-quicksand ">
      {text}
    </h2>
  );
};
export default Titulos;
