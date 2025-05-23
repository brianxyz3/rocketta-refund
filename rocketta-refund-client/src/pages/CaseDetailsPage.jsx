import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getFileData, getFileForUser, updateCaseFile } from "../controller/apiController";
import { ArrowBack } from "@mui/icons-material";
import { useAuth } from "../authContext";
import { toast } from "react-toastify";
import CommentForm from "../components/CommentForm";
import Loader from "../components/Loader";
import UserCaseStatusMessage from "../components/UserCaseStatusMessage";


const CaseDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {currentUser, userLoggedIn} = useAuth();
    const [fileData, setFileData] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdatingServer, setIsUpdatingServer] = useState(false);

    const headerObj = {
        authorization: currentUser.token,
        id: currentUser.id,
        admin: currentUser.isAdmin,
        "Content-Type": "application/json",
    }

    useEffect(() => {                
        if (!userLoggedIn) navigate("/");
        const getFile = async () => {
            try{
                if(!currentUser.isAdmin) {
                    const userId = currentUser.id
                    const res = await getFileForUser(headerObj, userId, id);
                    return setFileData({ ...res });
                }
                const res = await getFileData(headerObj, id);
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
        setIsUpdatingServer(true);
        try{
        const res = await updateCaseFile(id, {isActiveInvestigation: true}, headerObj).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        setFileData((currData) => (
            {...currData, isActiveInvestigation: true}
        ));
        toast.success("Case is now an active investigation");
        } catch (err) {
            return console.log(err);
        } finally {
            setIsUpdatingServer(false);
        }
    }
   
    const closeCase = async () => {
        setIsUpdatingServer(true);
        try{
            const res = await updateCaseFile(id, { isActiveInvestigation: false, isClosed: true }, headerObj).catch((err) => console.log(err));
            if (!res.status == 200) toast.error("Something went wrong. Try again.");
            setFileData((currData) => (
                { ...currData, isActiveInvestigation: false, isClosed: true }
            ));
            toast.success("Another Case Closed, Great Work");
        } catch(err) {
            return console.log(err);
        } finally {
            setIsUpdatingServer(false);
        }
        
    }
    
    const reOpenCase = async () => {
        setIsUpdatingServer(true);
        try{
            const res = await updateCaseFile(id, { isActiveInvestigation: true, isClosed: false }, headerObj).catch((err) => console.log(err));
            if (!res.status == 200) toast.error("Something went wrong. Try again.");
            setFileData((currData) => (
                { ...currData, isActiveInvestigation: true, isClosed: false }
            ));
            toast.success("Case ReOpened, Getting it right is what matters most");
        } catch(err) {
            return console.log(err);
        } finally {
            setIsUpdatingServer(false);
        }
    }
    
  return (
    <main>
          { userLoggedIn &&
        <>
      <section>
            <div className="container m-auto py-6 px-6">
                <Link
                    to={`${currentUser.isAdmin ? "/cases" : "/userHistory"}`}
                    className="text-indigo-500 hover:text-indigo-600 flex items-center hover:scale-x-105 duration-200"
                >
                    <ArrowBack className="mr-2" /> Back to All Case Files
                </Link>
            </div>
        </section>
        {isLoading ? (<Loader loading={isLoading} size={40} />) :                
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

                    {currentUser.isAdmin 
                    // Render for Admin Use Only
                    ? <aside className="bg-gray-200 rounded-lg">
                        {isUpdatingServer ? (<Loader loading={isUpdatingServer} size={10} />) :
                          <div className="flex m-6 text-white font-bold gap-1 xl:gap-2 md:flex-wrap lg:flex-nowrap">
                              {!fileData.isActiveInvestigation && !fileData.isClosed && <button className="bg-green-500 w-1/2 md:w-full py-1 px-2 rounded-lg" onClick={openInvestigation}>Activate Case</button>}
                              {fileData.isActiveInvestigation && !fileData.isClosed &&  <p className="text-black text-sm bg-yellow-400 rounded-sm flex items-center justify-center p-0.5 w-full">Ongoing Investigation</p>}
                            {fileData.isClosed ?
                                  <button className="bg-green-500 w-1/2 md:w-full py-0.5 px-1.5 rounded-lg" onClick={reOpenCase}>ReOpen Case</button>
                                : <button className="bg-red-600 w-1/2 md:w-full py-0.5 px-1.5 rounded-lg" onClick={closeCase}>Close Case</button>
                            }
                        </div>
                        }
                            {/*Add Case Officer's Comment  */}
                            <div className="bg-gray-300 p-3 rounded-lg shadow-md mx-3 mt-6">
                              <CommentForm id={id} updateComments={updateComments} isActiveInvestigation={fileData.isActiveInvestigation} user={currentUser}/>
                            </div>

                            {/* List Case Officer's Comments */}
                            <div className="bg-white max-h-64 overflow-auto p-2 mx-1 rounded-lg shadow-md mt-4">
                              <h2 className="text-lg my-2 text-[#0f3bc0]">Admin's Comments</h2>
                                <ol className="flex flex-col gap-2">
                                    {comments.map((item, idx) => (
                                        <li key={idx} className="text-gray-800">-- {item.comment}</li>
                                    ))}
                                    <li className="mt-2 text-gray-500 text-xs">new update...</li>
                                </ol>
                            </div>
                    </aside>
                    // Render for Client use
                    : <aside className="h-fit flex flex-col gap-6 sticky top-20">
                                      <div className="p-6 bg-gradient-to-t to-[#112152] from-white via-[#ccd6f9] rounded-lg">
                                <div className="mx-auto text-black">
                                    {fileData.isActiveInvestigation ? 
                                    <UserCaseStatusMessage style="text-yellow-300" title="Currently Under Investigation" msg="Our best investigators and financial experts are working tirelessly on your case. A rockettarefund staff will be in constant communication with you to keep you up to date on the progress of the investigation."/>
                                    : fileData.isClosed ?
                                    <UserCaseStatusMessage style="text-green-300" title="Case Closed!" msg="We hope rocketarefund was able to help you find closure. Our staff appreciates your cooperation. Thanks for choosing Rockettarefund. Stay Safe Out There!"/>
                                    : <UserCaseStatusMessage style="text-red-200" title="We'll Attend to You Soon" msg="Kindly wait, a staff member will be in contact with you soon. A rockettarefund staff will never ask for your private infomation."/>}
                                </div>
                            </div>
                            {/* <div>
                                {!fileData.isClosed && <button className="bg-[#0f3bc0] font-bold text-stone-50 w-1/2 md:w-full py-1 rounded-lg" onClick={closeCase}>Edit Case</button>}
                            </div> */}
                        </aside>
                    }
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