"use client";
import Titulos from "@/components/ui/Titulos";
import { useState } from "react";
import { Form } from "../api/contact/route";
import DivInputForm from "@/components/ui/DivInputForm";
import BotonForm from "@/components/ui/BotonForm";

const Contacto = () => {
  const DatosForm = {
    email: "",
    asunto: "",
    mensaje: "",
  };
  const [form, setForm] = useState<Form>(DatosForm);
  const [estado, setEstado] = useState<null | "loading" | "enviado" | "error">(
    null,
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEstado("loading");

    const envioEmail = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (envioEmail.ok) {
      setForm(DatosForm);
      setEstado("enviado");
      setTimeout(() => {
        setEstado(null);
      }, 6000);
    } else {
      setEstado("error");
      setTimeout(() => {
        setEstado(null);
      }, 9000);
    }
  };

  return (
    <>
      <Titulos text="Deja tu mensaje:" />
      <div className="md:flex md:items-center md:justify-center sm:pt-4 md:mt-4">
        <form
          onSubmit={handleSubmit}
          className="font-quicksand relative m-4 md:m-8 p-4 md:p-6 md:w-1/2 border-2 border-[var(--background)] border-y-shadow-dorado rounded-2xl"
        >
          <DivInputForm
            valor={form.email}
            handleChange={handleChange}
            nombre={"email"}
            placeholder="Email:"
            tipo="email"
          />
          <DivInputForm
            valor={form.asunto}
            handleChange={handleChange}
            nombre={"asunto"}
            placeholder="Asunto:"
            tipo="text"
          />
          <br />
          <textarea
            value={form.mensaje}
            onChange={handleChange}
            id="mensaje"
            name="mensaje"
            className="w-full h-auto outline-none font-quicksand mi-input-personal"
            placeholder="Escribe tu mensaje:"
            required
          ></textarea>
          <br />
          <div className="flex justify-center">
            {estado === null && <BotonForm text="Enviar" />}
            {estado === "loading" && (
              <BotonForm text="Enviando" esDiv={true} animacion />
            )}
            {estado === "enviado" && <BotonForm text="Enviado" esDiv={true} />}
            {estado === "error" && (
              <BotonForm text="Hubo un error, intente más tarde" esDiv={true} />
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Contacto;
