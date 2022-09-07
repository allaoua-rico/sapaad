import { IoLocationSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { FaPlug } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import { TbBuildingBank } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function SetupGrid() {
  return (
    <div className="bg-white flex-1 ">
      <div
        className="grid grid-cols-1 sm:grid-cols-4 
    gap-x-4 gap-y-6
    max-w-4xl w-full mx-auto
    pt-8
    "
      >
        <GridLink to="/setup_locations">
          <LinkIcon>
            <IoLocationSharp className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <GiKnifeFork className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>{" "}
        <GridLink to="/setup_locations">
          <LinkIcon>
            <BsPeopleFill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>{" "}
        <GridLink to="/setup_locations">
          <LinkIcon>
            <RiSettings5Fill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>{" "}
        <GridLink to="/setup_locations">
          <LinkIcon>
            <FaPlug className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>{" "}
        <GridLink to="/setup_locations">
          <LinkIcon>
            <RiEarthFill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>{" "}
        <GridLink to="/setup_locations">
          <LinkIcon>
            <TbBuildingBank className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>
      </div>
    </div>
  );
}

function GridLink({ children, to }) {
  return (
    <Link
      to={to}
      className="hover:bg-[#59d2c6] rounded-sm
    border border-gray-300
    p-8
    flex flex-col items-center
    hover:text-white group
    transition-all duration-200
    "
    >
      {children}
    </Link>
  );
}

function GridLinkText({ children }) {
  return (
    <div
      className="pb-3
      text-gray-600 group-hover:text-white
        transition-all duration-200
        "
    >
      {children}
    </div>
  );
}

function LinkIcon({ children }) {
  return <div className="p-5">{children}</div>;
}
