import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPortfolio } from '../../actions/profile';

const AddPortfolio = ({ addPortfolio }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:'',
    link:''
  });

  const { title,link } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>

    <center>
    <h1 className="large text-primary"  style={{marginTop:"10px"}}>Add Your Portfolio</h1>
    </center>

    <div className="parent " style={{  display: "flex",
     marginTop:"3%",
      justifyContent: "center",
      height: "40vh",
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
      Add your portfolio website
      </p>
      </center>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addPortfolio(formData).then(() => navigate('/dashboard'));
        }}
      >
        <div className="form-group">
          <input
          className='inputCustom'
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          className='inputCustom'
            type="text"
            placeholder="Please give url"
            name="link"
            value={link}
            onChange={onChange}
            required
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

AddPortfolio.propTypes = {
  addPortfolio: PropTypes.func.isRequired
};

export default connect(null, { addPortfolio })(AddPortfolio);
