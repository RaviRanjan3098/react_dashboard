import React from 'react';
import { Switch, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './cmp/Dashboard';
import JobDetail from './cmp/JobDetail';
import Category from './cmp/Category';
import Portal from './cmp/Portal';
import ContactUs from './cmp/ContactUs';
import Settings from './cmp/Settings';
import Reports from './cmp/Reports';
import Analytics from './cmp/Analytics';
import Support from './cmp/Support';
import Profile from './cmp/Profile';


const RouteLink = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/job-detail" element={<JobDetail />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default RouteLink;