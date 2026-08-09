import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./Cursor.scss";

function Cursor() {
  const cursorRef = useRef(null);
  const cursorActive = useSelector((state) => state.app.cursorActive);

  useEffect(() => {
    return (
      <div
        className={`cursor ${cursorActive ? "cursor--active" : ""}`}
        ref={cursorRef}
      ></div>
    );
  });
}

export default Cursor;
