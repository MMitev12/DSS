import React, { useState } from "react";
import { Grade } from "../interfaces";

interface Props {
  grades: Grade[];
  selectedGrade: Grade | null;
  onSelectedGrade: (data: Grade) => void;
  onDeletedGrade: (data: Grade[]) => void;
}

const GradeList: React.FC<Props> = (props: Props) => {
  const handleClick = (grade: Grade) => {
    props.onSelectedGrade(grade);
  };

  const handleDelete = (id: number) => {
    const updatedGrades = props.grades.filter((grade) => grade.id !== id);
    props.onDeletedGrade(updatedGrades);
  };
  // deletedGrade.active = false;
  // setGrade(selectedGrade);
  // const updateGrades = props.grades.filter((grade) => grade.id !== id);
  // props.onDeletedGrade(updateGrades);

  // const getFormattedDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const month = date.toLocaleString("default", { month: "long" });
  //   const year = date.getFullYear();
  //   return `${month} ${day}, ${year}`;
  // };

  return (
    <>
      <h1>Grades List</h1>

      {props.grades.length === 0 ? <h2>No Grades found</h2> : null}
      <ul className="list">
        {props.grades.map((item) => (
          <li
            className="listing"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <p className="id">{item.id}</p>
            <p className="field1">{item.studentFirstName}</p>
            <p className="field2">{item.studentLastName}</p>
            <p className="field3">{item.subject}</p>
            <p className="field4">{item.gradeValue}</p>
            <p className="field5">{item.date.toString()}</p>
            <button
              className="deleteButton"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GradeList;
