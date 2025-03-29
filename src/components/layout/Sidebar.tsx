import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  ClipboardList,
  Calendar,
  DollarSign,
  Heart,
  GraduationCap,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Employees', path: '/dashboard/employees' },
    { icon: ClipboardList, label: 'Attendance', path: '/dashboard/attendance' },
    { icon: Calendar, label: 'Leave Management', path: '/dashboard/leave' },
    { icon: DollarSign, label: 'Payroll', path: '/dashboard/payroll' },
    { icon: Heart, label: 'Employee Relations', path: '/dashboard/relations' },
    { icon: GraduationCap, label: 'Training', path: '/dashboard/training' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
  ];

  return (
    <div className={`
      fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:relative md:translate-x-0
    `}>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">HRMS</h1>
        <button 
          onClick={onClose}
          className="md:hidden text-gray-300 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => onClose()}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={() => window.location.href = '/login'}
          className="flex items-center space-x-3 text-gray-300 hover:text-white w-full p-2 rounded-lg hover:bg-gray-700"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;