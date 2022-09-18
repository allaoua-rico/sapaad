import { IoLocationSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { FaPlug } from "react-icons/fa";
import { RiEarthFill } from "react-icons/ri";
import { TbBuildingBank } from "react-icons/tb";
import GridLink from "../shared/wrappers/GridLink";
import GridLinkText from "./GridLinkText";
import LinkIcon from "./LinkIcon";

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
        <GridLink to="/setup/setup_locations">
          <LinkIcon>
            <IoLocationSharp className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Location Setup</GridLinkText>
        </GridLink>
        <GridLink to="/setup/setup_items">
          <LinkIcon>
            <GiKnifeFork className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Menu Setup</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <BsPeopleFill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Staff</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <RiSettings5Fill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Global Settings</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <FaPlug className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Partner Integrations</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <RiEarthFill className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Sapaad Add-Ons</GridLinkText>
        </GridLink>
        <GridLink to="/setup_locations">
          <LinkIcon>
            <TbBuildingBank className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>My Account</GridLinkText>
        </GridLink>
      </div>
    </div>
  );
}
