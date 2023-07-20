import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Grade } from "../interfaces";

interface Props {
  onSave: (grade: Grade) => void;
  onUpdate: (grade: Grade) => void;
  selectedGrade: Grade | null;
}

const GradeDetails: React.FC<Props> = (props: Props) => {
  let emptyGrade: Grade = {
    id: -1,
    studentFirstName: "",
    studentLastName: "",
    subject: "",
    gradeValue: 0,
    date: new Date(),
    active: true,
  };

  const [selectedGrade, setGrade] = useState<Grade>(emptyGrade);

  useEffect(() => {
    if (props.selectedGrade) {
      setGrade(props.selectedGrade);
    } else {
      handleClear();
    }
  }, [props.selectedGrade]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGrade((prevGrade) => ({
      ...prevGrade,
      [name]: value,
    }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGrade((prevGrade) => ({
      ...prevGrade,
      date: new Date(value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedGrade.id !== -1) {
      props.onUpdate(selectedGrade);
    } else {
      props.onSave(selectedGrade);
    }
  };

  const handleClear = () => {
    setGrade(emptyGrade);
  };

  return (
    <>
      <h1>Grade Details:</h1>
      <form onSubmit={handleSubmit}>
        <>
          <div>
            <label className="lavel" htmlFor="studentFirstName">
              Student:{" "}
            </label>
            <input
              type="text"
              id="field1"
              name="studentFirstName"
              value={selectedGrade.studentFirstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="lavel" htmlFor="studentLastName">
              Student:{" "}
            </label>
            <input
              type="text"
              id="field2"
              name="studentLastName"
              value={selectedGrade.studentLastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="lavel" htmlFor="subject">
              Subject:{" "}
            </label>
            <input
              type="text"
              id="field3"
              name="subject"
              value={selectedGrade.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="lavel" htmlFor="gradeValue">
              Grade:{" "}
            </label>
            <input
              type="number"
              id="field4"
              name="gradeValue"
              value={selectedGrade.gradeValue}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="lavel" htmlFor="date">
              Date:{" "}
            </label>
            <input
              type="date"
              id="field5"
              name="date"
              value={selectedGrade.date.toISOString().substr(0, 10)}
              onChange={handleDateChange}
              required
            />
          </div>
          <button id="saveButton" type="submit">
            Save
          </button>
          <button id="clearButton" onClick={handleClear}>
            Clear
          </button>
        </>
      </form>
    </>
  );
};

export default GradeDetails;
