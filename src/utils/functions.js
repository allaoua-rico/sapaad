import currency from "currency.js";
import { isArray } from "lodash";
import { formatValue } from "react-currency-input-field";

export function displayFormikErrors(props) {
  return (
    <div>
      {props?.errors &&
        Object.keys(props?.errors)?.map((field) => {
          if (!Array.isArray(props?.errors[field])) {
            return (
              <div>
                <span className="text-red-500 ">{field}</span>:{" "}
                <span>{props?.errors[field]}</span>
              </div>
            );
          } else {
            return (
              <div>
                <span className="text-red-500 ">{field}</span>:{" "}
                <span>
                  {" "}
                  {props?.errors[field].map((err) => (
                    <div>{err}</div>
                  ))}
                </span>
              </div>
            );
          }
        })}
    </div>
  );
}

export function displayFormikFieldErrors(props, field) {
  const fieldErrors = props?.errors[field];
  let component = null;
  if (fieldErrors) {
    if (!Array.isArray(fieldErrors)) {
      component = (
        <div>
          <span>{props?.errors[field]}</span>
        </div>
      );
    } else {
      component = (
        <div>
          <span className="text-gray-500 ">{field}</span>:{" "}
          <span>
            {props?.errors[field].map((err) => (
              <div>{err}</div>
            ))}
          </span>
        </div>
      );
    }
    return <div>{component}</div>;
  } else {
    return null;
  }
}

export const RIAL = (value) =>
  currency(value, {
    symbol: "﷼",
    decimal: ",",
    separator: ".",
    precision: 2,
  }).format();

export const billTotal = (list) => {
  return list.reduce((total, { price, choices }) => {
    let addOns = 0;
    Object.keys(choices)?.map((key) => {
      addOns += isArray(choices[key])
        ? choices[key].reduce(
            (total, { price }) => (price ? total + parseInt(price) : total),
            0
          )
        : 0;
    });
    return total + parseInt(price) + addOns;
  }, 0);
  // return list.reduce((total, { price }) => total + parseInt(price), 0);
};

export const itemSubtotal = ({ price, choices }) => {
  let addOns = 0;
  choices &&
    Object.keys(choices)?.map((key) => {
      addOns += isArray(choices[key])
        ? choices[key].reduce(
            (total, { price }) => (price ? total + parseInt(price) : total),
            0
          )
        : 0;
    });
  return parseInt(price) + addOns;
};

export const formatToDecimals = (value) => {
  const value2 = formatValue({
    value: value + "",
    groupSeparator: ",",
    decimalSeparator: ".",
    decimalScale: 2,
  });
  return value2;
};
