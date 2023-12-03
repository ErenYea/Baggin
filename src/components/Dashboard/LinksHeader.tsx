import Link from "next/link";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const dashboardLinks = [
  { title: "Dashboard", icon: <DashboardOutlinedIcon /> },
  { title: "Events", icon: <EventAvailableOutlinedIcon /> },
  { title: "Members", icon: <GroupsOutlinedIcon /> },
  { title: "Messages", icon: <EmailOutlinedIcon /> },
  { title: "Calendar", icon: <CalendarMonthOutlinedIcon /> },
  { title: "Settings", icon: <SettingsOutlinedIcon /> },
];

const LinksHeader = () => {
  return (
    <div className="w-full bg-slate-900 py-6 px-4 flex justify-evenly items-center">
      {dashboardLinks?.map((link) => (
        <Link
          key={link.title}
          href="#"
          className="flex flex-col items-center gap-2"
        >
          {link.icon}
          <span className="font-medium uppercase text-base">{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default LinksHeader;
