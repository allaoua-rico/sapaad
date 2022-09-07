import SetupBusinessDetails from "../components/SetupPage/SetupBusinessDetails";
import SetupGrid from "../components/SetupPage/SetupGrid";

export default function SetupPage() {
  return (
    <div className="flex flex-col flex-1">
      <SetupBusinessDetails business={business} />
      <SetupGrid />
    </div>
  );
}

const business = {
  img: "/image_missing_no_logo.jpg",
  name: "KM REst",
  phone: "+966126502276",
  country: "Saudi Arabia",
  timezone: "Riyadh",
  endOfBusinessDay: "12:00 AM",
};
