import React from "react";
import { useOutletContext } from "react-router-dom";
import SetupLocationsGrid from "../../components/SetupPage/SetupLocationsGrid";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";

export default function SetupLocationsEdit() {
  const [{ crumbs }] = useOutletContext();
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
      <SetupLocationsGrid />
    </div>
  );
}
