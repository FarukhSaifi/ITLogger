import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../Layouts/Loader";
import LogItem from "../Logs/LogItem";
import { getLogs } from "../../action/logAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, [Logs]);

  if (loading || logs === null) {
    return <Loader />;
  }

  return (
    <div className="container ">
      <ul className="collection with-header">
        <li className="collection-header ">
          <h3>System Logs</h3>
        </li>
        {!loading && logs.length === 0 ? (
          <h3>No Logs Here...</h3>
        ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
