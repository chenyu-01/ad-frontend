import * as React from "react";
import "@/app/(dashboard)/usersetting/styles/switchbtn.css";

export default function Switchbtn({ name, value, onChange }) {
  const handleCheckboxChange = (e) => {
    console.log("Eventbtn:", e);

    onChange({ name, value: e.target.checked });
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}
