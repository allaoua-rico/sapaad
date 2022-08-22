import Table from "../../table/Table";
import TBR from "../../table/TBR";
import TH from "../../table/TH";
import THR from "../../table/THR";

export default function VoidsTable() {
  return (
    <div>
      <Table>
        <thead>
          <THR>
            <TH scope="col">Voids</TH>
            <TH>Qty</TH>
            <TH>Value</TH>
          </THR>
        </thead>
        <tbody>
          <TBR className="border-t border-dashed">
            <td>Item Voids </td>
            <td>0</td>
            <td>0.00</td>
          </TBR>
          <TBR>
            <td>Order voids </td>
            <td>0</td>
            <td>0.00</td>
          </TBR>
          <TBR>
            <td className="border-t-2 border-black">Total</td>
            <td className="border-t-2 border-black"></td>
            <td className="border-t-2 border-black">0.00</td>
          </TBR>
        </tbody>
      </Table>
    </div>
  );
}
