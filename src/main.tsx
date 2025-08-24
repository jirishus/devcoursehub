import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Layout from './Layout';
import School from './School';
import FAQ from './FAQ';
import SuccessStories from './SuccessStories';
import Explore from './Explore';

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root container #root not found in index.html");

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<School />} />
          <Route path="explore" element={<Explore />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="success-stories" element={<SuccessStories />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
