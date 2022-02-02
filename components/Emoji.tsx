import React from "react";

export default function Emoji({ symbol }) {
  return (
    <span className="" role="img" aria-label="jsx-a11y/accessible-emoji">
      {String.fromCodePoint(symbol)}
    </span>
  );
}
