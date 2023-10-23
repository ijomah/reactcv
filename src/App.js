import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useMediaQuery } from '@uidotdev/usehooks';
// import { ChakraBaseProvider } from '@chakra-ui/react';

import Content from './summary/contents';

import './App.css';
import Navigation from './Content/header/navigation';
import ProjectStuff from './Content/articlePart/carousals/projectCarousal';
import FunFact from './Content/articlePart/carousals/funFacts';
import BooksRead from './Content/articlePart/carousals/bookCarousal';
import Courses from './Content/articlePart/carousals/courseCarousal';

function App() {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  // const isMediumDevice = useMediaQuery(
  //   "only screen and (min-width : 769px) and (max-width : 992px)"
  // );
  // const isLargeDevice = useMediaQuery(
  //   "only screen and (min-width : 993px) and (max-width : 1200px)"
  // );
  // const isExtraLargeDevice = useMediaQuery(
  //   "only screen and (min-width : 1201px)"
  // );
  return (
    // <ChakraBaseProvider>
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
    // </ChakraBaseProvider>
  );
}

export default App;
