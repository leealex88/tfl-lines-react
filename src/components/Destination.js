import React, { useEffect } from "react";

function Destination({ modeId, line, setLine }) {
  console.log("modeId destination", modeId);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${modeId}/Route`).then((resp) =>
      resp.json().then((data) => {
        setLine(data);
        console.log("destination", data);
      })
    );
  }, [modeId]);

  console.log("line", line);

  return (
    <>
      {line ? (
        <div>
          <div>START OF LINE: {line.routeSections[0].originationName}</div>
          <div>END OF LINE: {line.routeSections[0].destinationName}</div>
        </div>
      ) : null}
    </>
  );
}

export default Destination;

// { console.log("route", line.routeSections[0].destinationName) }
