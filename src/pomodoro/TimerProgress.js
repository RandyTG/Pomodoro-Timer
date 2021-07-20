import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

function TimerProgress({
  session,
  focusDuration,
  breakDuration,
  isTimerRunning,
}) {
  if (session) {
    return (
      <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {minutesToDuration(
                session?.label === "Focusing" ? focusDuration : breakDuration
              )}{" "}
              minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {isTimerRunning ? null : <p>PAUSED</p>}
          </div>
        </div>
        <ProgressBar
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
      </div>
    );
  }
  return null;
}

export default TimerProgress;
