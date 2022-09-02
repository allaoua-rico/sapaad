import moment from "moment";
import React, { useState } from "react";
import ExportToCsv from "../../components/Reports.js/ExportToCsv";
import PrintLink from "../../components/shared/buttons/PrintLink";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import DropDownFilter from "../../components/shared/Select/DropDownFilter";
import RadiosGroup from "../../components/shared/utils/RadiosGroup";
import MainPaper from "../../components/shared/wrappers/MainPaper";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportMainWrapper from "../../components/shared/wrappers/Reports/ReportMainWrapper";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import ReportToolbarRightWrapper from "../../components/shared/wrappers/Reports/ReportToolbarRightWrapper";
import ReportToolbarWrapper from "../../components/shared/wrappers/Reports/ReportToolbarWrapper";

export default function HourlyReport() {
  const [orderBy, setOrderBy] = useState("Orders");
  //   console.log(orderBy);
  const list = [];
  for (let index = 0; index < 24; index++) {
    const interval = {
      start: moment().startOf("day").add(index, "h").format("HH"),
      end: moment()
        .startOf("day")
        .add(index + 1, "h")
        .format("HH"),
    };
    list.push(interval);
  }
  //   console.log(list);
  return (
    <ReportMainWrapper>
      <ReportToolbarWrapper>
        <ReportToolbarLeftWrapper>
          <ReturnLinkButton to="/dashboard/sales" />
          <MainH1>Hourly Breakdown by Orders</MainH1>
        </ReportToolbarLeftWrapper>
        <ReportToolbarRightWrapper>
          <RadiosGroup
            name="by"
            wrapperClass="flex items-center space-x-2 bg-secondBg text-white py-1 px-3 rounded"
            setSelected={setOrderBy}
            selected={orderBy}
            radios={[
              { text: "By Orders", value: "Orders" },
              { text: "By Sales", value: "Sales" },
            ]}
          />
          <DropDownFilter
            name="Category"
            filters={[
              { text: "Burgers", value: "Burgers" },
              { text: "Pizzas", value: "Pizzas" },
              { text: "Beverages", value: "Beverages" },
            ]}
          />
          <DropDownFilter name="Item" filters={[]} />
          <ExportToCsv />
          <PrintLink />
        </ReportToolbarRightWrapper>
      </ReportToolbarWrapper>
      <MainPaper>
        <div
          className="flex flex-col
        space-y-3 
        "
        >
          <div className="text-2xl font-bold mx-auto">All Orders</div>
          <div className="flex flex-col ">
            <div
              className="bg-gray-500 text-white 
            flex space-x-2 overflow-x-auto  text-sm
            "
            >
              <div className="font-medium">
                <div>Hours</div>
                <div>Date</div>
              </div>
              {React.Children.toArray(
                list.map(({ start, end }) => (
                  <div>
                    <span>{start}-</span>
                    <br />
                    <span>{end}</span>
                  </div>
                ))
              )}
            </div>
            <div className="mx-auto">NO DATA AVAILABLE</div>
          </div>
        </div>
      </MainPaper>
    </ReportMainWrapper>
  );
}
