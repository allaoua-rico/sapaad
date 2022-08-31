import React, { forwardRef } from "react";
import SearchInput from "../shared/SearchInput";
import Table from "../table/Table";

const WalkinSearchSection = forwardRef((props, ref) => {
  const { step } = props;
  const disableBlur = "z-[9997] relative flex-1 flex";
  return (
    <div
      className="border border-gray-300
    flex flex-col flex-1 items-stretch
    bg-mainBg
    "
    >
      <div
        className={"p-2 bg-gray-200 " + (step == 4 && disableBlur)}
        ref={ref}
      >
        <SearchInput placeholder="Search Menu Item" className="rounded" />
      </div>
      <div className="flex-1">
        <Table>
          <thead>
            <tr>
              <Th scope="col">Item Name</Th>
              <Th>QTY</Th>
              <Th>Price</Th>
              <Th>Subtotal</Th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
      <div
        className="flex justify-end 
        px-3 py-1 border-t border-gray-300
        text-sm
      "
      >
        <div className="w-1/2">
          <div className="justify-between flex">
            <span>Sub Total:</span>
            <span>0</span>
          </div>
          <div className="justify-between flex">
            <span>Total:</span>
            <span className="text-xl font-bold">SAR 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default WalkinSearchSection;

function Th({ children }) {
  return (
    <th className="text-xs font-bold text-gray-500 text-left px-2 py-1 w-full">
      {children}
    </th>
  );
}
