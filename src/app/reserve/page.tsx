import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@yuemnoi/components/ui/tabs";
import RequestPage from "./components/RequestPage";
import ActivePage from "./components/ActivePage";
import HistoryPage from "./components/HistoryPage";

export default function ReservePage() {
  return (
    <div className=" min-h-screen max-w-screen w-screen flex flex-col">
      <div className="w-full px-4">
        <Tabs defaultValue="request" className="w-full ">
          <TabsList className="w-full justify-between bg-transparent border-b-2 border-gray-200 rounded-none">
            <TabsTrigger
              value="request"
              className="w-[100%] py-2 rounded-none data-[state=active]:border-primary data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-semibold "
            >
              Request
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="w-[100%] py-2 rounded-none data-[state=active]:border-primary data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-semibold "
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="w-[100%] py-2 rounded-none data-[state=active]:border-primary data-[state=active]:border-b-2 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-semibold "
            >
              History
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="request">
            <RequestPage />
          </TabsContent> */}
          <TabsContent value="active">
            <ActivePage />
          </TabsContent>
          {/* <TabsContent value="history">
            <HistoryPage />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
}
