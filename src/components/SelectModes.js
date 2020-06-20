import React, { useState, useEffect } from "react";
import Mode from "./Mode";
function SelectModes() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((resp) => resp.json())
      .then((data) => {
        setModes(data);
      });
  }, []);

  return (
    <div className="selectDiv">
      <select
        className="select"
        value={selectedMode}
        onChange={(e) => setSelectedMode(e.target.value)}
      >
        <option value="Choose-a-Mode">Choose a Mode of Transport...</option>
        {modes.map((mode, index) => (
          <option key={index}>{mode.modeName}</option>
        ))}
      </select>
      {selectedMode && <Mode selectedMode={selectedMode} />}
    </div>
  );
}

export default SelectModes;
