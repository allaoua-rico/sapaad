import React from "react";
import { isArray } from "lodash";
import { CgCornerDownRight } from "react-icons/cg";
import { RIAL } from "../../utils/functions";

export default function CheeseBurgerTreeView({ item }) {
  return (
    <div className="space-y-1 pt-2">
      {React.Children.toArray(
        Object.keys(item.choices)?.map((key, index) => {
          const choice = item?.choices[key];
          return isArray(choice) ? (
            choice.map((choice, index2) => (
              <div className="flex items-center space-x-1">
                <CgCornerDownRight />
                <span>{choice.name}</span>
                {choice.price && (
                  <span className="text-xs text-blue-500 whitespace-nowrap">
                    +{RIAL(parseInt(choice.price))}
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="flex items-center space-x-1">
              <CgCornerDownRight />
              <span>{choice.name}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
