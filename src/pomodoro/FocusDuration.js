import React from "react";
import { minutesToDuration } from "../utils/duration";

function FocusDuration({ session, handleChange, focusDuration }) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          disabled={session}
          id="decrease-focus"
          onClick={handleChange}
        >
          <span id="decrease-focus" className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          disabled={session}
          id="increase-focus"
          onClick={handleChange}
        >
          <span id="increase-focus" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default FocusDuration;
