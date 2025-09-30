import BoxEperiencias from "@/components/ui/BoxExperiencias";
import LineaDorada from "@/components/ui/LineaDorada";
import SubSubTitulo from "@/components/ui/SubSubTitulo";
import Subtitulos from "@/components/ui/Subtitulos";

import Image from "next/image";

const About = () => {
  const Imagenes = [
    { url: "/icons/typescript.svg", nombre: "TypeScript" },
    { url: "/icons/python.svg", nombre: "Python" },
    { url: "/icons/prisma.svg", nombre: "Prisma" },
    { url: "/icons/postgresql.svg", nombre: "Postgresql" },
    { url: "/icons/next_js.svg", nombre: "Nextjs" },
    { url: "/icons/nestjs.svg", nombre: "Nestjs" },
    { url: "/icons/github.svg", nombre: "Github" },
    { url: "/icons/tailwind.svg", nombre: "Tailwind" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 py-20 content-center font-quicksand">
        <div className="relative flex items-center justify-center">
          <Image src={"/image/cv_img.jpg"} alt="me" height={280} width={240} />
        </div>
        <p className="px-2 md:px-8 py-4 md:py-4 col-span-2 ">
          <br />
          Soy desarrolladora web, aún en formación, más orientada al área del
          backend 🛠️. Trabajo con Nest.js, PostgreSQL y Prisma, estoy
          aprendiendo FastAPI en un proyecto donde colaboro en el backend🧑‍💻.
          Estoy interesada en crecer hacia ser full-stack senior 🚀. Por eso
          actualmente estoy aprendiendo y practicando frontend con Next.js,
          React, Tailwind.css 🎨.
          <br />
          ¿Por qué comencé a programar?🤔
          <br />
          Buscaba desafiarme 💪 a mí misma, ver hasta dónde podía llegar con
          algo totalmente diferente a lo que estaba acostumbrada y salir de mi
          zona de confort 🧗‍♀️. Si bien es un camino que tiene sus dificultades
          🧩, disfruto construir🧱, encontrar soluciones simples 🔍 y ayudar a
          las personas 🤝 con herramientas prácticas.
          <br />
          Me considero detallista🧐, me gusta entender bien cada paso, busco
          mejorar el codigo con el objetivo de que sea escalable y sostenible.
          <br />
          Soy autodidacta y me motiva la idea de participar en proyectos que
          tengan un impacto real 🌱 y que me permitan seguir aprendiendo en
          equipo 👥🤓👥.
          <br />
          Fuera del mundo de la programación🧘‍♀️, me gusta ver películas y series
          cortas, y me encantan los proyectos creativos que esten relacionados
          con crear o mejorar cosas, desde carpinteria🪚 hasta costura🧵.
        </p>
      </div>
      <Subtitulos text="SKILL" />
      <div className="grid grid-cols-3 md:grid-cols-4 px-2 md:px-20 py-20 grid-rows-3 md:grid-rows-2 gap-10 justify-center content-center items-center">
        {Imagenes.map((imagen) => (
          <div
            key={imagen.url}
            className="flex justify-center bg-radial from-shadow-dorado from-20% to-[var(--background)] rounded-4xl py-10"
          >
            <Image
              src={imagen.url}
              alt={imagen.nombre}
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
      <Subtitulos text="Experiencias" />
      <BoxEperiencias>
        <SubSubTitulo subSubtitulo="Desarrollo Backend - SharpPixAi" />
        <p> Octubre 2024 - Marzo 2025</p>
        <p>
          Sitio web que optimiza el tamaño imágenes, videos, audios, reduciendo
          el tamaño sin perder calidad.
        </p>
        <SubSubTitulo subSubtitulo="Desarrollo Backend - Digpatho" />
        <p>Marzo 2025 - Actualidad</p>
        <p className="pb-20">
          Sitio web que analiza imágenes médicas obteniendo datos clave para
          detectar células cancerosas.
        </p>
        <LineaDorada />
      </BoxEperiencias>
    </>
  );
};

export default About;
