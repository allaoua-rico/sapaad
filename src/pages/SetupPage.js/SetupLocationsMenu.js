import { Tabs } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import CurrencyInput from "react-currency-input-field";
import { useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import FilledButton from "../../components/shared/buttons/FilledButton";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import { AntSwitch } from "../../components/shared/fields/AntSwitch";
import MuiSelectFieldFormikValueLabel from "../../components/shared/fields/MuiSelectFieldFormikValueLabel";
import SearchInput from "../../components/shared/SearchInput";
import a11yProps from "../../components/shared/utils/MuiAntTabs/a11yProps";
import AntTab from "../../components/shared/utils/MuiAntTabs/AntTab";
import TabPanel from "../../components/shared/utils/MuiAntTabs/TabPanel";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import TBR from "../../components/table/TBR";
import TH from "../../components/table/TH";
import { useFirstRender } from "../../utils/hooks";

export default function SetupLocationsMenu() {
  const [{ crumbs }] = useOutletContext();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Menu</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <div className="flex items-center justify-between">
        <div className="text-gray-500">
          <h2 className="text-xl">Menu for Restaurant</h2>
          <p>Assign menu items to this branch or over-ride default prices.</p>
        </div>
        <div>
          <SearchInput placeholder="Search Dish" />
        </div>
      </div>
      <div
        className="flex items-center
      py-5
      "
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          orientation="vertical"
          sx={{ mb: "auto" }}
        >
          <AntTab label="Additional Surcharges" {...a11yProps(0)} />
          <AntTab label="Order Discount" {...a11yProps(1)} />
          <AntTab label="Line Discount" {...a11yProps(2)} />
        </Tabs>
        <div className="px-3 self-stretch flex-1">
          <TabPanel value={value} index={0}>
            <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
              <Beverages />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
              <Burgers />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
              <Pizzas />
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

function Beverages() {
  const rows = [
    {
      name: "Bottled Water",
      branchPrice: "3.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Coke",
      branchPrice: "5.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Pepsi",
      branchPrice: "5.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
  ];
  return (
    <div>
      <H3>Beverages</H3>
      <MenuTable rows={rows} />
    </div>
  );
}

function Burgers() {
  const rows = [
    {
      name: "Cheese Burger",
      branchPrice: "10.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Grilled Beef Burger",
      branchPrice: "15.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Grilled Chicken Burger",
      branchPrice: "15.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
  ];
  return (
    <div>
      <H3>Burgers</H3>
      <MenuTable rows={rows} />
    </div>
  );
}

function Pizzas() {
  const rows = [
    {
      name: "Chicken Pizza",
      branchPrice: "5.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Margherita Large",
      branchPrice: "2.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Margherita Medium",
      branchPrice: "2.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Margherita Pizza",
      branchPrice: "2.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Margherita XXl",
      branchPrice: "2.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
    {
      name: "Veg Pizza",
      branchPrice: "5.0",
      taxRate: "Select",
      tax: "0",
      pos: true,
    },
  ];
  return (
    <div>
      <H3>Pizzas</H3>
      <MenuTable rows={rows} />
    </div>
  );
}

function H3({ children }) {
  return (
    <>
      <h3 className="text-2xl font-semibold">{children}</h3>
      <hr className="my-5" />
    </>
  );
}

function MenuTable({ rows }) {
  const [pos, setPos] = useState(false);
  const formRef = useRef();
  const firstRender = useFirstRender();
  useEffect(() => {
    !firstRender &&
      rows.map((row, index) =>
        formRef.current?.setFieldValue(`rows[${index}].pos`, pos)
      );
  }, [pos]);
  return (
    <Formik
      innerRef={formRef}
      initialValues={{ rows }}
      // onSubmit={handleSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className="text-sm">
          <table className="table-fixed" style={{ width: "100%" }}>
            <thead>
              <tr>
                <TH style={{ width: "40%" }}>Item Name </TH>
                <TH style={{ width: "15%" }}>Branch Price </TH>
                <TH style={{ width: "15%" }}>Tax Rate </TH>
                <TH style={{ width: "15%" }}>Tax</TH>
                <TH style={{ width: "15%" }}>
                  <div className="flex flex-col items-center">
                    <div>POS</div>
                    <AntSwitch
                      checked={pos}
                      onChange={(e) => setPos(e.target.checked)}
                    />
                  </div>
                </TH>
              </tr>
            </thead>
            <tbody>
              {props.values.rows.map((row, index) => (
                <TBR>
                  <td>{row.name}</td>
                  <td>
                    <CurrencyInput
                      id="input-example"
                      name="input-name"
                      placeholder="Please enter a number"
                      className="outline-none text-right border p-1 w-full"
                      value={row.branchPrice}
                      fixedDecimalLength={2}
                    />
                  </td>
                  <td>
                    <MuiSelectFieldFormikValueLabel
                      variant="outlined"
                      value={row.taxRate}
                      formik={props}
                      defaultValue={{ text: "Select Rate", value: "Select" }}
                      sx={{
                        fontSize: "12px",
                        "& .MuiOutlinedInput-input": {
                          p: "6px",
                        },
                      }}
                    />
                  </td>
                  <td>
                    <CurrencyInput
                      id="input-example"
                      name="input-name"
                      placeholder="Please enter a number"
                      className="outline-none text-right border p-1 w-full"
                      value={row.tax}
                      fixedDecimalLength={2}
                      disabled
                    />
                  </td>
                  <td className="flex justify-center">
                    <div className="pt-2">
                      <AntSwitch
                        checked={row.pos}
                        value={row.pos}
                        onChange={(e) =>
                          props.setFieldValue(
                            `rows[${index}].pos`,
                            e.target.checked
                          )
                        }
                      />
                    </div>
                  </td>
                </TBR>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end pt-10">
            <div>
              <FilledButton onClick={props.submitForm} text="Save" />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
