import React, { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../action/logAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setmessage] = useState("");
  const [attention, setattention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = e => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please Field All Details" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      addLog(newLog);
      M.toast({ html: `Log Added By ${tech}` });
      //   set Clear
      setmessage("");
      setattention(false);
      setTech("");
    }
  };
  return (
    //    <!-- Modal Structure -->
    <div id="add-log-modal" className="modal modalStyle">
      <div className="modal-content ">
        <h4>Add Log</h4>

        <input
          type="text"
          placeholder="Enter Details of log"
          name="message"
          value={message}
          onChange={e => setmessage(e.target.value)}
        />

        <div className="input-field col s12">
          <select value={tech} onChange={e => setTech(e.target.value)}>
            <option value="" hidden disabled></option>
            <option value="Farukh">Farukh</option>
            <option value="Brad">Brad</option>
            <option value="azad">azad</option>
          </select>
          <label>Tech Person</label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value={attention}
              onChange={e => setattention(!attention)}
            />
            <span>Attention</span>
          </label>
        </div>
      </div>
      <div className="modal-footer ">
        <button onClick={onSubmit} className="modal-close waves-effect btn">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addLog })(AddLogModal);
