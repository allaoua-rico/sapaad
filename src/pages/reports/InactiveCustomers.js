import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import * as React from "react";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";
import MuiTable from "../../components/MuiTable/MuiTable";
import InactiveCustomersSinceSetter from "../../components/Reports.js/InactiveCustomersSinceSetter";
import { useState } from "react";
import moment from "moment";
import H3 from "../../components/shared/wrappers/Reports/H3";
import SendSms from "../../components/Reports.js/SendSms";

export default function InactiveCustomers() {
  const [since, setSince] = useState({
    date: moment().subtract(1, "months").format(),
    text: "1 month",
  });
  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/marketing" />
          <MainH1>Inactive Customers Report</MainH1>
        </ReportToolbarLeftWrapper>
      </ReportToolbarWrapper>
      <InactiveCustomersSinceSetter setSince={setSince} since={since} />
      <div className="flex justify-between items-center">
        <H3>
          Customers not ordered since{" "}
          {moment(since.date).format("MMMM DD, YYYY")}
        </H3>
        <ReportToolbarRightWrapper>
          <SendSms disabled />
          <ExportToCsv />
        </ReportToolbarRightWrapper>
      </div>
      <MainPaper>
        <MuiTable rows={rows} headCells={headCells} />
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
    id: "Customer_Name",
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    id: "Telephone",
    numeric: true,
    disablePadding: false,
    label: "Telephone",
  },
  {
    id: "Total_Orders",
    numeric: true,
    disablePadding: false,
    label: "Total Orders",
  },
  {
    id: "Last_Ordered_At",
    numeric: true,
    disablePadding: false,
    label: "Last Ordered At",
  },
];
