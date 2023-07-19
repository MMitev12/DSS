import React, { useState } from "react";
import { Grade } from "../interfaces";

interface Props {
  grades: Grade[];
  selectedGrade: Grade | null;
  onSelectedGrade: (data: Grade) => void;
  onDeletedGrade: (data: Grade[]) => void;
}

const GradeList: React.FC<Props> = (props: Props) => {
  const [selectedGrade, setGrade] = useState<Grade>();
  const handleClick = (id: number) => {
    let foundGrade = props.grades.find((item) => item.id === id) as Grade;
    props.onSelectedGrade(foundGrade);
  };

  const handleDelete = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const deletedGrade = props.grades.find((item) => item.id === id) as Grade;
    if (deletedGrade) {
      const updatedGrades = props.grades.filter((grade) => grade.id !== id);
      props.onDeletedGrade(updatedGrades);

      if (selectedGrade?.id === id) {
        setGrade(undefined);
      }
    }
    // deletedGrade.active = false;
    // setGrade(selectedGrade);
    // const updateGrades = props.grades.filter((grade) => grade.id !== id);
    // props.onDeletedGrade(updateGrades);
  };

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <h1>Grades List</h1>

      {props.grades.length === 0 ? <h2>No Grades found</h2> : null}
      <ul className="list">
        {props.grades.map((item) => (
          <li
            className="listing"
            key={item.id}
            onClick={(e) => {
              handleClick(item.id);
            }}
          >
            <p className="id">{item.id}</p>
            <p className="field1">Name - {item.studentName}</p>
            <p className="field2">Subject - {item.subject}</p>
            <p className="field3">Grade - {item.gradeValue}</p>
            <p className="field4">
              Date of grade - {getFormattedDate(item.date.toISOString())}
            </p>
            <button
              className="deleteButton"
              onClick={(e) => handleDelete(item.id, e)}
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
