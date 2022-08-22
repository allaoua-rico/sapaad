import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import ChartSalesReports from "./ChartSalesReports";
import styled from "styled-components";
import tw from "twin.macro";
import DashboardGridItem from "./DashboardGridItem";
import GridItemLgText from "./GridItemLgText";
import DashboardGridWhatsHappening from "./DashboardGridWhatsHappening";
import DashboardGridAnnouncements from "./DashboardGridAnnouncements";
import { Link } from "react-router-dom";
import NoDataYet from "./NoDataYet";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const className = "w-20 h-20 bg-white border border-gray-300";

export default function DashBoardSalesGrid() {
  const layout = [
    { i: "Charts", x: 0, y: 0, w: 8, h: 3, minW: 2, maxW: 12 },
    {
      i: "Modifications&Reprints",
      x: 0,
      y: 3,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 4,
      isResizable: false,
    },
    { i: "c", x: 2, y: 3, w: 2, h: 2, isResizable: false },
    { i: "WhatsHappening", x: 4, y: 3, w: 2, h: 4, isResizable: false },
    { i: "HourlyReport", x: 2, y: 5, w: 1, h: 2, isResizable: false },
    { i: "CancelledOrders", x: 3, y: 5, w: 1, h: 2, isResizable: false },
    { i: "Announcements", x: 0, y: 5, w: 2, h: 4, isResizable: false },
    { i: "TopSellingItems", x: 2, y: 7, w: 2, h: 4, isResizable: false },
    { i: "SalesByLocation", x: 4, y: 7, w: 2, h: 4, isResizable: false },
    { i: "OrdersByLocation", x: 0, y: 9, w: 2, h: 4, isResizable: false },
    { i: "TotalOrders", x: 2, y: 12, w: 2, h: 2, isResizable: false },
    { i: "TopGrossingItems", x: 4, y: 9, w: 2, h: 4, isResizable: false },
    { i: "StaffWiseReport", x: 0, y: 11, w: 2, h: 4, isResizable: false },
  ];

  return (
    <div>
      <ResponsiveReactGridLayout
        containerPadding={[0, 0]}
        className="layout"
        layouts={{ lg: layout }}
        rowHeight={100}
        width={1200}
        resizeHandles={["se", "sw"]}
        cols={{ lg: 6, md: 6, sm: 6, xs: 4, xxs: 2 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      >
        <div key="Charts" className={className}>
          <ChartWrapper>
            <ChartSalesReports />
          </ChartWrapper>
        </div>
        <div key="Modifications&Reprints" className={className}>
          <DashboardGridItem
            title="Modifications & Reprints"
            to="/reports/modifications_and_reprints"
            content={<GridItemLgText>0</GridItemLgText>}
          />
        </div>
        <div key="c" className={className}>
          <DashboardGridItem
            title="Total Sales"
            to="/reports/total_sales"
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
        <div key="CancelledOrders" className={className}>
          <DashboardGridItem
            to="/reports/cancelled_orders"
            title="Cancelled Orders"
            content={
              <div className="flex flex-col items-center">
                <div className="text-6xl">0</div>
                <div>SAR</div>
                <div>0.00</div>
              </div>
            }
          />
        </div>
        <div key="Announcements" className={className}>
          <DashboardGridItem
            title="Announcements"
            content={<DashboardGridAnnouncements />}
          />
        </div>
        <div key="TopSellingItems" className={className}>
          <DashboardGridItem
            to="/reports/top_selling_items?order_by=totalsold&sort_by=DESC"
            title="Top Selling Items"
            content={<NoDataYet />}
          />
        </div>
        <div key="SalesByLocation" className={className}>
          <DashboardGridItem
            to="/reports/total_sales?type=sales"
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
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
}

const ChartWrapper = styled.div`
  ${tw`!h-full py-10`}
  .recharts-cartesian-grid-horizontal line {
    stroke-dasharray: none;
  }
  .recharts-cartesian-grid-vertical line {
    display: none;
  }
`;
