import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          // faheem class name
          className="btn btn-primary"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h5 className="my-2 textWel">Your Education is</h5>
      <table className="table">
        <thead>
          <tr>
                {/* faheem tino th ma style add kra hga */}
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white",borderRadius: "5px", padding: "10px"  }}>School</th>
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white" ,borderRadius: "5px", padding: "10px" }} className="hide-sm">Degree</th>
            {/* faheem class  */}
            <th style={{ textAlign: "center", backgroundColor: "#108A00", color: "white" ,borderRadius: "5px", padding: "10px" }}  className="">Years</th>
           
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
