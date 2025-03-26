import React, { useEffect, useState } from "react";
import { getCasesForUser } from "../controller/apiController";
import { useAuth } from "../authContext";
import { Link, useNavigate } from "react-router";
import Loader from "../components/Loader";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableBodyCell from "../components/TableBodyCell";
import "../stylesheets/casePage.css";


const UserHistoryPage = () => {
    const [userCaseHistory, setUserCaseHistory] = useState({history: []});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {currentUser, userLoggedIn} = useAuth();
    const {id} = currentUser;

    const headerObj = {
      authorization: currentUser.token,
      id: currentUser.id,
      admin: currentUser.isAdmin,
      "Content-Type": "application/json",
    }

    useEffect(() => {
      if (!userLoggedIn) navigate("/");
      const userHistory = async() => {
        try {
          const res = await getCasesForUser(headerObj, id)
          return setUserCaseHistory(res); 
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }

      userHistory();
    }, [])
 
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
      ))
    )
    


  return (
    <section>
      <h1 className="text-[#0f3bc0] text-2xl font-bold ps-5 py-5 md:text-3xl">User History</h1>
      {userCaseHistory.history.length !== 0 ? 
      <div className="w-screen overflow-scroll">
      {isLoading ? (<Loader loading={isLoading} size={30} />) :                
        <Table>
          <thead>
            <TableHeader/>
          </thead>

          <tbody>
            {files(userCaseHistory.history)}
          </tbody>
        </Table>
      }
      </div>
      : <div className="text-lg text-center font-bold py-10">No Available Case File</div>}
    </section>
  )
}

export default UserHistoryPage;