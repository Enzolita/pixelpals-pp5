import { useEffect, useState } from "react";
import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";

export default function MyReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    const data = await axios.get("/report");
    setReports(data?.data?.results);
    console.table(data.data.results);
  };

  const deleteReports = async (reportId) => {
    try {
      await axiosReq.delete(`/report/${reportId}`);
      setReports(reports.filter(report => report.id !== reportId));
      console.log(`Report with id ${reportId} deleted.`);
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return (
    <>
      {reports?.map((report) => (
        <div key={report.id}>
          {report.reason}
          <button onClick={() => deleteReports(report.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}