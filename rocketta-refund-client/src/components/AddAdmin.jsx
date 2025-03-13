import React from "react";

const AddAdmin = ({title, desc, descBtnText, toggleFunc, children}) => {
  return (
      <main className="flex flex-col justify-center h-dvh mt-16 mb-5 md:mt-20 md:mb-2">
          <div className="w-10/12 lg:w-1/2 flex items-center justify-center mx-auto md:justify-end border border-gray-400 rounded-lg px-2 sm:px-5 md:px-8">
              <div className="w-full mt-4 mb-6 mx-4 md:mx-8 md:mt-6 md:mb-8 lg:mx-12">
                  <div className="mb-8">
                      <h3 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-2">{title}</h3>
                      <div className="text-slate-600">{desc}
                          <button
                              onClick={toggleFunc}
                              className="ms-2 text-blue-400 hover:text-blue-500">
                              {descBtnText}
                          </button>
                      </div>
                  </div>
                  {children}
              </div>
              {/* <div className="bgLoginImg bg-cover bg-center hidden md:flex rounded-r-lg md:w-1/2 min-h-full"></div> */}
          </div>
      </main>
    )
}

export default AddAdmin;