import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container" style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
    }}>
      {/* Hamburger Menu for Mobile */}
      <button
        className="menu-toggle"
        onClick={toggleSidebar}
        style={{
          display: 'none',
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1000,
          padding: '0.5rem',
          background: '#007bff',
          border: 'none',
          borderRadius: '4px',
          color: 'white',
          cursor: 'pointer',
          '@media (max-width: 768px)': {
            display: 'block',
          }
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#f8f9fa',
        transition: 'transform 0.3s ease',
        '@media (max-width: 768px)': {
          position: 'fixed',
          height: '100%',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          zIndex: 999,
        }
      }}>
        <Sidebar
          component={component}
          setComponent={(comp) => {
            setComponent(comp);
            if (window.innerWidth <= 768) {
              setIsSidebarOpen(false);
            }
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '2rem',
        backgroundColor: '#ffffff',
        '@media (max-width: 768px)': {
          padding: '1rem',
          paddingTop: '4rem',
        }
      }}>
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Update Blog" ? (
          <UpdateBlog />
        ) : (
          <MyBlogs />
        )}
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998,
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block',
            }
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
