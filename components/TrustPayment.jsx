function Visa() {
  return (
    <span style={{ color: "#1A1F71", fontStyle: "italic", fontWeight: 900, fontSize: 13, fontFamily: "Arial, sans-serif", letterSpacing: -0.5 }}>
      VISA
    </span>
  );
}

function Mastercard() {
  return (
    <svg width="30" height="20" viewBox="0 0 44 28" fill="none">
      <circle cx="16" cy="14" r="13" fill="#EB001B" />
      <circle cx="28" cy="14" r="13" fill="#F79E1B" />
      <path d="M22 4.8a13 13 0 0 1 0 18.4A13 13 0 0 1 22 4.8z" fill="#FF5F00" />
    </svg>
  );
}

function Amex() {
  return (
    <span style={{ color: "white", fontWeight: 900, fontSize: 10, letterSpacing: 1.5, fontFamily: "Arial, sans-serif" }}>
      AMEX
    </span>
  );
}

function PayPal() {
  return (
    <span style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: 11 }}>
      <span style={{ color: "#003087" }}>Pay</span><span style={{ color: "#009cde" }}>Pal</span>
    </span>
  );
}

function ApplePay() {
  return (
    <span style={{ fontFamily: "-apple-system, 'Helvetica Neue', Arial, sans-serif", fontWeight: 600, fontSize: 11, color: "white", display: "flex", alignItems: "center", gap: 2 }}>
      <svg width="9" height="11" viewBox="0 0 14 17" fill="white">
        <path d="M11.9 5.8c-.8 1-2 .9-2 .9s-.2-1.1.6-2c.7-.8 1.9-1.3 1.9-1.3s.3 1.4-.5 2.4zM12.3 7c-.3 0-1.5-.1-2.4.7-.9.7-1.1 1.8-1.1 1.8S10.1 9 11 9.3c.9.3 1.6 1.1 1.6 1.1s.3-.7.3-1.7c0-.8-.3-1.5-.6-1.7zm-4.7.5C6.1 7.5 4.3 9 4.3 9s-1-1.3-2.4-1.3C.5 7.7 0 9.5 0 10.5c0 3 2.5 6.5 3.6 6.5.5 0 1-.5 1.9-.5.9 0 1.4.5 2 .5 1.4 0 3.4-3.5 3.4-3.5s-1-.4-1.5-1.4c-.5-1-.3-2.6.4-3.2-.4-.8-1.5-1.4-2.2-1.4z"/>
      </svg>
      Pay
    </span>
  );
}

function GooglePay() {
  return (
    <span style={{ fontFamily: "Arial, sans-serif", fontWeight: 500, fontSize: 11, display: "flex", alignItems: "center", gap: 0 }}>
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
      <span style={{ color: "#000", fontWeight: 600, marginLeft: 3 }}>Pay</span>
    </span>
  );
}

const LOGOS = [
  { name: "Visa",       bg: "#fff",     render: <Visa /> },
  { name: "Mastercard", bg: "#fff",     render: <Mastercard /> },
  { name: "AMEX",       bg: "#007BC1",  render: <Amex /> },
  { name: "PayPal",     bg: "#fff",     render: <PayPal /> },
  { name: "Apple Pay",  bg: "#000",     render: <ApplePay /> },
  { name: "Google Pay", bg: "#fff",     render: <GooglePay /> },
];

export default function TrustPayment() {
  return (
    <div className="trust-wrapper">
      <div className="trust-block">
        <div className="badges-grid">
          <div className="badge">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l4-4 4 4M7 5v14" />
                <path d="M21 15l-4 4-4-4M17 19V5" />
              </svg>
            </div>
            <div className="badge-info">
              <span className="badge-title">Retours gratuits</span>
              <span className="badge-sub">Sous 30 jours</span>
            </div>
          </div>

          <div className="badge">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="badge-info">
              <span className="badge-title">Paiement sécurisé</span>
              <span className="badge-sub">Crypté SSL 256-bit</span>
            </div>
          </div>

          <div className="badge">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="badge-info">
              <span className="badge-title">Livraison express</span>
              <span className="badge-sub">Offerte dès 29€</span>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <span className="pay-label">Moyens de paiement acceptés</span>
          <div style={{ display: "flex", flexWrap: "nowrap", gap: 5, justifyContent: "center", marginTop: 10 }}>
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                title={logo.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 22,
                  minWidth: 34,
                  padding: "0 5px",
                  background: logo.bg,
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 6,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
                  flexShrink: 0,
                }}
              >
                {logo.render}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
