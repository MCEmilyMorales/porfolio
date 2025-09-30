type DatosDeForm = {
  valor: string;
  nombre: string;
  placeholder: string;
  autoCompletado?: string;
  tipo: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const DivInputForm = ({
  valor,
  nombre,
  placeholder,
  autoCompletado,
  tipo,
  handleChange,
}: DatosDeForm) => {
  return (
    <div className="border-b-1 border-b-shadow-dorado">
      <br />
      <input
        value={valor}
        onChange={handleChange}
        type={tipo}
        name={nombre}
        id={nombre}
        placeholder={placeholder}
        autoComplete={autoCompletado}
        required
        className="outline-none font-quicksand w-full mi-input-personal"
      />
    </div>
  );
};
export default DivInputForm;
