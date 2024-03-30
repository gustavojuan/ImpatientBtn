import React, { useState } from "react";
import "./ImpatientBtn.css";

const ImpatientBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);

    executeCall().then((response) => {
      setIsActive(false);
    });
  };

  const executeCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  return (
    <button onClick={handleClick} className={isActive ? "active" : ""}>
      Soy Impaciente{isActive ? " y espero" : ""}
    </button>
  );
};

export default ImpatientBtn;
