import { Tabs } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import SearchInput from "../../components/shared/SearchInput";
import a11yProps from "../../components/shared/utils/MuiAntTabs/a11yProps";
import AntTab from "../../components/shared/utils/MuiAntTabs/AntTab";
import TabPanel from "../../components/shared/utils/MuiAntTabs/TabPanel";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import TH from "../../components/table/TH";

export default function SetupLocationsStaff() {
  const [{ crumbs }] = useOutletContext();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const staff = [
    "Admin",
    "Captain",
    "Walter",
    "Cashier",
    "Service Station",
    "Call Agent",
    "Call Agent Supervisor",
    "Delivery Manager station",
    "Delivery Boy",
  ];
  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Staff</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <div className="flex items-center justify-between">
        <div className="text-gray-500">
          <h2 className="text-xl">Assign {staff[value]} to Restaurant</h2>
        </div>
        <div>
          <SearchInput placeholder="Search Dish" />
        </div>
      </div>
      <div
        className="flex items-center
        py-5
        "
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          orientation="vertical"
          sx={{ mb: "auto" }}
        >
          {staff.map((member, index) => (
            <AntTab label={member} {...a11yProps(index)} />
          ))}
        </Tabs>
        <div className="px-3 self-stretch flex-1">
          {Array.apply(null, Array(9)).map((el, index) => (
            <TabPanel value={value} index={index}>
              <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
                <table className="table-fixed" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <TH>Name</TH>
                      <TH>Default Assigned Location</TH>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
