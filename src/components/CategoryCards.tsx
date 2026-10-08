import { useItemStore } from "@/store/dataStore";
import { categoryOptions } from "@/types/datatypes";
import {
  Laptop,
  Pencil,
  Apple,
  Shirt,
  Wrench,
  MoreHorizontal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap: Record<string, React.ReactNode> = {
  Electronics: <Laptop className="h-4 w-4" />,
  Stationery: <Pencil className="h-4 w-4" />,
  Grocery: <Apple className="h-4 w-4" />,
  Clothing: <Shirt className="h-4 w-4" />,
  Tools: <Wrench className="h-4 w-4" />,
  Other: <MoreHorizontal className="h-4 w-4" />,
};

export function CategoryCards() {
  const inventory = useItemStore((state) => state.inventory);

  return (
    <div className="grid gap-2 md:grid-cols-6">
      {categoryOptions.map((category) => {
        const categoryItems = inventory.filter(
          (item) => item.category === category.value,
        );
        const categoryUnits = categoryItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const categoryValue = categoryItems.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0,
        );

        return (
          <div className="grid gap-2">
            <Card>
              <CardHeader className="flexitems-center justify-between pb-2">
                <Laptop className="h-4 w-4" />
                <CardTitle className="text-sm font-medium">
                  Electronics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ฿
                  {inventory
                    .filter((item) => item.category === "Electronics")
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
{
  /*return (
    
    <div className="grid gap-2 md:grid-cols-6">
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <Laptop className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Electronics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Electronics")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <Pencil className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Stationery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Stationery")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <Apple className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Grocery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Grocery")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <Shirt className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Clothing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Clothing")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <Wrench className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Tools")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flexitems-center justify-between pb-2">
          <MoreHorizontal className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Other</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {inventory
              .filter((item) => item.category === "Other")
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
          <CardDescription className="text-sm font-medium mt-4">

          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );*/
}
