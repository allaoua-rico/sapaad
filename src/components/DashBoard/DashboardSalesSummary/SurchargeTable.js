import Table from "../../table/Table";
import TBR from "../../table/TBR";
import TH from "../../table/TH";
import THR from "../../table/THR";

export default function SurchargeTable() {
  return (
    <div>
      <Table>
        <thead>
          <THR>
            <TH>Surcharge</TH>
            <TH>Qty</TH>
            <TH>Value</TH>
          </THR>
        </thead>
        <tbody>
          <TBR>
            <td className="border-t-2 border-black">Total</td>
            <td className="border-t-2 border-black"></td>
            <td className="border-t-2 border-black">(0.00)</td>
          </TBR>
        </tbody>
      </Table>
    </div>
  );
}
