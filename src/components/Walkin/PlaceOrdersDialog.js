import { Dialog } from "@mui/material";
import { MdErrorOutline } from "react-icons/md";
import { BiDialpad } from "react-icons/bi";
import { billTotal, formatToDecimals, RIAL } from "../../utils/functions";
import FilledButton from "../shared/buttons/FilledButton";
import Transition from "../shared/utils/Transition";
import NumPad from "react-numpad";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Formik } from "formik";
import MuiSelectFieldFormikValueLabel from "../shared/fields/MuiSelectFieldFormikValueLabel";
import OutlinedButton from "../shared/buttons/OutlinedButton";
import { TiDelete } from "react-icons/ti";

export default function PlaceOrdersDialog({ open, setOpen, list }) {
  const handleClose = () => {
    setOpen(false);
    setSuccessDialog(false);
    setPaymentError(false);
  };
  const [paid, setPaid] = useState(formatToDecimals(billTotal(list)));
  useEffect(() => setPaid(formatToDecimals(billTotal(list))), [list]);

  const [paymentError, setPaymentError] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const handleSubmit = () => {
    if (parseInt(paid) < billTotal(list)) {
      setPaymentError(true);
    } else {
      setSuccessDialog(true);
    }
  };
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { m: 0, maxWidth: "none", maxHeight: "100%" },
        my: "auto",
      }}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      {successDialog ? (
        <div>
          <div
            className="space-y-5 flex flex-col items-center 
            pb-20 pt-10 min-w-[600px]
            "
          >
            <div className="text-gray-400">CHANGE (SAR)</div>
            <div className="text-7xl text-[#2bb26e] ">
              {formatToDecimals(paid - billTotal(list))}
            </div>
          </div>
          <div className="flex justify-between pt-5 bg-gray-200 p-6 w-full flex-1">
            <div className="flex items-center text-gray-400 font-bold">
              Walk-in
            </div>
            <div className="flex items-center space-x-3">
              <FilledButton type="button" onClick={handleClose} text="Ok" />
            </div>
          </div>
        </div>
      ) : list.length ? (
        <Formik
          initialValues={{ method: "Cash" }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="flex flex-col items-center "
            >
              {/* <FormObserver setValues={setValues} setErrors={setErrors} /> */}
              <div
                className="space-y-5 flex flex-col items-center 
                pb-20 pt-10 
                "
              >
                <div className="text-gray-400">TOTAL AMOUNT (SAR)</div>
                <div className="text-7xl text-[#2bb26e] ">
                  {RIAL(billTotal(list))}
                </div>
              </div>
              {paymentError && (
                <PaymentBreakdown
                  list={list}
                  paid={paid}
                  setPaid={setPaid}
                  setPaymentError={setPaymentError}
                />
              )}
              <div
                className="flex justify-between
              p-3
              space-x-5"
              >
                <PaidInput paid={paid} setPaid={setPaid} />
                <MuiSelectFieldFormikValueLabel
                  variant="outlined"
                  name="method"
                  formik={props}
                  list={[
                    { text: "Mastercard", value: "Mastercard" },
                    { text: "Visa", value: "Visa" },
                  ]}
                  defaultValue={{ text: "Cash", value: "Cash" }}
                  sx={{
                    p: "4px",
                  }}
                />
              </div>
              <div className="flex justify-between pt-5 bg-gray-200 p-6 w-full flex-1">
                <div className="flex items-center text-gray-400 font-bold">
                  Walk-in
                </div>
                <div className="flex items-center space-x-3">
                  <OutlinedButton onClick={handleClose} text="Back" />
                  <FilledButton
                    type="button"
                    onClick={props.submitForm}
                    text="Pay"
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <div
          className="bg-gray-100 p-3 space-y-2
          flex flex-col items-center"
        >
          <div
            className="py-16 px-12
            flex flex-col items-center"
          >
            <MdErrorOutline className="w-20 h-20 text-orange-300" />
            <div className="text-3xl font-bold pb-5">
              No items in the bill !
            </div>
            <div className="text-gray-800 font-medium space-y-2">
              Please add an item to the bill to place an order!
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <FilledButton onClick={handleClose} text="Ok" />
          </div>
        </div>
      )}
    </Dialog>
  );
}

function PaymentBreakdown({ list, paid, setPaid, setPaymentError }) {
  const fixBreakdown = () => {
    setPaid(formatToDecimals(billTotal(list)));
    setPaymentError(false);
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xs font-semibold text-gray-500">PAYMENT BREAKDOWN</h3>
      <div className="border rounded w-[352px] shadow-md">
        <div
          className="font-bold 
        flex justify-between p-1
        "
        >
          <div></div>
          <div>Total: </div>
          <div>{RIAL(billTotal(list))}</div>
        </div>
        <div
          className="flex items-center justify-between
          bg-gray-100
        "
        >
          <div className="p-3">Cash</div>
          <div className="flex items-center">
            <span className="p-3">{RIAL(paid.slice(".")[0])}</span>
            <button
              onClick={() => fixBreakdown()}
              className="flex items-center"
            >
              <TiDelete className="text-xl fill-red-500 w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaidInput({ paid, setPaid }) {
  const [focused, setFocused] = useState(false);
  return (
    <NumPad.Number
      value={paid}
      onChange={(value) => {
        const format = formatToDecimals(value);
        console.log(format);
        setPaid(format);
      }}
    >
      <div className="flex items-center">
        <div
          className={`flex items-center
            my-auto py-2 px-3
            border rounded
          bg-white 
      `}
        >
          <button type="button">
            <BiDialpad className="w-12 h-12 text-gray-500" />
          </button>
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Please enter a number"
            className="outline-none text-right text-4xl"
            value={paid}
            fixedDecimalLength={2}
          />
        </div>
      </div>
    </NumPad.Number>
  );
}
