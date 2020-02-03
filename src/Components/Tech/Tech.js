import React, { useState, useEffect } from "react";
import Techitems from "./Techitems";

const Techs = () => {
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, [Techs]);

  const getTechs = async () => {
    const res = await fetch("/techs");
    const data = await res.json();
    console.table(data);
    setTechs(data);
  };
  return (
    //    <!-- Modal Structure -->
    <div id="tech-list-modal" className="modal modalStyle">
      <div className="modal-content ">
        <h4>TEchy List</h4>
        <ul className="collection">
          {techs.map(tech => (
            <Techitems key={tech.id} Techlist={tech} />
          ))}
        </ul>
      </div>
      <div className="modal-footer ">
        <a href="#!" className="modal-close waves-effect  btn ">
          ADD NEW
        </a>
      </div>
    </div>
  );
};

export default Techs;
