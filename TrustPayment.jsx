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
          <div className="payment-logos">
            <div className="pill visa"><span>VISA</span></div>
            <div className="pill">
              <div className="mc">
                <div className="mc-r"></div>
                <div className="mc-y"></div>
              </div>
            </div>
            <div className="pill amex"><span>AMEX</span></div>
            <div className="pill paypal"><span>Pay<em>Pal</em></span></div>
            <div className="pill apple"><span>Pay</span></div>
            <div className="pill gpay">
              <span>
                <span className="g1">G</span>
                <span className="g2">o</span>
                <span className="g3">o</span>
                <span className="g4">g</span>
                <span className="g5">l</span>
                <span className="g6">e</span>{" "}
                <span className="gp">Pay</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
