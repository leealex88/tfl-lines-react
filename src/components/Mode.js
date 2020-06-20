import React, { useEffect, useState } from "react";
import Destination from "./Destination";
function Mode({
  selectedMode,
  modeDetails,
  setModeDetails,
  line,
  setLine,
  setSelectedId,
  modeId,
}) {
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
      .then((resp) => resp.json())
      .then((data) => setModeDetails(data))
      .catch(() => "error");
  }, [selectedMode]);

  console.log("modeId", modeId);
  console.log("modeDetails", modeDetails);

  return (
    <>
      {modeDetails.length !== 0 && (
        <div className="selectDiv">
          <select
            className="select"
            value={modeId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="Choose-a-Mode">Choose a Line...</option>
            {modeDetails.map((elem, index) => (
              <option key={index}>{elem.id}</option>
            ))}
          </select>
          <p>: {modeId}</p>
          {modeId && (
            <Destination modeId={modeId} line={line} setLine={setLine} />
          )}
        </div>
      )}
    </>
  );
}

export default Mode;
