import LinksHeader from "@/components/Dashboard/LinksHeader";
import LineChartComp from "@/components/Dashboard/LineChartComp";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import ProgressCircleComp from "@/components/Dashboard/ProgressCircleComp";
import UpcomingEvents from "@/components/Dashboard/UpcomingEvents";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <LinksHeader />
      <div className="grid grid-cols-12 my-8 gap-8">
        <div className="col-start-2 col-span-4">
          <LineChartComp />
        </div>
        <div className="col-span-3 bg-slate-900 py-2 px-4 rounded-md border border-gray-800">
          <h4 className="mt-3 text-lg font-medium">Tickets</h4>
          <ProgressCircleComp />
        </div>
        <div className="col-span-3 bg-slate-900 py-2 px-4 rounded-md border border-gray-800">
          <h4 className="mt-3 text-lg font-medium">Upcoming Events</h4>
          <UpcomingEvents />
        </div>
      </div>
      <div className="grid grid-cols-12 my-8 gap-8">
        <div className="col-start-2 col-span-4">
          <LineChartComp />
        </div>
        <div className="col-span-3 bg-slate-900 py-2 px-4 rounded-md border border-gray-800">
          <h4 className="mt-3 text-lg font-medium">Tickets</h4>
          <ProgressCircleComp />
        </div>
        <div className="col-span-3 bg-slate-900 py-2 px-4 rounded-md border border-gray-800">
          <h4 className="mt-3 text-lg font-medium">Upcoming Events</h4>
          <UpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
