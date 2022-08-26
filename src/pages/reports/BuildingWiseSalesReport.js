import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import PrintLink from "../../components/shared/buttons/PrintLink";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import * as React from "react";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";
import MuiTable from "../../components/MuiTable/MuiTable";

export default function BuildingWiseSalesReport() {
  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/marketing" />
          <MainH1>Building Wise Sales Report</MainH1>
        </ReportToolbarLeftWrapper>
        <ReportToolbarRightWrapper>
          <ExportToCsv />
          <PrintLink />
        </ReportToolbarRightWrapper>
      </ReportToolbarWrapper>
      <MainPaper>
        <MuiTable rows={rows} headCells={headCells} />
      </MainPaper>
    </ReportMainWrapper>
  );
}

const headCells = [
  {
    id: "Building_Name_Building_No",
    numeric: false,
    disablePadding: true,
    label: "Building Name / Building No",
  },
  {
    id: "Area_Name",
    numeric: false,
    disablePadding: true,
    label: "Area Name",
  },
  {
    id: "Total_Parcel",
    numeric: false,
    disablePadding: true,
    label: "Total Parcel",
  },
  {
    id: "Total_Amount",
    numeric: false,
    disablePadding: true,
    label: "Total Amount (SAR)",
  },
  {
    id: "Average_Parcel_Amount",
    numeric: false,
    disablePadding: true,
    label: "Average Parcel Amount (SAR)",
  },
];

function createData(Modifier_Name, Menu_Item, Total_Sold, Total_Amount) {
  return {
    Modifier_Name,
    Menu_Item,
    Total_Sold,
    Total_Amount,
  };
}

const rows = [createData("", "Total:", "0", "0.00")];
