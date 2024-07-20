import students from "./data";

export const getAllStudents = () => {
  return students;
};
export const getOnSiteStudent = () => {
  const siteStudent = students.filter(
    (student) => student.isOnSiteAllowed === true
  );
  return siteStudent;
};

export const getPassedStudents = () => {
  const passedStudents = students.filter(
    (student) => student.entryTest.isPassed
  );
  return passedStudents;
};

export const getStudentList = () => {
  const studentList = students.map((student) => {
    return `${student.firstName} ${student.lastName}`;
  });
  return studentList;
};
export const getStudentData = (rollNo: number) => {
  const studentData = students.find((student) => student.rollNo === rollNo);
  return studentData;
} 

export const getIsOnSiteStudent = (rollNo: number) => {
  const onSiteStudent = students.find((student) => student.rollNo === rollNo && student.isOnSiteAllowed);
  if (onSiteStudent) {
    return true
}else {
    return false
}
}