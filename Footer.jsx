export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="container-page py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-black text-[18px] tracking-[-0.03em] uppercase mb-3">ScreenLab</div>
            <p className="text-neutral-600 leading-relaxed">
              Des pièces design, triées sur le volet, livrées en quelques jours dans toute l'Europe.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Aide</div>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="/contact" className="hover:text-black">Contact</a></li>
              <li><a href="/#faq" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Suivi de commande</a></li>
              <li><a href="#" className="hover:text-black">Retours</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Légal</div>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-black">Mentions légales</a></li>
              <li><a href="#" className="hover:text-black">CGV</a></li>
              <li><a href="#" className="hover:text-black">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} ScreenLab. Tous droits réservés.</div>
          <div className="flex items-center gap-2">
            <span>Paiement sécurisé</span>
            <span className="inline-flex gap-1">
              {["Visa", "MC", "AmEx", "PP", "Apple"].map((p) => (
                <span key={p} className="border border-neutral-300 rounded px-1.5 py-0.5 text-[10px] text-neutral-600">
                  {p}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
