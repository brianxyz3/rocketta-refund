import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableBodyCell from "../components/TableBodyCell";
import "../stylesheets/casePage.css";
import { getCaseFiles } from "../controller/apiController";
import { useAuth } from "../authContext";
import { Link, useNavigate } from "react-router";
import { AccountCircle, Search } from "@mui/icons-material";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import StatsAnalysisCard from "../components/StatsAnalysisCard";
import Loader from "../components/Loader";
import { filesImg } from "../assets/images";


const CasesPage = () => {
    const [cases, setCases] = useState([]);
    const [showActiveCases, setShowActiveCases] = useState(false);
    const [showClosedCases, setShowClosedCases] = useState(false);
    const [showOpenCases, setShowOpenCases] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const headerObj = {
        authorization: currentUser?.token,
        id: currentUser?.id,
        admin: currentUser?.isAdmin,
        "Content-Type": "application/json",
    }

    useEffect(() => {
        if (!currentUser?.isAdmin) navigate("/");
        const onLoad = async () => {
            try{
                const files = await getCaseFiles(headerObj);
                return setCases(files);
            } catch (err) {
                return console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        onLoad();
    }, []);

    const closedCases = cases.filter((file) => {
        return file.isClosed === true;
    })

    const openCases = cases.filter((file) => {
        return file.isClosed === false;
    })

    const activeCases = cases.filter((file) => {
        return file.isActiveInvestigation === true;
    })

    const percentClosedCases = `${Math.floor((closedCases.length / cases.length) * 100) }%`;
    const percentActiveCases = `${Math.floor((activeCases.length / cases.length) * 100)}%`;

    const percentages = { "--closedCases": percentClosedCases, "--activeCases": percentActiveCases }

    const files = (filesArr) => (
    filesArr.map((caseFile) => (
        <TableRow key={caseFile._id}
        style={`${caseFile.isActiveInvestigation ? "border-yellow-300" : caseFile.isClosed && !caseFile.isActiveInvestigation ? "border-green-400" : "border-red-600"}`}
        >
            <TableBodyCell>{caseFile.firstName}</TableBodyCell>
            <TableBodyCell>{caseFile.lastName}</TableBodyCell>
            <TableBodyCell>{caseFile.contactEmail}</TableBodyCell>
            <TableBodyCell>{caseFile.lostAmount}</TableBodyCell>
            <TableBodyCell>{caseFile.description.slice(0, 90)}...</TableBodyCell>
            <TableBodyCell><Link className="bg-blue-700 p-2 text-white font-bold rounded-lg inline-block border hover:border-blue-800 hover:-translate-y-1 hover:bg-blue-200 hover:text-blue-800 duration-200" to={`/cases/${caseFile._id}`}>Open File</Link></TableBodyCell>
        </TableRow>
    )))

  return (
      <main className="overflow-hidden">
          <div className="cases_page">
              <div className="flex flex-wrap pt-5 m-1 sm:mx-3 table_title gap-y-4 items-start justify-evenly md:justify-between">
                  <div className="order-1">
                      <h1 className="text-3xl md:text-4xl">Case File Board</h1>
                      <p className="text-gray-600 text-sm">Overview of Company Peformance and Case Files </p>
                  </div>
                  
                  <div className="border order-3 md:order-2 rounded-md gap-2 text-gray-600 bg-white p-1 flex items-center w-auto lg:w-1/3">
                    <Search/>
                    <input type="text" className="w-full focus:outline-none"  placeholder="Search anything..." />
                  </div>

                  <div className="hidden sm:flex order-2 md:order-3 items-center gap-x-1 sm:gap-x-3">
                      <CircleNotificationsOutlined sx={{ fontSize: 20 }} className="hover:text-white hover:bg-black rounded-full"/>
                      <div className="flex items-center gap-x-0 sm:gap-x-1">
                          <AccountCircle sx={{ fontSize: 35 }} />
                          <div className="text-xs">
                              <p>{currentUser.email}</p>
                              <p className="text-gray-600">{currentUser.id}</p>
                          </div>
                      </div>
                  </div>
              </div>
                {isLoading ? (<Loader loading={isLoading} />) :
                    <StatsAnalysisCard style="content1 bg-gradient-to-bl to-blue-500 from-[#112152]">
                        <div className="w-1/2">
                            <img src={filesImg} alt="a vector image of a hand holding a briefcase" />
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="flex flex-col gap-y-2 text-2xl lg:text-3xl">
                                <h4>Total Users</h4>
                                <h4>2,000+</h4>
                                <p className="text-base md:text-lg"><span className="text-green-500">+2.4%</span> vs last month</p>
                            </div>
                        </div>
                    </StatsAnalysisCard>
                }

                {isLoading ? (<Loader loading={isLoading} />) :
                <StatsAnalysisCard style="content2 bg-gradient-to-br to-blue-500 from-[#112152]">
                    <div className="cases_analysis w-3/5 lg:w-1/2" style={percentages}>
                        <div className="pie_chart text-black flex items-center text-sm lg:text-base justify-center p-2 text-center">
                            <p>Closed <span className={`${parseInt(percentClosedCases) >= 50 ? "text-green-600" : "text-red-600"}`}>{percentClosedCases}</span> of Cases</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg md:text-xl lg:text-3xl">Submitted Cases</h4>
                        <h4 className="text-xl ps-2 lg:text-3xl">{cases.length}</h4>
                        <div className="text-xs sm:text-sm lg:text-lg">
                            <p className="ps-2">Keys</p>
                            <p className="ps-4 closed_case">{closedCases.length} Closed Cases</p>
                            <p className="ps-4 active_case">{activeCases.length} Active Cases</p>
                            <p className="ps-4 open_case">{cases.length - closedCases.length} Open Cases</p>
                        </div>
                    </div>
                </StatsAnalysisCard>
                }
            <section className="table overflow-scroll">
                <div className="ms-auto w-full sm:w-fit me-4 flex flex-wrap justify-evenly items-center gap-3">
                    <div className="w-2/5 sm:w-auto flex gap-1">
                        <input type="checkbox" name="allCases" id="allCases" defaultChecked={true} disabled={true} />
                        <label htmlFor="allCases">All Cases</label>
                    </div>
                    <div className="w-2/5 sm:w-auto flex gap-1">
                        <input type="checkbox" name="openCases" id="openCases" checked={showOpenCases} onChange={() => {
                            setShowOpenCases(prevState => !prevState)
                            setShowActiveCases(false)
                            return setShowClosedCases(false)
                        }} />
                        <label htmlFor="openCases">Open Cases</label>
                    </div>
                    <div className="w-2/5 sm:w-auto flex gap-1">
                        <input type="checkbox" name="activeCases" id="activeCases" checked={showActiveCases} onChange={() => {
                            setShowActiveCases(prevState => !prevState)
                            setShowOpenCases(false)
                            return setShowClosedCases(false)
                        }} />
                        <label htmlFor="activeCases">Active Cases</label>
                    </div>
                    <div className="w-2/5 sm:w-auto flex gap-1">
                        <input type="checkbox" name="closedCases" id="closedCases" checked={showClosedCases} onChange={() => {
                            setShowClosedCases(prevState => !prevState)
                            setShowActiveCases(false)
                            return setShowOpenCases(false)
                        }} />
                        <label htmlFor="closedCases">Closed Cases</label>
                    </div>
                </div>
                <div className="w-screen overflow-scroll">
                      {isLoading ? (<Loader loading={isLoading} />) :                
                    <Table>
                        <thead>
                            <TableHeader/>
                        </thead>

                        <tbody>
                            {showClosedCases && files(closedCases) || showOpenCases && files(openCases) || showActiveCases && files(activeCases) || true && files(cases)}
                        </tbody>
                    </Table>
                    }
                </div>
            </section>
        </div>
    </main>
  )
}

export default CasesPage;