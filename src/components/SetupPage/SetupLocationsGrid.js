import React from "react";
import { BsDisplay, BsGrid3X3GapFill, BsPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { IoLocationSharp, IoSettingsSharp } from "react-icons/io5";
import GridLink from "../shared/wrappers/GridLink";
import GridLinkText from "./GridLinkText";
import { TiPuzzle } from "react-icons/ti";
import LinkIcon from "./LinkIcon";
import { useParams } from "react-router-dom";

export default function SetupLocationsGrid() {
  let { locationId } = useParams();
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-4 
    gap-x-4 gap-y-6
    w-full mx-auto
    pt-8
    "
    >
      <GridLink
        to={`/setup/setup_locations/${locationId}/edit/general_details`}
      >
        <LinkIcon>
          <FaBuilding className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>General Details</GridLinkText>
      </GridLink>
      <GridLink
        to={`/setup/setup_locations/${locationId}/edit/pos_menu_management`}
      >
        <LinkIcon>
          <IoSettingsSharp className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Menu Management</GridLinkText>
      </GridLink>
      <GridLink to={`/setup/setup_locations/${locationId}/edit/staff`}>
        <LinkIcon>
          <BsPeopleFill className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Staff</GridLinkText>
      </GridLink>
      <GridLink to={`/setup/setup_locations/${locationId}/edit/staff`}>
        <LinkIcon>
          <BsGrid3X3GapFill className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Dining Sections</GridLinkText>
      </GridLink>
      <GridLink to={`/setup/setup_locations/${locationId}/edit/staff`}>
        <LinkIcon>
          <TiPuzzle className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Printer & Peripheral Settings</GridLinkText>
      </GridLink>
      <GridLink to={`/setup/setup_locations/${locationId}/edit/staff`}>
        <LinkIcon>
          <IoLocationSharp className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Delivery Settings</GridLinkText>
      </GridLink>
      <GridLink to={`/setup/setup_locations/${locationId}/edit/staff`}>
        <LinkIcon>
          <BsDisplay className="h-8 w-8" />
        </LinkIcon>
        <GridLinkText>Self Ordering Systems</GridLinkText>
      </GridLink>
    </div>
  );
}
