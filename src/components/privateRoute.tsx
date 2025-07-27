// components/PrivateRoute.tsx
import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

export function AdminRoute({ children }: { children: JSX.Element }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;
  return isAdmin ? children : <Navigate to="/user-dashboard" />;
};
