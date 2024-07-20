import * as logFunctionality from "./students";

const result = logFunctionality.getAllStudents();
// console.log('result:',result);

const allOnSiteStudent = logFunctionality.getOnSiteStudent();
// console.log('siteStudent:', allOnSiteStudent);

const passedStudents = logFunctionality.getPassedStudents();
// console.log('passedStudents:',passedStudents);

const studentList = logFunctionality.getStudentList();
// console.log('studentList:',studentList);

const studentData = logFunctionality.getStudentData(201);
// console.log('studentData:',studentData);

const isOnSiteStudent = logFunctionality.getIsOnSiteStudent(204);
// console.log('isOnSiteStudent:', isOnSiteStudent);

