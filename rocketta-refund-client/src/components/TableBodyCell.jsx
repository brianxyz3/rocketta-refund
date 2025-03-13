import React from "react";

const TableBodyCell = ({ children }) => {
  return (
    <td className="text-sm md:text-base border-x border-collapse border-x-black px-2 py-4 md:px-3 md:py-5 text-nowrap">{children}</td>
  )
}

export default TableBodyCell;