import React from "react";

const Table = ({ children }) => {
  return (
    <table className="table-fixed min-w-[55rem] w-full">
      {children}
    </table>
  )
}

export default Table;