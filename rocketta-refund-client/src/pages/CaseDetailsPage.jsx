import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getFileData, updateCaseFile } from "../controller/apiController";
import { ArrowBack } from "@mui/icons-material";
import { useAuth } from "../authContext";
import { toast } from "react-toastify";
import CommentForm from "../components/CommentForm";
import Loader from "../components/Loader";


const CaseDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [fileData, setFileData] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const headerObj = {
        authorization: currentUser?.token,
        id: currentUser?.id,
        admin: currentUser?.isAdmin,
        "Content-Type": "application/json",
    }

    useEffect(() => {        
        if(!currentUser?.isAdmin) navigate("/");
        const getFile = async () => {
            try{
            const res = await getFileData(id, headerObj);
            setComments([...res.adminComment]);            
            return setFileData({...res});
            } catch(err){
                return console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        getFile();
    }, []);

    

    const updateComments = (newComment) => {
        setComments((currData) => (
            [...currData, { ...newComment }]
        ))
    }
    
    const openInvestigation = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: true}, headerObj).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        setFileData((currData) => (
            {...currData, isActiveInvestigation: true}
        ));
        toast.success("Case is now an active investigation");
    }
    
    const closeCase = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: false, isClosed: true}, headerObj).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        setFileData((currData) => (
            { ...currData, isActiveInvestigation: false, isClosed: true }
        ));
        toast.success("Another Case Closed, Great Work");
    }
    
    const reOpenCase = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: true, isClosed: false}, headerObj).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        setFileData((currData) => (
            { ...currData, isActiveInvestigation: true, isClosed: false }
        ));
        toast.success("Case ReOpened, Getting it right is what matters most");
    }
    
  return (
    <main>
        {currentUser.isAdmin &&
        <>
      <section>
            <div className="container m-auto py-6 px-6">
                <Link
                    to="/cases"
                    className="text-indigo-500 hover:text-indigo-600 flex items-center hover:scale-x-105 duration-200"
                >
                    <ArrowBack className="mr-2" /> Back to All Case Files
                </Link>
            </div>
        </section>
        {isLoading ? (<Loader loading={isLoading} />) :                
            <section className="bg-indigo-50">
                <div className="container m-auto py-7 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <div>
                      <div
                          className="bg-white p-3 md:p-6 rounded-lg shadow-md"
                       >
                            <h1 className="text-xl md:text-2xl text-[#0f3bc0] font-bold mb-4">
                                Client's Personal Details
                            </h1>
                            <div className="text-gray-500 text-sm md:text-base mb-2">First Name: <span className="text-black inline-block text-base md:text-lg">{fileData.firstName}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Last Name: <span className="text-black inline-block text-base md:text-lg">{fileData.lastName}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Contact Email: <span className="text-black inline-block text-base text-wrap md:text-lg">{fileData.contactEmail}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Contact Phone: <span className="text-black inline-block text-base md:text-lg">{fileData.contactPhone || "Nil"}</span></div>
                      </div>

                      <div className="bg-white p-3 md:p-6 rounded-lg shadow-md mt-6">
                              <h3 className="text-[#0f3bc0] text-lg font-bold mb-6">
                              Case Description
                          </h3>

                          <p className="mb-4">
                              {fileData.description || "None"}
                          </p>

                              <h3 className="text-[#0f3bc0] text-lg font-bold mb-2">Amount Lost</h3>

                          <p className="mb-4">{fileData.lostAmount}</p>
                      </div>
                      </div>
                        {/* Sidebar */}
                      <aside className="bg-gray-200 rounded-lg">
                          <div className="flex m-6 text-white font-bold gap-1 xl:gap-2 md:flex-wrap lg:flex-nowrap">
                              {!fileData.isActiveInvestigation && !fileData.isClosed && <button className="bg-green-500 w-1/2 md:w-full py-1 px-2 rounded-lg" onClick={openInvestigation}>Activate Case</button>}
                              {fileData.isActiveInvestigation && !fileData.isClosed &&  <p className="text-black text-sm bg-yellow-400 rounded-sm flex items-center justify-center p-0.5 w-full">Ongoing Investigation</p>}
                            {fileData.isClosed ?
                                  <button className="bg-green-500 w-1/2 md:w-full py-0.5 px-1.5 rounded-lg" onClick={reOpenCase}>ReOpen Case</button>
                                : <button className="bg-red-600 w-1/2 md:w-full py-0.5 px-1.5 rounded-lg" onClick={closeCase}>Close Case</button>
                            }
                        </div>
                            {/*Add Agent's Comment  */}
                            <div className="bg-gray-300 p-3 rounded-lg shadow-md mx-3 mt-6">
                              <CommentForm id={id} updateComments={updateComments} isActiveInvestigation={fileData.isActiveInvestigation} user={currentUser}/>
                            </div>

                            <div className="bg-white max-h-64 overflow-auto p-2 mx-1 rounded-lg shadow-md mt-4">
                              <h2 className="text-lg my-2 text-[#0f3bc0]">Admin's Comments</h2>
                                <ol className="flex flex-col gap-2">
                                    {comments?.map((item, idx) => (
                                        <li key={idx} className="text-gray-800">-- {item.comment}</li>
                                    ))}
                                    <li className="mt-2 text-gray-500 text-xs">new update...</li>
                                </ol>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        }
          </>
        }
      </main>
  )
}

export default CaseDetailsPage;