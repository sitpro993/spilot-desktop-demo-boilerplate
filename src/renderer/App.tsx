import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import AppRouter from './routers';

export default function App() {
  return <AppRouter />;
}
