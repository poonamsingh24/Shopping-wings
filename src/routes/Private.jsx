import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const { currentUser } = useAuth();
  return (
    <>{currentUser != null ? <Outlet /> : <Navigate to="/login" replace />}</>
  );
}
