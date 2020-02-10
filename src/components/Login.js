import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <div>위 화면</div>
        <ul>
          <li>Login 영역</li>
          <li>
            Login ID:<input></input>
          </li>
          <li>
            Login PW:<input></input>
          </li>
        </ul>
      </div>
      <Link to="/counter">counter로</Link>
    </div>
  );
};

export default Login;
