import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = () => {
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please Field All Name" });
    } else {
      console.log(firstname, lastname);
      //   set Clear\
      setFirstname("");
      setLastname("");
    }
  };
  return (
    //    <!-- Modal Structure -->
    <div id="tech-add-modal" className="modal modalStyle">
      <div className="modal-content ">
        <h4>Add Tech Person</h4>
        <div className="row">
          <div className="col s6">
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
          </div>
          <div className="col s6">
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer ">
        <a
          href="#!"
          onSubmit={onSubmit}
          className="modal-close waves-effect  btn "
        >
          ADD
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
