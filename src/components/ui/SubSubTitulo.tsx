type Datos = {
  subSubtitulo: string;
};
const SubSubTitulo = ({ subSubtitulo }: Datos) => {
  return <h3 className="relative text-center pt-10 text-xl">{subSubtitulo}</h3>;
};
export default SubSubTitulo;
