import { ItemList } from "./ItemList";
import { OverviewCards } from "./OverviewCards";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto space-y-8">
        <Tabs defaultValue="Overview">
          <TabsList>
            <TabsTrigger value="Overview">
              <AppWindowIcon />
              Overview
            </TabsTrigger>
            <TabsTrigger value="By Category">
              <CodeIcon />
              By Category
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Overview">
            <OverviewCards />
          </TabsContent>
          <TabsContent value="By Category">
            <CategoryCards />
          </TabsContent>
        </Tabs>
        <ItemList />
      </div>
    </div>
  );
}
