import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Button from "./Button";

export default function Logout() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    toast.success("Logout Successful");
    navigate("/login");
  };
  const { logout } = useAuth();
  return (
    <Button varient="seccondary" onClick={logoutHandler}>
      Logout
    </Button>
  );
}
