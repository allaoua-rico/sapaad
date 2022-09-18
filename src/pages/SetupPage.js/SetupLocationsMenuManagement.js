import React from "react";
import { FaCalculator, FaPercent } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useOutletContext, useParams } from "react-router-dom";
import GridLinkText from "../../components/SetupPage/GridLinkText";
import LinkIcon from "../../components/SetupPage/LinkIcon";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import GridLink from "../../components/shared/wrappers/GridLink";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";

export default function SetupLocationsMenuManagement() {
  const [{ crumbs }] = useOutletContext();
  let { locationId } = useParams();

  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Edit Location</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-4 
        gap-x-4 gap-y-6
        w-full mx-auto
        pt-8
        "
      >
        <GridLink
          to={`/setup/setup_locations/${locationId}/edit/pos_menu_management/surcharge_and_discount`}
        >
          <LinkIcon>
            <FaPercent className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Surcharges and Discounts</GridLinkText>
        </GridLink>
        <GridLink
          to={`/setup/setup_locations/${locationId}/edit/pos_menu_management/tax_rate`}
        >
          <LinkIcon>
            <FaCalculator className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Tax Rates</GridLinkText>
        </GridLink>
        <GridLink
          to={`/setup/setup_locations/${locationId}/edit/pos_menu_management/menu`}
        >
          <LinkIcon>
            <IoSettingsSharp className="h-8 w-8" />
          </LinkIcon>
          <GridLinkText>Staff</GridLinkText>
        </GridLink>
      </div>
    </div>
  );
}
