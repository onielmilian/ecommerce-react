import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    text: "Sobre nosotros",
    link: "/about-us",
  },
  {
    id: 2,
    text: "Productos",
    link: "/products",
  },
  {
    id: 3,
    text: "Mi cuenta",
    link: "/profile",
  },
  {
    id: 4,
    text: "Política de privacidad",
    link: "/politics",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">TecnoMobile</span>
            E-commerce
          </p>

          <ul className="flex flex-wrap items-center mb-6 sm:mb-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            {dataFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:underline me-4 md:me-6">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2025
          <Link href={"/"}>TecnoMobile.</Link> Todos los derechos reservados 
        </span>
      </div>
    </footer>
  );
};

export default Footer;
