import React, { useState } from "react";
import GradeDetails from "./components/GradeDetails";
import GradeList from "./components/GradeList";
import "./App.css";
import { Grade } from "./interfaces";

const App: React.FC = () => {
  let grade1: Grade = {
    id: 1,
    studentFirstName: "Ivan",
    studentLastName: "Petrov",
    subject: "Math",
    gradeValue: 5,
    date: new Date(),
    active: true,
  };

  let gradeInitial = [grade1];

  const [grades, setGrades] = useState(gradeInitial);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);

  const handleSaveGrade = (grade: Grade) => {
    let gradesLength = grades.length + 1;
    grade.id = gradesLength;
    let gradeArr = [...grades, grade] as Grade[];
    setGrades(gradeArr);
    setSelectedGrade(grade);
  };

  const handleGradeUpdate = (grade: Grade) => {
    let gradeIndex = grades.findIndex((item) => item.id === grade.id);
    let gradesArr = [...grades];
    let updateGrade = { ...grades[gradeIndex] };
    updateGrade = grade;
    gradesArr[gradeIndex] = updateGrade;
    setGrades(gradesArr);
    setSelectedGrade(grade);
  };

  const handleGradeSelection = (grade: Grade) => {
    setSelectedGrade((prevSelectedGrade) =>
      prevSelectedGrade && prevSelectedGrade.id === grade.id ? null : grade
    );
  };

  const handleGradeDelete = (gradeArr: Grade[]) => {
    let idIndex = 1;
    for (let i = 0; i < gradeArr.length; i++) {
      gradeArr[i].id = idIndex++;
    }
    return gradeArr;
  };

  return (
    <div className="container">
      <div className="navbar">Grading Management</div>
      <div className="wrap">
        <div className="content-list">
          <GradeList
            grades={grades}
            selectedGrade={selectedGrade}
            onSelectedGrade={handleGradeSelection}
            onDeletedGrade={(newGrades) => {
              setGrades(handleGradeDelete(newGrades));
              setSelectedGrade(null);
            }}
          />
        </div>
        <div className="content-details">
          <GradeDetails
            onSave={handleSaveGrade}
            onUpdate={handleGradeUpdate}
            selectedGrade={selectedGrade}
          />
        </div>
      </div>
      <div className="footer">
        @ Grading Management System Created by Mitko Mitev for DSS trainee
        program
      </div>
    </div>
  );
};

export default App;
