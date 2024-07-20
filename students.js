"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsOnSiteStudent = exports.getStudentData = exports.getStudentList = exports.getPassedStudents = exports.getOnSiteStudent = exports.getAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnSiteStudent = () => {
    const siteStudent = data_1.default.filter((student) => student.isOnSiteAllowed === true);
    return siteStudent;
};
exports.getOnSiteStudent = getOnSiteStudent;
const getPassedStudents = () => {
    const passedStudents = data_1.default.filter((student) => student.entryTest.isPassed);
    return passedStudents;
};
exports.getPassedStudents = getPassedStudents;
const getStudentList = () => {
    const studentList = data_1.default.map((student) => {
        return `${student.firstName} ${student.lastName}`;
    });
    return studentList;
};
exports.getStudentList = getStudentList;
const getStudentData = (rollNo) => {
    const studentData = data_1.default.find((student) => student.rollNo === rollNo);
    return studentData;
};
exports.getStudentData = getStudentData;
const getIsOnSiteStudent = (rollNo) => {
    const onSiteStudent = data_1.default.find((student) => student.rollNo === rollNo && student.isOnSiteAllowed);
    if (onSiteStudent) {
        return true;
    }
    else {
        return false;
    }
};
exports.getIsOnSiteStudent = getIsOnSiteStudent;
