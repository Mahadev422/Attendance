import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinLoader from "../components/SpinLoader";
import { useFetch } from "../store/useFetch";

const Attendance = () => {
  const { id } = useParams();

  const {
    err,
    loading,
    fetchStudent,
    studentList,
    markAttendance,
    submitAttendance,
  } = useFetch();

  useEffect(() => {
    fetchStudent(id);
  }, [0]);

  if (loading || !studentList) return <SpinLoader />;
  if (err) return <p className="my-20">{err}</p>;

  return (
    <div className="min-h-screen pb-15">
      <div className="grid border mx-4 p-4 bg-gray-100 shadow-sm border-gray-200 gap-2">
        <div className="grid-cols-2 grid font-bold sticky top-[50px] bg-gray-100 p-2 border-b">
          <p>Name</p>
          <p className="text-center">Present</p>
        </div>
        {studentList.map((student) => (
          <div
            key={student.id}
            className="grid-cols-2 grid bg-white p-2 rounded-md"
          >
            <p>{student.name}</p>
            <input
              className="cursor-pointer"
              onChange={(e) => markAttendance(student.id, e.target.checked)}
              type="checkbox"
            />
          </div>
        ))}
      </div>
      <center className="my-5">
        <button
          onClick={submitAttendance}
          className="bg-blue-400 px-5 font-bold hover:rounded-full py-1 rounded"
        >
          Submit
        </button>
      </center>
    </div>
  );
};

export default Attendance;
