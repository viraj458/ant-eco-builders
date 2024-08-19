import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/@/components/ui/table"
  
  const invoices = [
    {
      invoice: "600",
      paymentStatus: "200",
      totalAmount: "≤ 8.0",  // Updated with the "≤" symbol
      paymentMethod: "100",
    },
    {
      invoice: "600",
      paymentStatus: "200",
      totalAmount: "≤ 13.5",  // Updated with the "≤" symbol
      paymentMethod: "150",
    },
    {
      invoice: "600",
      paymentStatus: "200",
      totalAmount: "≤ 18.0",  // Updated with the "≤" symbol
      paymentMethod: "200",
    }
  ]
  
  export function ProductTable01() {
    return (
      <Table className=" sm:text-base 2xl:text-xl">
        <TableHeader>
          <TableRow className="bg-black hover:bg-black/75 text-white">
            <TableHead className="">Length (mm)</TableHead>
            <TableHead>Height (mm)</TableHead>
            <TableHead>Width (mm)</TableHead>
            <TableHead className="text-right">Weight (kg)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.invoice} className={index === 1 ? "bg-black/10" : "bg-black/35"}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="font-medium">{invoice.paymentStatus}</TableCell>
              <TableCell className="font-medium">{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right font-medium">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  