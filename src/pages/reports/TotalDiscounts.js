import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import PrintLink from "../../components/shared/buttons/PrintLink";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import * as React from "react";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import OneColTable from "../../components/shared/wrappers/OneColTable";
import DropDownFilter from "../../components/shared/Select/DropDownFilter";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";
import MuiTable from "../../components/MuiTable/MuiTable";

export default function TotalDiscounts() {
  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/marketing" />
          <MainH1>Total Discounts</MainH1>
        </ReportToolbarLeftWrapper>
        <ReportToolbarRightWrapper>
          <DropDownFilter
            name="Discount Level"
            filters={[
              { text: "Order Discount", value: "Order Discount" },
              { text: "Item Discount", value: "Item Discount" },
            ]}
            hideAll
            defaultSelected="Order Discount"
          />
          <DropDownFilter name="Driver" filters={[]} />
          <ExportToCsv />
          <PrintLink />
        </ReportToolbarRightWrapper>
      </ReportToolbarWrapper>
      <MainPaper>
        <MuiTable rows={rows} headCells={headCells} />
        <div
          className="
         flex flex-col space-y-4 sm:space-y-0
         sm:flex-row sm:space-x-6
         justify-center items-center
         "
        >
          <div className="sm:w-1/4 w-full">
            <OneColTable label="Total Discount Amount" value="SAR 0.00" />
          </div>
        </div>
      </MainPaper>
    </ReportMainWrapper>
  );
}

function createData(
  Order,
  type,
  OrderTime,
  By,
  When,
  What,
  Who,
  Reason,
  Amount
) {
  return {
    Order,
    type,
    OrderTime,
    By,
    When,
    What,
    Who,
    Reason,
    Amount,
  };
}

const rows = [
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Donut", 452, 25.0, 51, 4.9),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   createData("Honeycomb", 408, 3.2, 87, 6.5),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Jelly Bean", 375, 0.0, 94, 0.0),
  //   createData("KitKat", 518, 26.0, 65, 7.0),
  //   createData("Lollipop", 392, 0.2, 98, 0.0),
  //   createData("Marshmallow", 318, 0, 81, 2.0),
  //   createData("Nougat", 360, 19.0, 9, 37.0),
  //   createData("Oreo", 437, 18.0, 63, 4.0),
];

const headCells = [
  {
    id: "Date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "Order",
    numeric: false,
    disablePadding: true,
    label: "Order",
  },
  {
    id: "Order_Type",
    numeric: true,
    disablePadding: false,
    label: "Order Type",
  },
  {
    id: "By",
    numeric: true,
    disablePadding: false,
    label: "By",
  },
  {
    id: "Discount_Name",
    numeric: true,
    disablePadding: false,
    label: "Discount Name",
  },
  {
    id: "Scope",
    numeric: true,
    disablePadding: false,
    label: "Scope",
  },
  {
    id: "Discount Type",
    numeric: true,
    disablePadding: false,
    label: "Discount Type",
  },
  {
    id: "Discount_Amount",
    numeric: true,
    disablePadding: false,
    label: "Discount Amount (SAR)",
  },
];
