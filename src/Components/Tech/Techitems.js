import React from "react";

const Techitems = ({ Techlist }) => {
  const { firstname } = Techlist;
  return (
    <li className="collection-item ">
      <div>
        {firstname}
        <a href="/" className="secondary-content ">
          <i className="material-icons">delete</i>
        </a>
      </div>
    </li>
  );
};

export default Techitems;
