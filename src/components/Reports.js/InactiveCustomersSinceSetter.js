import React from "react";
import moment from "moment";

export default function InactiveCustomersSinceSetter({ setSince, since }) {
  const list = [];
  for (let index = 1; index <= 6; index++) {
    list.push({
      date: moment().subtract(index, "months").format(),
      text: `${index} ${index == 1 ? "month" : "months"}`,
    });
  }

  return (
    <div className="bg-white">
      <div className="font-medium py-[10px] px-4">
        Customers who haven't ordered in:
      </div>
      {React.Children.toArray(
        list.map((date) => (
          <button
            onClick={() => setSince(date)}
            className={
              "py-[10px] px-4 " +
              (since.text == date.text && "bg-gray-200 shadow-inner")
            }
          >
            {date.text}
          </button>
        ))
      )}
    </div>
  );
}
