import React from "react";

const TableRow = ({ children, style }) => {
  return (
    <tr className={`border-s-4 ${style}`}>
      {children}
    </tr>
  )
}

export default TableRow;