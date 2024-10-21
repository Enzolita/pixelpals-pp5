import { useEffect, useState } from "react";
import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/MyReports.module.css";

export default function MyReports() {
  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [reports, setReports] = useState([]);
  const [edit, setEdit] = useState(false);
  const [reportId, setReportId] = useState(0);
  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const data = await axios.get("/report");
    setReports(data?.data?.results);
    console.log(data);
  };

  const deleteReports = async (reportId) => {
    try {
      await axiosReq.delete(`/report/${reportId}`);
      setReports(reports.filter((report) => report.id !== reportId));
      console.log(`Report with id ${reportId} deleted.`);
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  const editReports = (reportId) => {
    console.log(reportId);
    setEdit(true);
    setReportId(reportId);
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log(reportId);

    try {
      await axiosReq.patch(`/report/${reportId}/`, {
        reason: reportTitle,
        content: reportContent,
      });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!edit ? (
        reports
          ?.filter((report) => report.profile_id === currentUser.pk)
          .map((report) => (
            <div className="MyReports" key={report.id}>
              {report.reason} {report.profile_id}
              <button onClick={() => deleteReports(report.id)}>Delete</button>
              <button onClick={() => editReports(report.id)}>Edit</button>
            </div>
          ))
      ) : (
        <>
          <div className="MyReports">Edit Report</div>
          <form className="MyReports" onSubmit={handleSubmitEdit}>
            <input
              type="text"
              onChange={(e) => setReportTitle(e.target.value)}
              placeholder="Edit report title"
            />
            <input
              type="text"
              onChange={(e) => setReportContent(e.target.value)}
              placeholder="Edit report content"
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
}
