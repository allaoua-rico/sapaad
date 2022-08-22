import MainPaper from "../shared/wrappers/MainPaper";
import Table from "../table/Table";
import TBR from "../table/TBR";
import TH from "../table/TH";
import THR from "../table/THR";

export default function SalesByStaffTable() {
  return (
    <MainPaper>
      <Table className="table-fixed" style={{ width: "100%" }}>
        <thead>
          <THR>
            <TH style={{ width: "25%" }}>Sales by Staff </TH>
            <TH style={{ width: "25%" }}>Qty</TH>
            <TH style={{ width: "25%" }}>%</TH>
            <TH style={{ width: "25%" }}>Value</TH>
          </THR>
        </thead>
        <tbody>
          <TBR>
            <td colspan="4">
              You don't have any saved reports. To get started, simply export a
              report from any widget, and your exported reports will saved here
              for future use!
            </td>
          </TBR>
        </tbody>
      </Table>
    </MainPaper>
  );
}
