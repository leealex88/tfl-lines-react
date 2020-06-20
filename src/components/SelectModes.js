import React, { useState, useEffect } from "react";
import Mode from "./Mode";
import Header from "./Header";
function SelectModes() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  const [modeDetails, setModeDetails] = useState([]);
  const [line, setLine] = useState(null);
  const [modeId, setSelectedId] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((resp) => resp.json())
      .then((data) => {
        setModes(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="selectDiv">
        <select
          className="select"
          value={selectedMode}
          onChange={(e) => {
            setModeDetails("");
            setLine("");
            setSelectedId("");
            setSelectedMode(e.target.value);
          }}
        >
          <option value="Choose-a-Mode">Choose a Mode of Transport...</option>
          {modes.map((mode, index) => (
            <option key={index}>{mode.modeName}</option>
          ))}
        </select>
        {selectedMode ? (
          <Mode
            selectedMode={selectedMode}
            modeDetails={modeDetails}
            setModeDetails={setModeDetails}
            line={line}
            setLine={setLine}
            modeId={modeId}
            setSelectedId={setSelectedId}
          />
        ) : null}
      </div>
    </>
  );
}

export default SelectModes;
