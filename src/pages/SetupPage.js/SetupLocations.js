import { FaPhoneAlt, FaPlus } from "react-icons/fa";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import GreenButton from "../../components/shared/buttons/GreenButton";
import GridLink from "../../components/shared/wrappers/GridLink";

export default function SetupLocations() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <SetupTopSection
        title="Locations"
        rightSection={
          <GreenButton>
            <FaPlus />
            <span>Add Location</span>
          </GreenButton>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {locations.map((location) => (
          <LocationLink to={`${location.id}/edit`} location={location} />
        ))}
      </div>
    </div>
  );
}

const locations = [
  {
    name: "A",
    address: ["a", "A,saudi Arabia"],
    phone: "0793651798",
    id: 15941,
  },
];

function LocationLink({ location, to }) {
  const { name, address, phone } = location;
  return (
    <GridLink to={to}>
      <div className="space-y-4 w-full">
        <div
          className="text-gray-500 text-3xl
    group-hover:text-white 
    transition-all duration-200
    "
        >
          {name}
        </div>
        <div
          className="text-gray-500 
    group-hover:text-white text-sm
    transition-all duration-200
    pb-7
    "
        >
          {address.map((add) => (
            <div>{add}</div>
          ))}
        </div>
        <div
          className="flex items-center space-x-1 
      absolute right-0 bottom-0
      py-[10px] px-5 border border-gray-300
      text-sm
      "
        >
          <FaPhoneAlt />
          <span>{phone}</span>
        </div>
      </div>
    </GridLink>
  );
}
