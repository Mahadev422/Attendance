import { create } from "zustand";

export const useFetch = create((set, get) => ({
  err: null,
  loading: false,
  studentList: null,
  attendanceData: [],

  makeAttendanceData: (list) => {
    const d = list.map(student => ({...student, attendance: false}));
    set({attendanceData: [...d]});
  },
  fetchStudent: async (id) => {
    try {
      set({loading: true});
      const res = await fetch('https://raw.githubusercontent.com/Mahadev422/Code-Snippet/refs/heads/main/studentList.json');
      const data = await res.json();
      if(!data.status) return set({
        loading: false,
        err: data.msg,
        studentList: data.data
      });
      set({loading: false, studentList: [...data.data]});
      get().makeAttendanceData([...data.data]);
    } catch (err) {
      console.log(err.message)
      set({loading: false, err: err.message, studentList: []});
    }
    set({loading: false});
  },

  markAttendance: (id, mark) => {
    const attendanceData = get().attendanceData;
    const d = attendanceData.map(student => (student.id === id) ? ({...student, attendance: mark}) : ({...student}));
    set({attendanceData: [...d]});
  },

  submitAttendance: () => {
    const data = get().attendanceData;
    let a = 0, p =0;
    data.forEach(element => {
      if(element.attendance) p++;
      else a++;
    });
    console.log(data, 'absent: ', a, 'present: ', p);
  }
}));