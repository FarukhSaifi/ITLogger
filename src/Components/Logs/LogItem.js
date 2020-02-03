import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog } from "../../action/logAction";

const LogItem = ({ log, deleteLog }) => {
  const { id, message, attention, tech, date } = log;
  const onDelete = () => {
    console.log(`delete Where the ${id} `);
    deleteLog(id);
  };

  return (
    <li className="collection-item avatar ">
      {attention ? (
        <i className="material-icons circle red">report</i>
      ) : (
        <i className="material-icons circle black">report_problem</i>
      )}
      <a
        href="#edit-log-model"
        className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
      >
        {message}{" "}
      </a>
      <br />
      <p className="grey-text">
        <span className="black-text"> ID #{id}</span> Last Updated By{" "}
        <span className="black-text">{tech} </span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss a ">{date}</Moment>
      </p>
      <a href="!#" className="secondary-content ">
        <i className="material-icons red-text" onClick={onDelete}>
          delete
        </i>
      </a>
    </li>
  );
};

export default connect(null, { deleteLog })(LogItem);
