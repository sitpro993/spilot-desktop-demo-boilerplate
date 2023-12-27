import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import icon from '@assets/icon.png';
import ROUTE from '@renderer/constants/route';
import { useAppDispatch } from '@renderer/redux';
import { userLogout } from '@renderer/redux/slices/authSlice';

function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Spilot Demo</h1>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          Read our docs
        </button>

        <Button
          type="primary"
          onClick={() => {
            dispatch(userLogout());
            navigate(ROUTE.LOGIN);
          }}
        >
          <span role="img" aria-label="folded hands">
            🙏
          </span>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
