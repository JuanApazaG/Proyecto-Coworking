import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WorkspaceDetailsPage from './pages/WorkspaceDetailsPage';
import ProfilePage from './pages/ProfilePage';
import OwnerDashboardPage from './pages/OwnerDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="workspace/:id" element={<WorkspaceDetailsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="dashboard" element={<OwnerDashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;