import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Interface from '../../src/pages/interface/index';
import RegisterCollaborator from '../pages/RegisterCollaborator/index'
import Product from '../pages/Product';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PagSignature from '../pages/PagSignature';
import RegisterEpi from '../pages/RegisterEpi';
import ReleaseEpi from '../pages/ReleaseEpi';

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/registerCollaborator" element={<RegisterCollaborator />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pagSignature" element={<PagSignature />} />
        <Route path="/registerEpi" element={<RegisterEpi />} />
        <Route path='/releaseEpi' element={<ReleaseEpi/>} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;