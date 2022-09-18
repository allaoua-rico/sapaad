import { Tabs } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { ImUpload3 } from "react-icons/im";
import { Link } from "react-router-dom";
import GreenButton from "../../components/shared/buttons/GreenButton";
import a11yProps from "../../components/shared/utils/MuiAntTabs/a11yProps";
import AntTab from "../../components/shared/utils/MuiAntTabs/AntTab";
import TabPanel from "../../components/shared/utils/MuiAntTabs/TabPanel";
import AddCategoryDialog from "../../components/SetupPage/SetupItems/AddCategoryDialog";
import MenuItemsTabPanel from "../../components/SetupPage/SetupItems/MenuItemsTabPanel";
import ModifiersTabPanel from "../../components/SetupPage/SetupItems/ModifiersTabPanel";

export default function SetupItems() {
  const [openAddCategory, setOpenAddCategory] = useState(false);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <AntTab label="Menu Items" {...a11yProps(0)} />
        <AntTab label="Modifiers" {...a11yProps(1)} />
        <div className="py-3 px-4 w-full flex justify-end space-x-2 flex-wrap">
          <button
            className="text-red-500 space-x-1
          flex items-center
          "
          >
            <HiRefresh />
            <span className="text-sm">Refresh currently in progress..</span>
          </button>
          <Link
            to="/setup/setup_items/1811286/upload"
            className="text-gray-600 text-sm 
            flex items-center space-x-1 bg-gray-100 hover:bg-gray-200
            py-1 px-2 border border-gray-300 rounded
            transition-all duration-200
            "
          >
            <ImUpload3 />
            <span>Upload Menus</span>
          </Link>
          <button
            onClick={() => setOpenAddCategory(true)}
            className="text-gray-600 text-sm 
            flex items-center space-x-1 bg-gray-100 hover:bg-gray-200
            py-1 px-2 border border-gray-300 rounded
            transition-all duration-200
            "
          >
            <FaPlus />
            <span>Add Menu Category</span>
          </button>
          <Link to="/setup/setup_items/new">
            <GreenButton>
              <FaPlus className="text-white" />
              <span>Ass New Menu Item</span>
            </GreenButton>
          </Link>
        </div>
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
          <MenuItemsTabPanel setOpenAdd={setOpenAddCategory} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ModifiersTabPanel />
      </TabPanel>
      <AddCategoryDialog open={openAddCategory} setOpen={setOpenAddCategory} />
    </div>
  );
}
