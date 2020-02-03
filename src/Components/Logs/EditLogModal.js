import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setmessage] = useState("");
  const [attention, setattention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || attention === "" || tech === "") {
      M.toast({ html: "Please Field All Details" });
    } else {
      console.log(message, attention, tech);
      //   set Clear
      setmessage("");
      setattention(false);
      setTech("");
    }
  };
  return (
    //    <!-- Modal Structure -->
    <div id="edit-log-modal" className="modal modalStyle">
      <div className="modal-content">
        <h4>Edit Log</h4>

        <input
          type="text"
          placeholder="Enter Details of log"
          name="message"
          value={message}
          onChange={e => setmessage(e.target.value)}
        />

        <div className="input-field col s12">
          <select value={tech} onChange={e => setTech(e.target.value)}>
            <option value="" disabled></option>
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
        <a
          href="#!"
          onSubmit={onSubmit}
          className="modal-close waves-effect btn"
        >
          SUBMIT
        </a>
      </div>
    </div>
  );
};

export default EditLogModal;
