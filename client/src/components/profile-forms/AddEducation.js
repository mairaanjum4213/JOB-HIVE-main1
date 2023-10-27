import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
<>
    <center>
        <h3 className="large text-primary"  style={{marginTop:"10px"}}>Add Your Education</h3>
    </center>

    <div className="parent " style={{  display: "flex",
     marginTop:"5%",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
     }}>
      <div className='' style={{  
        backgroundColor:"white",
        borderRadius:"5px",
        padding:"1rem 1rem",
        marginTop:"1px",
       maxWidth: "65%",
       width: "100%",
       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"
     }}>
    
    <center>
      <p style={{color:"#108A00" , paddingTop:"5px"}}>
        Add any school or bootcamp that you
        have attended
      </p>
    </center>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
          className='inputCustom'
            type="text"
            placeholder="School"
            name="school"
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          className='inputCustom'
            type="text"
            placeholder="Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          className='inputCustom'
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4 className='textWel'>From Date</h4>
          <input  className='inputCustom' type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4 className='textWel'>To Date</h4>
          <input
          className='inputCustom'
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
   </div>
   </div>

    </>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
