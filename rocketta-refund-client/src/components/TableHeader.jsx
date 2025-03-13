import React from "react";
import TableRow from "./TableRow";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = () => {
  return (
    <TableRow>
        <TableHeaderCell>FirstName</TableHeaderCell>
          <TableHeaderCell>LastName</TableHeaderCell>
        <TableHeaderCell>Contact Email</TableHeaderCell>
        <TableHeaderCell>Amount Lost</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell></TableHeaderCell>
    </TableRow>
  )
}

export default TableHeader;