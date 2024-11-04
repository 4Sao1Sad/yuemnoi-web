import { Button } from "@yuemnoi/components/ui/button";
import { Input } from "@yuemnoi/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@yuemnoi/components/ui/tabs";

export default function Home() {
  return (
    <div>
      ลองลอง
      <h1 className="h3 text-primary font-bold">hello</h1>
      <Button>button</Button>
      <Button variant="outline">outline</Button>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">เครื่องคิดเลข</TabsTrigger>
        </TabsList>
      </Tabs>
      <Input placeholder="test" />
    </div>
  );
}
