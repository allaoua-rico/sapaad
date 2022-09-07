import React, { forwardRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import SearchInput from "../shared/SearchInput";
import NumPad from "react-numpad";
import tw from "twin.macro";
import { RiDeleteBin6Line } from "react-icons/ri";
import CheeseBurgerTreeView from "./CheeseBurgerTreeView";
import { useResizeDetector } from "react-resize-detector";
import { billTotal, itemSubtotal, RIAL } from "../../utils/functions";

const WalkinSearchSection = forwardRef((props, ref) => {
  const { height, ref: containerRef } = useResizeDetector();

  const { step, list, setList, removeFromArray, handleOpenItemDialog } = props;
  const disableBlur = "z-[9997] relative flex-1 flex";

  const changeQty = (newValue, index) => {
    const listCopy = [...list];
    listCopy[index].qty = newValue;
    setList(listCopy);
  };
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
      {/* List */}
      <div
        className="flex-1 w-full overflow-y-auto"
        ref={containerRef}
        style={{ maxHeight: height, height }}
      >
        <table
          className="min-w-full table-auto
          border-collapse"
        >
          <thead>
            <tr>
              <Th scope="col">Item Name</Th>
              <Th>QTY</Th>
              <Th>Price</Th>
              <Th>Subtotal</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {React.Children.toArray(
              list.map((item, index) => (
                <tr onClick={() => handleOpenItemDialog(index)}>
                  <td className="py-2">
                    <div className="ml-2">
                      <button className="text-blue-500 font-medium">
                        {item.name}
                      </button>
                      {item.name == "Cheese Burger" && (
                        <CheeseBurgerTreeView item={item} />
                      )}
                    </div>
                  </td>
                  <td className="p-2 text-gray-500 font-semibold">
                    <QtyModifier
                      qty={item.qty}
                      changeQty={(newValue) => changeQty(newValue, index)}
                    />
                  </td>
                  <td className="p-2 text-gray-500 font-semibold">
                    {item.price}
                  </td>
                  <td className="p-2 text-gray-500 font-semibold text-right">
                    {itemSubtotal(item) * item.qty}
                  </td>
                  <td className="p-2 text-gray-500 font-semibold my-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromArray(index);
                      }}
                      className="flex items-center"
                    >
                      <RiDeleteBin6Line className="text-xl fill-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Bottom section */}
      <div
        className="flex justify-end 
        px-3 py-1 border-t border-gray-300
        text-sm
        "
      >
        <div className="w-1/2">
          <div className="justify-between flex">
            <span>Sub Total:</span>
            <span>{RIAL(billTotal(list))}</span>
          </div>
          <div className="justify-between flex">
            <span>Total:</span>
            <span className="text-xl font-bold">{RIAL(billTotal(list))}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WalkinSearchSection;

function Th({ children }) {
  return (
    <th
      className="text-xs font-bold text-gray-500 
    first:text-left
     px-2 py-1 w-full"
    >
      {children}
    </th>
  );
}

function QtyModifier({ qty, changeQty }) {
  return (
    <div className="flex">
      <button
        className="bg-gray-300
       w-8 h-6 
       flex justify-center items-center my-auto
     text-gray-800 
       rounded-l-lg 
       "
        onClick={() => {
          qty > 1 && changeQty(qty - 1);
        }}
      >
        <FaMinus />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <Input>
          <NumPad.Number
            onChange={(newValue) => changeQty(newValue)}
            value={qty}
            decimal={2}
          />
        </Input>
      </div>
      <button
        className="bg-gray-300
          w-8 h-6 
          flex justify-center items-center my-auto
        text-gray-800 
          rounded-r-lg 
          "
        onClick={() => changeQty(qty + 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
}

const Input = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${tw`w-12 text-center p-[6px] rounded border border-gray-300 outline-none
  bg-white overflow-hidden 
  `}
`;
