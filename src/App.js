import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Content from './summary/contents';

import './App.css';
import Navigation from './Content/header/navigation';
import ProjectStuff from './Content/articlePart/carousals/projectCarousal';
import FunFact from './Content/articlePart/carousals/funFacts';
import BooksRead from './Content/articlePart/carousals/bookCarousal';
import Courses from './Content/articlePart/carousals/courseCarousal';

function App() {
  return (
    <Routes>
      <Route path='/reactcv' element={<Navigation />}>
        <Route index element={<Content />}/>
        {/* <Route path='' element={<Content />}/> */}
        <Route path='course' element={<Courses />} />
        <Route path='book' element={<BooksRead />} />
        <Route path='fun' element={<FunFact />} />
        <Route path='project' element={<ProjectStuff />} />
      </Route>
    </Routes>
  );
}

export default App;
