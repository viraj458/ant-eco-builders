import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table"

const data = [
  {
      material: "No of blocks",
      brick225mm: 1090,
      aac200mm: 75,
      brick112mm: 550,
      aac100mm: 75,
      cementBlock150mm: 112,
      aac150mm: 75,
  },
  {
      material: "Wastage",
      brick225mm: 0.05,
      aac200mm: 0.03,
      brick112mm: 0.05,
      aac100mm: 0.03,
      cementBlock150mm: 0.03,
      aac150mm: 0.03,
  },
  {
      material: "Cement (50kg bags)",
      brick225mm: 3,
      aac200mm: 0.7,
      brick112mm: 1.3,
      aac100mm: 0.35,
      cementBlock150mm: 0.77,
      aac150mm: 0.52,
  },
  {
      material: "Sand (Cubes)",
      brick225mm: 0.2,
      aac200mm: 0.003,
      brick112mm: 0.1,
      aac100mm: 0.002,
      cementBlock150mm: 0.03,
      aac150mm: 0.03,
  },
  {
      material: "Water (Gals)",
      brick225mm: 115,
      aac200mm: 115,
      brick112mm: 50,
      aac100mm: 50,
      cementBlock150mm: 75,
      aac150mm: 75,
  },
  {
      material: "Mason (Days)",
      brick225mm: 2.25,
      aac200mm: 1,
      brick112mm: 1.5,
      aac100mm: 0.75,
      cementBlock150mm: 1,
      aac150mm: 0.75,
  },
  {
      material: "Unskilled laborer (Days)",
      brick225mm: 3.75,
      aac200mm: 1,
      brick112mm: 2,
      aac100mm: 0.75,
      cementBlock150mm: 1,
      aac150mm: 0.75,
  }
]

export function ProductTable03() {
  return (
      <Table className="sm:text-base 2xl:text-xl">
          <TableHeader>
              <TableRow className="bg-black hover:bg-black/75 text-white">
                  <TableHead className="">Materials/Labor</TableHead>
                  <TableHead className="text-center">Brick (225mm)</TableHead>
                  <TableHead className="text-center">AAC (200mm)</TableHead>
                  <TableHead className="text-center">Brick (112mm)</TableHead>
                  <TableHead className="text-center">AAC (100mm)</TableHead>
                  <TableHead className="text-center">Cement block (150mm)</TableHead>
                  <TableHead>AAC (150mm)</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {data.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-black/10" : "bg-black/35"}>
                      <TableCell className="font-medium ">{item.material}</TableCell>
                      <TableCell className="font-medium text-center bg-orange-500/20">{item.brick225mm}</TableCell>
                      <TableCell className="font-medium text-center">{item.aac200mm}</TableCell>
                      <TableCell className="font-medium text-center bg-orange-500/20">{item.brick112mm}</TableCell>
                      <TableCell className="font-medium text-center" >{item.aac100mm}</TableCell>
                      <TableCell className="font-medium text-center bg-orange-500/20">{item.cementBlock150mm}</TableCell>
                      <TableCell className="font-medium text-center">{item.aac150mm}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
  )
}
