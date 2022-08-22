import OrderTypesMenu from "../OrderTypesMenu";
import PeriodMenu from "../PeriodMenu";

export default function DashBoardSalesTopSection({
  filterStartDate,
  filterEndDate,
  setFilterStartDate,
  setFilterEndDate,
}) {
  return (
    <div className="bg-secondBg p-[10px] flex justify-between">
      <OrderTypesMenu />
      <PeriodMenu
        filterStartDate={filterStartDate}
        setFilterStartDate={setFilterStartDate}
        filterEndDate={filterEndDate}
        setFilterEndDate={setFilterEndDate}
      />
    </div>
  );
}
