import * as React from "react";
import "@/app/(dashboard)/usersetting/styles/switchbtn.css";

export default function Switchbtn({ name, checked, onChange }) {
  const handleCheckboxChange = (e) => {
    onChange({ name, checked: e.target.checked });
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}
