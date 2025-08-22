import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { CourseList } from './CourseList';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <CourseList />
  </React.StrictMode>
);
