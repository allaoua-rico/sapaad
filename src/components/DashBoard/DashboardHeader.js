import DashboardHeaderLgNavLink from "./DashboardHeaderLgNavLink";
import { FaBalanceScale } from "react-icons/fa";
import { BiRadioCircleMarked } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { FiSave } from "react-icons/fi";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useEffect } from "react";
import { useRef } from "react";

export default function DashboardHeader() {
  const scrollbarRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    // Fixed the scrollbar not appearing bug
    // by calling the update method of ScrollBars
    const observer = new ResizeObserver(() => {
      scrollbarRef.current?.update();
      scrollbarRef.current?.update();
    });
    observer.observe(childRef.current);
  }, []);

  return (
    <div
      className={`w-full 
      sticky top-HeaderLgHeight z-50 
    bg-[#677382] text-[#e8e8e8]
      px-5 
    `}
    >
      <Scrollbars style={{ height: 44 }} ref={scrollbarRef}>
        <div ref={childRef} className="flex h-11 ">
          <DashboardHeaderLgNavLink
            to={["/dashboard/sales", "/dashboard"]}
            text={
              <div className="flex items-center space-x-1">
                <FaBalanceScale />
                <span>Sales</span>
              </div>
            }
          />
          <DashboardHeaderLgNavLink
            to="/dashboard/marketing"
            text={
              <div className="flex items-center space-x-1">
                <BiRadioCircleMarked />
                <span>Marketing</span>
              </div>
            }
          />
          <DashboardHeaderLgNavLink
            to="/dashboard/sales_summary"
            text={
              <div className="flex items-center space-x-1">
                <IoTicket />
                <span>Business Summary</span>
              </div>
            }
          />
          <DashboardHeaderLgNavLink
            to="/dashboard/saved_reports"
            text={
              <div className="flex items-center space-x-1">
                <FiSave />
                <span>Saved Reports</span>
              </div>
            }
          />
        </div>
      </Scrollbars>
    </div>
  );
}
