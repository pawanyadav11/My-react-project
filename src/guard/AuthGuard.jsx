import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router";
import Cookies from "universal-cookie";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3434";

const AuthGuard = () => {
  const [login, setLogin] = useState(null);

  useState(()=>{
    const req = async ()=>{
      try {
          const cookie = new Cookies();
          const token = cookie.get("authToken");
          const res = await axios({
            method: 'get',
            url: '/verify-token/'+token
          })
          const user = JSON.stringify(res.data.data.data)
          sessionStorage.setItem("user",user)
          setLogin(true)
      }
      catch(err)
      {
        setLogin(false);
      }
    }
    req()
  },[])

  if(login === null) return <h1>Loading...</h1>

  if(login === false) return <Navigate to="/login" />

  if(login === true) return <Outlet />
};

export default AuthGuard;
