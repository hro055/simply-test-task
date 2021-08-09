import React from 'react';
import { NavLink } from 'react-router-dom';

const navType = [
    {
        name: "Dialer",
        path: "/dialer",
    },
    {
        name: "Productivity",
        path: "/productivity",
    },
    {
        name: "Optimization",
        path: "/optimization",
    },
    {
        name: "Reporting",
        path: "/reporting",
    },
    {
        name: "Voice Analytics",
        path: "/voiceAnalytics",
    },
    {
        name: "Management",
        path: "/management",
    },
    {
        name: "Channels",
        path: "/channels",
    },
]

const NavBar: React.FC = () => {
    const sortedType = navType.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    return (
        <nav className="nav-categories">
            <h2>{"Categories"}</h2>
            <ul className="nav-menu">
                {sortedType.map((item, index) => (
                    <NavLink to={item.path} activeClassName={"active"} key={index}>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </ul>
        </nav>
    )
};

export default NavBar;