"use client";
import "./layout.scss";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import {FaUser} from 'react-icons/fa6'
import {auth} from '../lib/firebaseConfig'

const DashboardLayout = ({ children }) => {

  const links = [
    { label: "gallery", path: "/dashboard/gallery", targetSegment: "gallery" },
    {
      label: "volunteer",
      path: "/dashboard/volunteer",
      targetSegment: "volunteer",
    },
    { label: "members", path: "/dashboard/members", targetSegment: "members" },
    {
      label: "donations",
      path: "/dashboard/donations",
      targetSegment: "donations",
    },
    {
      label: "settings",
      path: "/dashboard/settings",
      targetSegment: "settings",
    },
  ];

  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="layout-container">
      <div className="layout-wrapper">
        <nav>
          <div className="dashboard-profile">
            <span>{auth.currentUser?.photoURL ? <img src={auth.currentUser?.photoURL} alt="profile" /> : <FaUser />}</span>
            <span>{auth.currentUser?.displayName || 'Admin'}</span>
          </div>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  className={activeSegment == link.targetSegment ? "active" : ""}
                  href={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  )
};

export default DashboardLayout;
