import React from "react";
import Select from "react-select";
import "../Styles/Navbar.css";

const Navbar = ({
  userLang,
  setUserLang,
 
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  return (
    <div className="navbar">
      <h1>Code Compiler</h1>
      <Select
        options={languages}
        value={userLang}
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
    
     
    </div>
  );
};

export default Navbar;
