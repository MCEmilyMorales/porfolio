Estructura inicial para mi portfolio, por ahora solo front.

Convencion de nomenclatura PascalCase.

```
portfolio/
│── .gitignore
│── package.json
│── tsconfig.json
│── tailwind.config.ts
│── postcss.config.js
│── next.config.mjs
│── README.md
│
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/             # Rutas del App Router (Next.js @15.5.3)
│   │   ├── globals.css  # Estilos globales
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Home del portfolio
│   │   ├── about/       # Sección "Sobre mí"
│   │   │   └── page.tsx
│   │   ├── projects/    # Sección proyectos
│   │   │   └── page.tsx
│   │   ├── contact/     # Sección contacto
│   │   │   └── page.tsx
│   │   └── api/         # a futuro escalare a fullstack
│   │       └── hello/route.ts
│   │
│   ├── components/      # Componentes reutilizables
│   │   ├── ui/          # Botones, cards, inputs, etc.
│   │   ├── layout/      # Navbar, Footer, Sidebar
│   │   └── sections/    # Hero, ProjectList, ContactForm
│   │
│   ├── lib/             # Funciones utilitarias (fetch, helpers, etc.)
│   │   ├── api.ts       # Llamadas a APIs externas / mock
│   │   └── utils.ts
│   │
│   ├── data/            # JSONs o mocks de proyectos, experiencias, etc.
│   │   └── projects.json
│   │
│   └── hooks/           # Custom hooks (a futuro escalare a fullstack)
│
└── prisma/              # (Futuro) Esquema de DB para fullstack
    └── schema.prisma

```
