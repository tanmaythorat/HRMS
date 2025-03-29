import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import DashboardStats from '../components/dashboard/DashboardStats';
import EmployeeList from '../components/employees/EmployeeList';
import AttendanceView from '../components/attendance/AttendanceView';
import LeaveManagement from '../components/leave/LeaveManagement';
import PayrollList from '../components/payroll/PayrollList';
import EmployeeRelations from '../components/relations/EmployeeRelations';
import TrainingPrograms from '../components/training/TrainingPrograms';
import Settings from '../components/settings/Settings';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Routes>
            <Route index element={<DashboardStats />} />
            <Route path="employees" element={<EmployeeList />} />
            <Route path="attendance" element={<AttendanceView />} />
            <Route path="leave" element={<LeaveManagement />} />
            <Route path="payroll" element={<PayrollList />} />
            <Route path="relations" element={<EmployeeRelations />} />
            <Route path="training" element={<TrainingPrograms />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;