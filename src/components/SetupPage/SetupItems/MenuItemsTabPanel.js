import { BsCheckCircleFill, BsChevronDoubleDown } from "react-icons/bs";
import Collapse from "@mui/material/Collapse";
import { MdEdit } from "react-icons/md";
import { HiFilter } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import SearchInput from "../../shared/SearchInput";
import MainH1 from "../../shared/wrappers/Reports/MainH1";
import DropDownFilter from "../../shared/Select/DropDownFilter";
import TH from "../../table/TH";
import TBR from "../../table/TBR";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuItemsTabPanel({ setOpenAdd }) {
  return (
    <div className="py-10">
      <div className="pb-4">
        <MainH1>Menu</MainH1>
      </div>
      <div className="grid grid-cols-4 gap-x-5">
        <div className="col-span-3">
          <div className="flex items-center space-x-5">
            <DropDownFilter
              name={<HiFilter />}
              filters={[
                { text: "Regular", value: "Regular" },
                { text: "Grouped", value: "Grouped" },
                { text: "Disabled", value: "Disabled" },
              ]}
            />
            <SearchInput placeholder="Search Menu item" />
          </div>
          <div className="py-5">
            <table className="table-fixed" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <TH style={{ width: "70%" }}>Product Information</TH>
                  <TH style={{ width: "15%" }}>Price (SAR)</TH>
                  <TH style={{ width: "15%" }}></TH>
                </tr>
              </thead>
              <tbody className="divide-y">
                {React.Children.toArray(
                  list.map((item) => {
                    const { name, description, price, img, active, group } =
                      item;
                    return (
                      <>
                        <TBR className={!active && "bg-[#fcf8e3]"}>
                          <ProductInfoTd item={item} />
                          <td>{price}</td>
                          <td>
                            <EditItem item={item} />
                          </td>
                        </TBR>
                        {group && <GroupedItemCollapse item={item} />}
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1">
          <MenuRightSection />
          <div className="flex justify-center pt-5">
            <button
              onClick={() => setOpenAdd(true)}
              className="text-xs text-blue-500 hover:underline"
            >
              + Add Menu Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductInfoTd({ item }) {
  const { name, description, price, img, active, group } = item;
  return (
    <div className="flex items-center space-x-3">
      <div className="border-2 rounded flex">
        {(group || !active) && (
          <div
            className="w-[45px] h-[45px] absolute"
            style={{
              backgroundImage: "url(/item_badge.png)",
              backgroundPositionY: !active ? "-147px" : group && "-96px",
            }}
          />
        )}
        <img
          className="w-24"
          src={img ? img : "/sapaadDefaultItem.jpg"}
          alt="itemImg"
        />
      </div>
      <div className="text-gray-400 text-left">
        <div className="font-thin">{name}</div>
        <div className="text-sm font-thin">
          {description ? description : "Click EDIT to add description."}
        </div>
      </div>
    </div>
  );
}

function GroupedItemCollapse({ item }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <tr>
      <td colspan={3}>
        <div className="w-full flex flex-col">
          <button
            className="w-full bg-gray-100 hover:bg-gray-200 h-6"
            onClick={handleClick}
          >
            <BsChevronDoubleDown
              className={
                "mx-auto transition-all duration-150 " +
                (open ? "rotate-180" : "")
              }
            />
          </button>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <table className="table-fixed" style={{ width: "100%" }}>
              <thead></thead>
              <tbody className="divide-y">
                {item.groups.map((item) => {
                  const { name, description, price, img, active, group } = item;
                  return (
                    <>
                      <TBR className={!active && "bg-[#fcf8e3]"}>
                        <td style={{ width: "10%" }}></td>
                        <td style={{ width: "60%" }}>
                          <ProductInfoTd item={item} />
                        </td>
                        <td style={{ width: "15%" }}>{price}</td>
                        <td style={{ width: "15%" }}>
                          <EditItem item={item} />
                        </td>
                      </TBR>
                      {group && <GroupedItemCollapse />}
                    </>
                  );
                })}
              </tbody>
            </table>
          </Collapse>
        </div>
      </td>
    </tr>
  );
}

function EditItem({ item }) {
  const { active } = item;
  return (
    <div>
      <div
        className="bg-gray-100 flex justify-center items-center
        p-[10px] mb-[7px] rounded
        "
      >
        {active ? (
          <BsCheckCircleFill className="fill-[#5fcb81] w-5 h-5" />
        ) : (
          <div
            className="bg-red-500 rounded-full 
            flex justify-center items-center 
            p-1 w-5 h-5
            "
          >
            <ImCross className="fill-white w-5 h-5" />
          </div>
        )}
      </div>
      <Link
        to="/setup/setup_items/1811286/edit"
        className="bg-[#5fcb81] rounded py-1
          w-full flex justify-center
          text-sm text-white 
          "
      >
        Edit
      </Link>
    </div>
  );
}

function MenuRightSection() {
  return (
    <div
      className="rounded border 
       text-sm text-blue-500"
    >
      <div
        className="text-xs font-semibold text-gray-500
          py-1 px-[15px] bg-gray-100 border-b"
      >
        MENU CATEGORIES
      </div>
      {categories.map((cat) => (
        <CategoryButton category={cat} />
      ))}
    </div>
  );
}

function CategoryButton({ category }) {
  const { name } = category;
  return (
    <div
      className="flex items-center
   hover:bg-gray-200 bg-gray-100 space-x-1"
    >
      <button
        className="
        py-1 px-[15px]
        w-full text-left"
      >
        {name}
      </button>
      <button className="pr-1 hover:text-gray-600">
        <MdEdit className="w-4 h-4" />
      </button>
    </div>
  );
}

const categories = [
  { name: "Burger" },
  { name: "Pizzas" },
  { name: "Beverages" },
];

const list = [
  {
    name: "Bottled Water",
    description: null,
    price: "3.00",
    img: null,
    active: true,
  },
  {
    name: "Coke",
    description: null,
    price: "5.0",
    img: null,
    active: true,
  },
  {
    name: "Pepsi",
    description: null,
    price: "5.0",
    img: null,
    active: true,
  },
  {
    name: "Cheese Burger",
    description: null,
    price: "10.00",
    img: null,
    active: true,
  },
  {
    name: "Chicken Pizza",
    description: null,
    price: "5.00",
    img: null,
    active: true,
  },
  {
    name: "Grilled Beef Burger",
    description: null,
    price: "15.00",
    img: null,
    active: false,
  },
  {
    name: "Margherita Pizza",
    description: null,
    price: null,
    img: null,
    active: true,
    group: true,
    groups: [
      {
        name: "Margherita Large",
        description: null,
        price: "2.0",
        img: null,
        active: true,
      },
      {
        name: "Margherita Medium",
        description: null,
        price: "2.0",
        img: null,
        active: true,
      },
      {
        name: "Margherita XXl",
        description: null,
        price: "2.0",
        img: null,
        active: true,
      },
    ],
  },
];
