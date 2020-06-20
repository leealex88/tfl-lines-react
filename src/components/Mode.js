import React, { useEffect, useState } from "react";

function Mode({ selectedMode }) {
  const [modeDetails, setModeDetails] = useState([]);
  const [modeId, setSelectedId] = useState("");

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
      .then((resp) => resp.json())
      .then((data) => setModeDetails(data))
      .catch(() => "error");
  }, [selectedMode]);

  console.log("modeId", modeId);
  console.log("modeDetails", modeDetails);

  return (
    <div className="selectDiv">
      <select
        className="select"
        value={modeId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="Choose-a-Mode">Choose a Line...</option>
        {modeDetails.map((elem) => (
          <option>{elem.id}</option>
        ))}
      </select>
      <p>you selected line: {modeId}</p>
    </div>
  );
}

export default Mode;
