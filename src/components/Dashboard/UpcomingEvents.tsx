import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const UpcomingEvents = () => {
  return (
    <div className="mt-4 mb-2">
      {[1, 2, 3, 4]?.map((item) => (
        <div
          key={item}
          className="my-2 text-base py-2 px-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-slate-950 flex justify-center items-center font-medium">
            E
          </div>
          <div className="font-medium text-lg">
            Event Name
            <div className="flex items-center gap-1 font-medium text-base">
              <LocationOnOutlinedIcon />
              Location
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
