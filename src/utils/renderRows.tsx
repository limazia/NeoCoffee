import React from "react";
import { RenderRows } from "./interfaces";

export const renderRows: React.FC<RenderRows> = ({ dataArray, component }) => {
  return (
    <>
      {dataArray.map(({ category, products }, index) => (
        <React.Fragment key={index}>
          {React.createElement(component, { category, products })}
        </React.Fragment>
      ))}
    </>
  );
};
