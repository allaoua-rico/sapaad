import React from "react";
import Table from "../../table/Table";
import TBR from "../../table/TBR";
import TH from "../../table/TH";
import THR from "../../table/THR";

export default function OrderTypesTable() {
  return (
    <div>
      <Table>
        <thead>
          <THR>
            <TH>Order Types</TH>
            <TH>Orders</TH>
            <TH>Value</TH>
          </THR>
        </thead>
        <tbody>
          <TBR className="space-x-1">
            <td className="border-t-2 border-black">Total</td>
            <td className="border-t-2 border-black">0</td>
            <td className="border-t-2 border-black">(0.00)</td>
          </TBR>
        </tbody>
      </Table>
    </div>
  );
}
