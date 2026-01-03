import { useState } from "react";
// step-1 : create componant
export default function Batsman() {
  // step-2 : use setState and array distructurung
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    // call the set run with varibale
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(updatedRuns);
  };

  return (
    <div>
      <h3>Player : Bangla Batsman</h3>
      <p>
        <small>Sixes : {sixes}</small>
      </p>

      {runs > 50 && <p>Your score : 50</p>}

      {/* .........step-3 */}
      <h1>Score : {runs} </h1>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
