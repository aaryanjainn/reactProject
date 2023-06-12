import React from "react";
import { useState, useEffect } from "react";
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

function Index() {
  const [storeUserName, changeUserName] = useState("");
  const [storeUserNumber, changeUserNumber] = useState("");
  const [storeStudentData, changeStudentData] = useState([]);
  const [isEditing, changeEditing] = useState(false);

  // When the user enters something in input field handleChange function is getting every value the user is typing ans storing it in useState variable with the help of its function and the we setting that value in the input tag value attribute
  function handleChange(e, name) {

    if (name === "storeUserName") {
      changeUserName(e.target.value);
    } else {
      changeUserNumber(e.target.value);
    }
  }

  function submitForm(formData) {
    formData.preventDefault();

    if (isEditing === false) {
      changeStudentData([...storeStudentData, { name: storeUserName, phone: storeUserNumber },]);
    }
    else {
      storeStudentData[isEditing].name = storeUserName;
      storeStudentData[isEditing].phone = storeUserNumber;

      changeEditing(false);
    }
    changeUserName("");
    changeUserNumber("");

  }

  function deleteStudentData(studentId) {
    let storeArrayAfterDelete = storeStudentData.filter((element, index) => {
      if (index !== studentId) {
        return element;
      }
    })
    changeStudentData(storeArrayAfterDelete);
  }

  function editStudentData(studentId) {
    changeEditing(studentId);
    changeUserName(storeStudentData[studentId].name);
    changeUserNumber(storeStudentData[studentId].phone);
  }

  const [holdValueRev, changeValueRev] = useState([]);
  useEffect(() => {
    changeValueRev([...holdValueRev, { nameRev: "Aaryan", phoneRev: "1234567890" }, { nameRev: "Rohit", phoneRev: "0987654321" }]);
  }, []);


  function reverseRows() {
    var see = holdValueRev.shift();
    holdValueRev.push({ nameRev: see.nameRev, phoneRev: see.phoneRev });
  }



  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={storeUserName}
          name="storeUserName"
          onChange={(e) => handleChange(e, e.target.name)}
        ></input>

        <input
          type="text"
          value={storeUserNumber}
          name="storeUserNumber"
          onChange={(e) => handleChange(e, e.target.name)}
        ></input>
        <input type="submit" value="Add to list"></input>
      </form>

      <br></br>
      <div
        style={{ border: "1px solid black", color: "red" }}
        className="showData"
      >
        <table className="table">
          <tbody>
            <tr>
              <th>name</th>
              <th>number</th>
              <th>action</th>
            </tr>

            {
              storeStudentData.map(function (element, index) {
                return (
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.phone}</td>
                    <td><Delete onClick={() => deleteStudentData(index)} /></td>
                    <td><Edit onClick={() => editStudentData(index)} /></td>
                  </tr>
                )
              })

            }
          </tbody>
        </table>
        <button onClick={() => reverseRows()}>Reverese</button>
      </div>
    </>
  )
}

export default Index;
