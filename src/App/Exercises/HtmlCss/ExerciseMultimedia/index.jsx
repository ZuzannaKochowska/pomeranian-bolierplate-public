import React from 'react';
import './styles.css';

export function ExerciseMultimedia() {
  return (
    <div>
      <div className="colors">
        <h1 className="colorName">colorName</h1>
        <h1 className="shortenHex">shortenHex</h1>
        <h1 className="normalHex">normalHex</h1>
        <h1 className="rgb">rgb</h1>
        <h1 className="rgba">rgba</h1>
        <h1 className="hsl">hsl</h1>
      </div>

      <div className="opacity">
        <span> Element który jest w divie z opacity</span>
      </div>
    </div>
  );
}
