type Datos = {
  text: string;
  esDiv?: boolean;
  animacion?: true;
};

const BotonForm = ({ text, esDiv, animacion }: Datos) => {
  return esDiv ? (
    <div className="flex justify-evenly w-1/3 font-quicksand text-base font-bold border-1 border-regal-dorado rounded-md p-2">
      {animacion && (
        <svg
          className="mr-3 size-5 animate-spin border-2 rounded-full border-y-regal-dorado border-x-[var(--background)] "
          viewBox="0 0 24 24"
        ></svg>
      )}
      {text}
    </div>
  ) : (
    <button
      type="submit"
      className="w-1/3 font-quicksand text-base font-medium hover:text-regal-dorado hover:font-bold active:font-bold border-1 border-regal-dorado rounded-md p-2 shadow-md hover:shadow-shadow-dorado active:shadow-shadow-dorado"
    >
      {text}
    </button>
  );
};
export default BotonForm;
