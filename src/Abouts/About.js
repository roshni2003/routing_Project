import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    });
  };

  return (
    <Grid item xs={12} container spacing={1}>
      <Grid item lg={12} style={{ height: "100%", width: "100%", marginTop: "40px", backgroundColor: "#fae3f1" }} >
        <Grid item lg={12} style={{ height: "80%", width:"30%", backgroundColor:"white" , marginTop:"30px",marginLeft:"500px"}}>
          <Grid item lg={12} style={{height:"80px",textAlign: 'center',backgroundColor:"#f7a6d7"}}><h1 style={{position:"relative",top:"20px"}}>Register !</h1><img src="girl.png" style={{width:"80px", marginRight:"210px", position:"relative", bottom:"30px"}}></img></Grid><br></br>
          <Grid item lg={12} style={{ height: "590px",textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <br /><br></br>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <br /><br></br>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br /><br></br>
              <label>Gender: </label>
              <label htmlFor="female">
                Female
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="male">
                Male
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="others">
                Others
                <input
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                  checked={formData.gender === 'others'}
                  onChange={handleInputChange}
                />
              </label>
              <br /><br></br>
              <button type="submit">Submit</button>
            </form>


            {submittedData && (
              <div>
                <h2>Submitted Information</h2>
                <p>First Name: {submittedData.firstName}</p>
                <p>Last Name: {submittedData.lastName}</p>
                <p>Email: {submittedData.email}</p>
                <p>Gender:{submittedData.gender}</p>
              </div>
            )}
            <img src="shopping.png" style={{width:"500px"}}></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
};

export default Form;
