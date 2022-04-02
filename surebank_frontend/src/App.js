import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './component/home/Home'
import Login from './component/login/Login'
import Register from './component/register/Register'

import './App.css'
import { createContext } from 'react'
import { useReducer } from 'react'
import { initialState, userReducer } from './reducers/userReducer'
import Logout from './component/logout/Logout'
import client from './service/SureBankClient'
import { toastError } from './util/Toast'
import { useEffect } from 'react'

export const StateContext = createContext();
export const DispatchContext = createContext();

const App = () => {

  async function getUserInfo() {
    try {
      const userInfoResponse = await client.getUserInfo();
      if (userInfoResponse && userInfoResponse.status === 200) {
        const userInfo = userInfoResponse.data;
        dispatch({
          type: "LOGIN",
          item: userInfo.user,
        }
        );
      }
    } catch (error) {
      toastError(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])



  const [state, dispatch] = useReducer(userReducer, initialState)

  return (

    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/*" element={<Home />} />

          </Routes>

        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider>


  )
}

export default App