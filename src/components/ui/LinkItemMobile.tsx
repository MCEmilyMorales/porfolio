"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Datos {
  text: string;
  url: string;
}
const LinkItemMobile = ({ text, url }: Datos) => {
  const pathname = usePathname();
  const activo = pathname === url;

  return (
    <>
      <li
        className={`
        ${
          activo
            ? "border-b-2 border-b-shadow-dorado"
            : "relative after:block after:h-[2px] after:bg-shadow after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
        }`}
      >
        <Link href={url}>{text}</Link>
      </li>
    </>
  );
};
export default LinkItemMobile;
