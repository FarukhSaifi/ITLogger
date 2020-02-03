import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large red modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#edit-log-modal"
            className="btn-floating yellow darken-1 modal-trigger"
          >
            <i className="material-icons">edit</i>
          </a>
        </li>
        <li>
          <a href="#tech-add-modal" className="btn-floating blue modal-trigger">
            <i className="material-icons">person_pin</i>
          </a>
        </li>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">supervisor_account</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
