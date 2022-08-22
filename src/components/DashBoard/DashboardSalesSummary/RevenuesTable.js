import React from "react";
import Table from "../../table/Table";
import TBR from "../../table/TBR";
import TH from "../../table/TH";
import THR from "../../table/THR";

export default function RevenuesTable() {
  const rows = [
    {
      title: "Sales",
      value: "0.00",
    },
    {
      title: "Paid Modifiers",
      value: "0.00",
    },
    {
      title: "Surcharges",
      value: "0.00",
    },
  ];

  return (
    <div>
      <Table>
        <thead>
          <THR>
            <TH scope="col">Revenues</TH>
            <TH></TH>
          </THR>
        </thead>
        <tbody>
          {React.Children.toArray(
            rows.map(({ title, value }) => (
              <TBR>
                <td>{title}</td>
                <td>{value}</td>
              </TBR>
            ))
          )}
          <TBR className="border-t border-dashed">
            <td>Gross Sales </td>
            <td>0.00</td>
          </TBR>
          <TBR>
            <td>Discounts </td>
            <td className="text-red-500">(0.00)</td>
          </TBR>
          <TBR className="space-x-1">
            <td className="border-t-2 border-black">Net Sales</td>
            <td className="border-t-2 border-black">(0.00)</td>
          </TBR>
        </tbody>
      </Table>
    </div>
  );
}
