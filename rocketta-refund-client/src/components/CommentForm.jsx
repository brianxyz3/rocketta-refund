import React, { useState } from "react";
import { toast } from "react-toastify";
import { addAdminComment } from "../controller/apiController";


const CommentForm = ({ id, updateComments, isActiveInvestigation, user }) => {
    const [formData, setFormData] = useState({comment: ""});
    const headerObj = {
        authorization: user?.token,
        id: user?.id,
        admin: user?.isAdmin,
        "Content-Type": "application/json",
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = await addAdminComment(id, formData, headerObj).catch((err) => console.log(err));
        if (!res.status == 200) toast.error("Something went wrong. Try again.");
        updateComments(formData);
        setFormData({ comment: "" });
        toast.success("New Case Update Added");
    }
    
  return (
    <>
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 items-end">
                  <textarea
                      type="text"
                      disabled={!isActiveInvestigation}
                      rows={4}
                      name="comment"
                      value={formData.comment}
                      placeholder="What's the update?"
                      className="w-full p-1 focus:outline-blue-500"
                      onChange={(evt) => setFormData((currData) => (
                          { ...currData, [evt.target.name]: evt.target.value }
                      ))}
                  />
                  <button
                      disabled={!isActiveInvestigation}
                      className={`${isActiveInvestigation ? "bg-blue-700 hover:bg-white hover:text-blue-700" : "bg-gray-700 cursor-not-allowed"} font-bold border border-blue-700 text-white w-full lg:w-auto py-0.5 px-1.5 rounded-lg duration-200`}>
                      Add Comment
                  </button>
              </div>
          </form>
    </>
  )
}

export default CommentForm;