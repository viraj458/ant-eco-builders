import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";

const tableData = [
  {
    parameter: "Size /mm",
    aacBlock: "600mmx200mmx100mm-200mm",
    clayBrick: "220mmx110mmx70mm",
    cementBlock: "400mmx200mmx100mm-200mm",
  },
  {
    parameter: "Variation in dimension",
    aacBlock: "+/- 2mm",
    clayBrick: "+/- 5mm",
    cementBlock: "+/- 3mm",
  },
  {
    parameter: "Compressive strength",
    aacBlock: "2.0-3.5N/mm²",
    clayBrick: "2.5-3.5N/mm²",
    cementBlock: "3-5N/mm²",
  },
  {
    parameter: "Density",
    aacBlock: "650-750kg/m³",
    clayBrick: "1950kg/m³",
    cementBlock: "1800kg/m³",
  },
  {
    parameter: "Fire resistance",
    aacBlock: "2-4 hours depending on the thickness",
    clayBrick: "2 hours",
    cementBlock: "4 hours depending on the thickness",
  },
  {
    parameter: "Sound Reduction Index",
    aacBlock: "60dB for 200mm Tk",
    clayBrick: "40dB for 220mm Tk",
    cementBlock: "",
  },
  {
    parameter: "Thermal Conductivity",
    aacBlock: "0.122",
    clayBrick: "0.51",
    cementBlock: "0.81",
  },
];

export function ProductTable02() {
  return (
    <Table className="sm:text-base 2xl:text-xl">
      <TableHeader>
        <TableRow className="bg-black hover:bg-black/75 text-white">
          <TableHead>Parameter</TableHead>
          <TableHead>AAC Block</TableHead>
          <TableHead>Clay Brick</TableHead>
          <TableHead>Cement Block</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row, index) => (
          <TableRow key={index} className={index % 2 === 0 ? "bg-black/10" : "bg-black/35"}>
            <TableCell className="font-medium">{row.parameter}</TableCell>
            <TableCell className="font-medium">{row.aacBlock}</TableCell>
            <TableCell className="font-medium">{row.clayBrick}</TableCell>
            <TableCell className="font-medium">{row.cementBlock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
