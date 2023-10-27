import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          // faheem class name change
          className="btn btn-primary"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2 textWel">Your Experience is</h2>
      <table className="table">
        <thead>
          <tr>
            {/* faheem tino th ma style add kra hga */}
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white" ,borderRadius: "5px", padding: "10px" }}>Company</th>
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white",borderRadius: "5px", padding: "10px"  }} className="hide-sm">Title</th>
            {/* faheem class */}
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white",borderRadius: "5px", padding: "10px"  }} className="">Years</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
