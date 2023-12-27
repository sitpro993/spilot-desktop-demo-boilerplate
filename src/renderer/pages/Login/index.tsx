import React from 'react';
import { useAppDispatch } from '../../redux';
import { userLogin } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../../constants/route';

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <p>LoginPage</p>
      <button
        onClick={() => {
          console.log(123);
          dispatch(userLogin());
          navigate(ROUTE.HOME);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
