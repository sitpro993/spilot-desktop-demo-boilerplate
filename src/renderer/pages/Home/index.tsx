import React from 'react';
import icon from '../../../../assets/icon.png';
import { useAppDispatch } from '../../redux';
import { userLogout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../../constants/route';

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

        <button
          type="button"
          onClick={() => {
            dispatch(userLogout());
            navigate(ROUTE.LOGIN);
          }}
        >
          <span role="img" aria-label="folded hands">
            🙏
          </span>
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
