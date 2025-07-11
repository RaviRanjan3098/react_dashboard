import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { GiPortal } from "react-icons/gi";
import { HiSupport } from "react-icons/hi";
import { GiMagicPortal } from "react-icons/gi";
const Sidebar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);


    const isActive = (path) => (location.pathname === path ? 'active' : '');

    const toggleSidebar = () => {
        setMenuOpen(!menuOpen);
    };
    const [jobDetailOpen, setJobDetailOpen] = useState(false);

    const toggleJobDetail = () => { 
        setJobDetailOpen(!jobDetailOpen);
    }

    return (
        <>
            <div className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-toggle d-md-none">
                    {menuOpen ? (
                        <FaAngleDoubleLeft className='p-1' size={26} onClick={toggleSidebar} />
                    ) : (
                        <FaAngleDoubleRight className='p-1' size={26} onClick={toggleSidebar} />
                    )}
                </div>
                <div className="sidebar-links">
                    <Link to="/dashboard" onClick={toggleSidebar} className={isActive('/dashboard')}>
                        <MdDashboard className="me-2 pb-1 icon" />
                        Dashboard
                    </Link>
                    <Link to="/job-detail" onClick={toggleSidebar} className={isActive('/job-detail')}>
                        <GiPortal className="me-2 pb-1 icon" />
                        Job Detail
                    </Link>
                    {/* <div className={`sidebar-item`}>
                        <div
                            onClick={toggleJobDetail}
                            className={`d-flex align-items-center sidebar-link ${isActive('/job-detail')}`}
                            style={{ cursor: 'pointer' }}
                        >
                            {jobDetailOpen ? <FaChevronDown className="me-2 ms-2" /> : <FaChevronRight className="me-2 ms-2" />}
                          
                            Job Detail
                        </div>

                        {jobDetailOpen && (
                            <div className="ms-4 mt-1">
                                <Link
                                    to="/job-detail/overview"
                                    onClick={toggleSidebar}
                                    className={`d-block mb-2 ${isActive('/job-detail/overview')}`}
                                >
                                    Job Overview
                                </Link>
                                <Link
                                    to="/job-detail/applications"
                                    onClick={toggleSidebar}
                                    className={`d-block ${isActive('/job-detail/applications')}`}
                                >
                                    Job Applications
                                </Link>
                            </div>
                        )}
                    </div> */}
                    <Link to="/portal" onClick={toggleSidebar} className={isActive('/portal')}>
                        <GiMagicPortal className="me-2 pb-1 icon" />
                        Portal
                    </Link>
                    <Link to="/contact-us" onClick={toggleSidebar} className={isActive('/contact-us')}>
                        <FaUserAlt className="me-2 pb-1 icon" />
                        Contact Us
                    </Link>
                    <Link to="/settings" onClick={toggleSidebar} className={isActive('/settings')}>
                        <IoMdSettings className="me-2 pb-1 icon" />
                        Settings
                    </Link>
                    <Link to="/reports" onClick={toggleSidebar} className={isActive('/reports')}>
                        <TbReportSearch className="me-2 pb-1 icon" />
                        Reports
                    </Link>
                    <Link to="/analytics" onClick={toggleSidebar} className={isActive('/analytics')}>
                        <SiGoogleanalytics className="me-2 pb-1 icon" />
                        Analytics
                    </Link>
                    <Link to="/support" onClick={toggleSidebar} className={isActive('/support')}>
                        <HiSupport className="me-2 pb-1 icon" />
                        Support
                    </Link>
                    <Link to="/profile" onClick={toggleSidebar} className={isActive('/profile')}>
                        <FaUserAlt className="me-2 pb-1 icon" />
                        Profile
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
