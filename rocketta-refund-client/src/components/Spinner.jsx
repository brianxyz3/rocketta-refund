import {ClipLoader} from "react-spinners";
import React from 'react'

const override = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin: "100px auto"
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color="#1e40af"
        loading={loading}
        cssOverride={override}
        size={50}
    />
  )
}

export default Spinner