import React from "react";

export default function Focus() {
  const ref = React.useRef();
  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <div className="App">
      <input ref={ref} placeholder="write" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export { Focus };
