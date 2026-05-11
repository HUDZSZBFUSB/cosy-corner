function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function fmt(d) {
  return d
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
    .replace(".", "");
}

export default function DeliveryTimeline() {
  const today = new Date();
  const d1 = fmt(today);
  const d2 = `${fmt(addDays(today, 1))} - ${fmt(addDays(today, 2)).split(" ")[0]}`;
  const d3 = `${fmt(addDays(today, 3))} - ${fmt(addDays(today, 5)).split(" ")[0]}`;

  return (
    <div className="mt-8">
      <div className="sober-express-card">
        <div style={{ textAlign: "center" }}>
          <span className="s-badge">Service Logistique</span>
        </div>

        <h2 className="s-title">
          Expédition <span>le jour même</span>
        </h2>

        <div className="s-wrapper">
          <div className="s-step s-step-1">
            <div className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="s-date">{d1}</div>
            <div className="s-label">Traitement</div>
          </div>

          <div className="s-line"></div>

          <div className="s-step s-step-2">
            <div className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="s-date">{d2}</div>
            <div className="s-label">En transit</div>
          </div>

          <div
            className="s-line"
            style={{ borderBottom: "1px dashed #eeeeee", background: "transparent" }}
          ></div>

          <div className="s-step s-step-3">
            <div className="s-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div className="s-date">{d3}</div>
            <div className="s-label">Livraison</div>
          </div>
        </div>

        <div className="s-footer">
          <div className="s-footer-item">Standard 48-72h</div>
          <div className="s-dot"></div>
          <div className="s-footer-item">Suivi par email</div>
        </div>
      </div>
    </div>
  );
}
