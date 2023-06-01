import React, { useState } from "react";
import httpClient from "../httpClient";

export const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");


  const registerUser = async () => {

  
    try {
      const resp = await httpClient.post("//localhost:5000/register", {
        email,
        password,
        username
      });
 
      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 409) {
        setError("Username or Email already exists,Try again");
  

      }
    }
  };

  return (
    <div class="container text-center">
    <div class="row">

    <div class="col">

    <div >
    <br/> 
<br/> 
<br/> 
<br/> 
<br/> 
</div> <div class="card h-100 shadow-none p-3" id="divLow">

      <h1>Create an account</h1>
      <form>

      <div class="mb-3" id="root">
      <label for="exampleInputEmail1" class="form-label">   UserName</label>
      <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id=""
              />

      </div>




      <div class="mb-3" id="root">
      <label for="exampleInputEmail1" class="form-label">    Email address:</label>
      <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
              />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">   Password: </label>
      <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id=""
              />

{/* <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div> */}

        </div>
        {/* <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="button" class="btn btn-primary mt-2" onClick={() => registerUser()}>Submit</button>
        </form> 
        </div> 
<div class="col"> 
</div> 
</div>
{error ? (
          <div>
            <div>
            <br/>
              {/* 
              <br/>
              <br/> */}
            </div>
         
            <div className="alert alert-danger" role="alert">
              <span className="alert-icon">
                <span className="visually-hidden">Error</span>
              </span>
              <p>{error}</p>
            </div>
            <div>
            <div>
              {/* <br/>
              <br/>
              <br/> */}
            </div>
            </div>
               
          </div>
          ):
          (<div></div>)}

<div >

</div> 
</div>
</div>
  );
};

export default RegisterPage;