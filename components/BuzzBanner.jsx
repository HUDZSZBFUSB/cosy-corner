export default function BuzzBanner() {
  return (
    <div
      className="mt-5 flex items-center gap-3.5 rounded-2xl px-4 py-3"
      style={{
        backgroundColor: "#fff5d7",
        border: "1px dotted #b88020",
      }}
    >
      <div className="shrink-0 text-2xl leading-none">🕒</div>
      <div className="text-[13px] leading-snug" style={{ color: "#281b00" }}>
        <p className="font-medium">
          On fait le <strong>buzz</strong> sur TikTok ! <strong>Dépêchez-vous !</strong>
        </p>
        <p className="text-[11px] opacity-90 mt-0.5">
          En rupture de stock en 30 secondes la dernière fois. Dépêchez-vous.
        </p>
      </div>
    </div>
  );
}
