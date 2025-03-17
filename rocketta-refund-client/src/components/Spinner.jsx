import {ClipLoader} from "react-spinners";
import React from 'react'

const override = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin: "100px auto"
}

const Spinner = ({ loading, size=50}) => {
  return (
    <ClipLoader
        color="#1e40af"
        loading={loading}
        cssOverride={override}
        size={size}
    />
  )
}

export default Spinner