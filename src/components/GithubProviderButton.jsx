import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubProviderButton({ lable, ...props }) {
  return (
    <div className=" flex items-center gap-2 justify-center border-2 rounded hover:bg-gray-100 transition-colors">
      <FaGithub size={20} />
      <button {...props} className="text-gray-800 font-medium py-2 ">
        Sign In With Github
      </button>
    </div>
  );
}
