import "../styles/UnlockNotice.css";
import { ShieldCheck } from "lucide-react";

function UnlockNotice() {
  return (
    <div className="unlock-wrapper">
      <div className="unlock-notice">
        <div className="unlock-left">
          <div className="unlock-icon">
            <ShieldCheck size={18} />
          </div>

          <p className="unlock-text">
            <span className="unlock-strong">
              🌸List at least 1 item to unlock renting
            </span>
            <span className="unlock-muted">
              {" "}— Build trust in our community!
            </span>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default UnlockNotice;
