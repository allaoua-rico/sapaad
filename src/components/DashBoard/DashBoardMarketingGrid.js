import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Link } from "react-router-dom";
import DashboardGridItem from "./DashboardGridItem";
import DashboardGridWhatsHappening from "./DashboardGridWhatsHappening";
import GridItemLgText from "./GridItemLgText";
import NoDataYet from "./NoDataYet";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const className = "w-20 h-20 bg-white border border-gray-300";

export default function DashBoardMarketingGrid() {
  const layout = [
    { i: "CancelledItems", x: 0, y: 0, w: 1, h: 2, isResizable: false },
    {
      i: "NewCustomers",
      x: 1,
      y: 0,
      w: 1,
      h: 2,
      isResizable: false,
    },
    {
      i: "TotalSurcharges",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "WhatsHappening",
      x: 4,
      y: 0,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "TotalDiscounts",
      x: 0,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "DeliveryReports",
      x: 2,
      y: 2,
      w: 1,
      h: 2,
      isResizable: false,
    },
    {
      i: "InactiveCustomers",
      x: 3,
      y: 2,
      w: 1,
      h: 2,
      isResizable: false,
    },
    {
      i: "TopComboItems",
      x: 0,
      y: 8,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "TopCustomers",
      x: 2,
      y: 8,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "TopModifiers",
      x: 4,
      y: 8,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "NumberOfCoversServed",
      x: 0,
      y: 12,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "TopPaidModifiers",
      x: 2,
      y: 12,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "TableWiseSalesReport",
      x: 4,
      y: 12,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "AreaWiseSalesReport",
      x: 0,
      y: 16,
      w: 2,
      h: 4,
      isResizable: false,
    },
    {
      i: "BuildingWiseSalesReport",
      x: 2,
      y: 16,
      w: 2,
      h: 4,
      isResizable: false,
    },
  ];
  return (
    <div>
      <ResponsiveReactGridLayout
        containerPadding={[0, 0]}
        className="layout"
        layouts={{ lg: layout }}
        rowHeight={100}
        width={1200}
        cols={{ lg: 6, md: 6, sm: 6, xs: 4, xxs: 2 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      >
        <div key="CancelledItems" className={className}>
          <DashboardGridItem
            to="/reports/cancelled_items"
            title="Cancelled Items"
            content={
              <div className="flex flex-col items-center">
                <div className="text-6xl">0</div>
                <div>SAR 0.00</div>
              </div>
            }
          />
        </div>
        <div key="NewCustomers" className={className}>
          <DashboardGridItem
            to="/reports/new_customers"
            title="New Customers"
            content={<GridItemLgText>0</GridItemLgText>}
          />
        </div>
        <div key="TotalSurcharges" className={className}>
          <DashboardGridItem
            to="/reports/total_surcharges"
            title="Total Surcharges"
            content={
              <div>
                <div>SAR</div>
                <GridItemLgText>0.00</GridItemLgText>
              </div>
            }
          />
        </div>
        <div
          key="WhatsHappening"
          className="bg-gray-100 border border-gray-300"
        >
          <DashboardGridWhatsHappening />
        </div>
        <div key="TotalDiscounts" className={className}>
          <DashboardGridItem
            to="/reports/total_discounts"
            title="Total Discounts"
            content={
              <div>
                <div>SAR</div>
                <GridItemLgText>0.00</GridItemLgText>
              </div>
            }
          />
        </div>
        <div key="DeliveryReports" className={className}>
          <DashboardGridItem
            to="/reports/delivery_report"
            title="Delivery Reports"
            content={
              <div className="flex flex-col items-center">
                <div className="text-6xl">0</div>
                <div>SAR 0.00</div>
              </div>
            }
          />
        </div>
        <div key="InactiveCustomers" className={className}>
          <DashboardGridItem
            to="/reports/inactive_customers"
            content={
              <Link
                to="/reports/inactive_customers"
                className="flex flex-col items-center text-center"
              >
                <img
                  src="/inactive-customers.png"
                  alt="hourly-report"
                  className="w-11 h-11"
                />
                <div>Inactive Customers</div>
              </Link>
            }
          />
        </div>

        <div key="TopComboItems" className={className}>
          <DashboardGridItem
            to="/reports/top_combo_items"
            title="Top Combo Items"
            content={<NoDataYet />}
          />
        </div>
        <div key="TopCustomers" className={className}>
          <DashboardGridItem
            to="/reports/top_customers"
            title="Top Customers"
            content={<NoDataYet />}
          />
        </div>
        <div key="TopModifiers" className={className}>
          <DashboardGridItem
            to="/reports/top_modifiers"
            title="Top Modifiers"
            content={<NoDataYet />}
          />
        </div>
        <div key="NumberOfCoversServed" className={className}>
          <DashboardGridItem
            to="/reports/number_of_person_served_by_location?type=nop"
            title="Number Of Covers Served"
            content={<NoDataYet />}
          />
        </div>
        <div key="TopPaidModifiers" className={className}>
          <DashboardGridItem
            to="/reports/top_paid_modifiers"
            title="Top Paid Modifiers"
            content={<NoDataYet />}
          />
        </div>
        <div key="TableWiseSalesReport" className={className}>
          <DashboardGridItem
            to="/reports/table_wise_sales_report"
            title="Table Wise Sales Report"
            content={<NoDataYet />}
          />
        </div>
        <div key="AreaWiseSalesReport" className={className}>
          <DashboardGridItem
            to="/reports/area_wise_sales_report"
            title="Area Wise Sales Report"
            content={<NoDataYet />}
          />
        </div>
        <div key="BuildingWiseSalesReport" className={className}>
          <DashboardGridItem
            to="/reports/building_wise_sales_report"
            title="Building Wise Sales Report"
            content={<NoDataYet />}
          />
        </div>
        {/* <div key="b" className={className}>
          <DashboardGridItem
            title="Modifications & Reprints"
            to="/reports/modifications_and_reprints"
            content={<GridItemLgText>0</GridItemLgText>}
          />
        </div>
        <div key="c" className={className}>
          <DashboardGridItem
            title="Modifications & Reprints"
            to="/reports/modifications_and_reprints"
            content={
              <div>
                <div>SAR</div>
                <GridItemLgText>0.00</GridItemLgText>
              </div>
            }
          />
        </div>

        <div key="HourlyReport" className={className}>
          <DashboardGridItem
            to="/reports/hourly_report"
            content={
              <Link
                to="hourly_report"
                className="flex flex-col items-center text-center"
              >
                <img
                  src="/hourly-report.png"
                  alt="hourly-report"
                  className="w-11 h-11"
                />
                <div className="">Hourly Breakdown Report</div>
              </Link>
            }
          />
        </div>

        <div key="Announcements" className={className}>
          <DashboardGridItem
            title="Announcements"
            content={<DashboardGridAnnouncements />}
          />
        </div>

        <div key="SalesByLocation" className={className}>
          <DashboardGridItem
            to="/reports/top_sales?type=sales"
            title="Sales By Location"
            content={<NoDataYet />}
          />
        </div>
        <div key="OrdersByLocation" className={className}>
          <DashboardGridItem
            to="/reports/top_sales?type=orders"
            title="Orders By Location"
            content={<NoDataYet />}
          />
        </div>
        <div key="TotalOrders" className={className}>
          <DashboardGridItem
            to="/reports/total_orders?page=1&order_by=created_at&sort_by=ASC"
            title="Total Orders"
            content={<GridItemLgText>0</GridItemLgText>}
          />
        </div>
        <div key="TopGrossingItems" className={className}>
          <DashboardGridItem
            to="reports/top_grossing_items?order_by=totalamount&sort_by=DESC"
            title="Top Grossing Items"
            content={<NoDataYet />}
          />
        </div>
        <div key="StaffWiseReport" className={className}>
          <DashboardGridItem
            to="reports/staff_wise_report"
            title="Staff Wise Report"
            content={<NoDataYet />}
          />
        </div> */}
      </ResponsiveReactGridLayout>
    </div>
  );
}
