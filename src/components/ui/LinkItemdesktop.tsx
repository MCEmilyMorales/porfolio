import Link from "next/link";
import { usePathname } from "next/navigation";

interface Datos {
  text: string;
  url: string;
}
const LinkItemdesktop = ({ text, url }: Datos) => {
  const pathname = usePathname();
  const activo = pathname === url;
  return (
    <>
      <li>
        <Link
          href={url}
          className={`${
            activo ? "text-regal-dorado" : "m-8 hover:text-regal-dorado"
          } `}
        >
          {text}
        </Link>
      </li>
    </>
  );
};
export default LinkItemdesktop;
