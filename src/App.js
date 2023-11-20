// src/main/frontend/src/App.js
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Card from './components/Card';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';

function App() {
  const cardTitle = '메인 페이지 카드 타이틀';
  const cardContent = '메인 페이지 카드 내용';
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Card title={cardTitle} content={cardContent} />}
          />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
