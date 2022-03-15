import React, { useEffect, useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        placeholder="Coder"
        onChange={(e) => props.updateFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        placeholder="Byte"
        onChange={(e) => props.updateLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        placeholder="8885559999"
        onChange={(e) => props.updatePhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onClick={props.formSubmit}
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{props.mapped}</tbody>
    </table>
  );
}

function Application(props) {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [phone, updatePhone] = useState("");

  const [submittedInfo, updateSubmittedInfo] = useState([]);
  const [mapped, updateMapped] = useState([]);
  useEffect(() => {
    updateMapped(
      submittedInfo.map((ele, i) => (
        <tr key={i}>
          <th style={style.tableCell}>{ele.firstName}</th>
          <th style={style.tableCell}>{ele.lastName}</th>
          <th style={style.tableCell}>{ele.phone}</th>
        </tr>
      ))
    );
  }, [submittedInfo]);

  const formSubmit = () => {
    const arr = [...submittedInfo];

    const newSubmission = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    arr.push(newSubmission);

    updateSubmittedInfo(
      arr.sort((a, b) => {
        let nameA = a.lastName.toUpperCase();
        let nameB = b.lastName.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    );
  };

  return (
    <section>
      <PhoneBookForm
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updatePhone={updatePhone}
        formSubmit={formSubmit}
      />
      <InformationTable mapped={mapped} />
    </section>
  );
}

export default Application;
