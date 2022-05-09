import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Home,
} from '@pages/index';

const RoutesComponent: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<div />} />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesComponent;
