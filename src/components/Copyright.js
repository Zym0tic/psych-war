import React from "react";

const Copyright = () => {
  return (
    <div className=" text-accent font py-6 border-t border-[#2b2b2b]">
      <div className="container mx-auto">
        <div
          className="tracking-[0.02em] text-base"
        >
          &copy; 2024 <span className="font-semibold font-primary text-accent">PSYCH-WAR</span>{" "}
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Copyright;