import React from 'react';
import { useNavigate } from 'react-router-dom';

import ROUTE from '@renderer/constants/route';
import { useAppDispatch } from '@renderer/redux';
import { userLogin } from '@renderer/redux/slices/authSlice';

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
        className="text-3xl font-bold underline"
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
