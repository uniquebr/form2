import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [comment, setcomment] = useState(""); 
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleChange2(e) {
    setEmail(e.target.value); // Updated function name
  }

  function handleChange3(e) {
    setPassword(e.target.value); // Updated function name
  }

  function handleChange4(e) {
    setcomment(e.target.value);
  }


  return (
    <div>
      <h3>My Feedback Form</h3>
      Name <input type="text" onChange={handleChange} /> <p>Name: {name}</p>
      Email <input type="text" onChange={handleChange2} /> <p>Email: {email}</p>
      Password <input type="text" onChange={handleChange3} />
      <p>Password: {password}</p> 
      <p>Please check all the emotions that apply to you</p>
      <div>
        Angry <input type="radio"  name="options" value="option1" />
      </div>
      <div>
        Sad <input type="radio"  name="options" value="option2" />
      </div>
      <div>
        Happy
        <input type="radio"  name="options" value="option3" />
      </div>
      <div>
        Ambivalent <input type="radio"  name="options" value="option4" />
      </div>  
      <p>How satisfied were you with our serivce?</p>
      <div>
        Very satisfied <input type="radio"  name="options" value="option1" />
      </div>
      <div>
        Satisfied <input type="radio"  name="options" value="option2" />
      </div>
      <div>
      Didn't care
        <input type="radio"  name="options" value="option3" />
      </div>
      <div>
       Dissatisfied  <input type="radio"  name="options" value="option4" />
      </div>  
      <div>
       Very dissatisfied  <input type="radio"  name="options" value="option4" />
      </div>  
      Further comments <input type="text" onChange={handleChange4} />    <p>Your comment: {comment}</p> 
    </div>
  );
};

export default Form;
