import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { ProductType } from "../../../../../../types/product";

interface InfoProductDetailProps {
  product: ProductType;
}

const InfoProductDetail = ({ product }: InfoProductDetailProps) => {
  return (
    <div className="px-2 sm:px-4">
      <p className="mb-4">{product.description}</p>

      <Table>
        <TableBody>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Sistema operativo</TableCell>
            <TableCell>{product.operating_system}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Ram</TableCell>
            <TableCell>{product.ram} GB</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Almacenamiento</TableCell>
            <TableCell>{product.storage_capacity} GB</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">
              Tamaño de pantalla
            </TableCell>
            <TableCell>{product.screen_size} pulgadas</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">
              Capacidad de batería
            </TableCell>
            <TableCell>{product.battery_capacity} mAh </TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Microprocesador</TableCell>
            <TableCell>{product.microprocessor}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Cámara frontal</TableCell>
            <TableCell>{product.front_camera}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Cámara trasera</TableCell>
            <TableCell>{product.back_camera} MP</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Cámara frontal</TableCell>
            <TableCell>{product.stock} MP</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell className="font-semibold">Estado</TableCell>
            <TableCell>{product.product_status}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InfoProductDetail;
