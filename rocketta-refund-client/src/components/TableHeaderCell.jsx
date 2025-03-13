import React from "react";

const TableHeaderCell = ({children}) => {
  return (
      <th className="text-sm border border-t-0 md:text-base text-left px-2 py-3 md:px-3 md:py-4 border-collapse border-x-black border-b-black">{children}</th>
  )
}

export default TableHeaderCell;