// Photo URLs — same shots, color comes from the swatch tint applied at render time.
const G = (n) => `/products/nuage-rond/${n}.png`;

export const nuageRondProduct = {
  handle: "fauteuil-nuage-rond",
  hasColorVariants: true,
  bundle: { x1Price: 29.9, x1Compare: 49.99, x2Price: 39.9, x2Compare: 99.98, x2Badge: "-10€ supplémentaires" },
  title: "Fauteuil Nuage Rond",
  vendor: "Cosy Corner",
  price: 29.9,
  compareAtPrice: 49.99,
  currency: "EUR",
  rating: 4.4,
  reviewCount: 40000,
  badge: "DÉSTOCKAGE",
  giftLabel: "Ensemble de coussins assortis",
  giftDesc: "Trois coussins de couleur assortie offerts.",
  giftImage: "https://astrasale.com/cdn/shop/files/Gemini_Generated_Image_sk5gzesk5gzesk5g.webp?v=1774665709",
  features: [
    "Des formes qui font tourner les têtes · Silhouette ronde et enveloppante, lignes organiques. On ne s'en lasse pas.",
    "Pivotant à 360° · Orientez-le vers la télé, la fenêtre ou vos invités. Il suit votre humeur.",
    "Tissu Techno 3D premium · Doux, texturé, résistant. Un revêtement qui change tout au toucher et au regard.",
    "Une couleur pour chaque intérieur · Large palette de coloris pour s'intégrer parfaitement à votre décor.",
  ],
  variants: [
    { name: "Beige", swatch: "#e8d8c2", image: G("01") },
    { name: "Rose",  swatch: "#e8b4b8", image: G("04") },
    { name: "Noir",  swatch: "#1f1f1f", image: G("09") },
    { name: "Gris",  swatch: "#9a9a9a", image: G("11") },
    { name: "Vert",  swatch: "#7a9472", image: G("10") },
  ],
  gallery: [
    G("01"), G("05"), G("03"), G("02"), G("06"), G("07"), G("08"), G("11"), G("10"), G("09"), G("04"),
  ],
  steps: [
    { n: 1, img: "/steps/step1.gif", title: "Déballez et installez", desc: "Sortez le fauteuil de son emballage et placez chaque élément où vous le souhaitez. Pas de structure, pas de charge lourde, aucun outil nécessaire." },
    { n: 2, img: "/steps/step2.gif", title: "Laissez-le se déployer", desc: "Laissez la mousse reprendre sa forme et se déployer complètement. Cela prend généralement quelques heures pour un confort optimal." },
    { n: 3, img: "/steps/step3.gif", title: "Détendez-vous pleinement", desc: "Asseyez-vous, étirez-vous ou réorganisez-le à votre guise. Confort instantané, zéro installation, liberté totale." },
  ],
  details: [
    {
      q: "Caractéristiques techniques",
      a: [
        ["Dimensions", "Ø 90 x H. 60 cm (assise)"],
        ["Revêtement", "Tissu Techno 3D"],
        ["Garnissage", "Mousse à mémoire de forme"],
        ["Style", "Contemporain, organique"],
        ["Coloris disponibles", "Beige, Rose, Noir, Gris, Vert"],
        ["Éco-conception", "Oui"],
        ["Garantie", "30 jours satisfait ou remboursé"],
      ],
    },
    {
      q: "Contenu du colis",
      a: [
        "Tout ce qu'il vous faut pour transformer votre intérieur.",
        "✓ 1x Fauteuil Nuage Rond",
        "✓ Livraison soignée incluse",
        "✓ CADEAU OFFERT : Ensemble de 3 coussins assortis",
      ],
    },
    {
      q: "Livraison et retours gratuits",
      a: [
        "Toutes les commandes sont expédiées avec soin, avec des délais de livraison moyens de 5 à 7 jours ouvrés.",
        "Un numéro de suivi officiel vous sera fourni dès la prise en charge du colis.",
        "Vous disposez de 30 jours après réception pour nous retourner un article. Contactez simplement notre service client pour obtenir une étiquette de retour prépayée.",
      ],
    },
    {
      q: "Paiement sécurisé",
      a: [
        "Toutes les transactions effectuées sur notre site sont protégées par un chiffrement SSL 256 bits, identique à celui utilisé par les plus grandes institutions bancaires.",
        "Nous respectons les normes internationales les plus rigoureuses, telles que la certification ISO/IEC 27001 et la norme PCI-DSS.",
        "Nous collaborons exclusivement avec Stripe, PayPal et Visa/Mastercard SecureCode.",
        "Vos coordonnées bancaires ne sont jamais stockées sur nos serveurs.",
      ],
    },
    {
      q: "Garantie satisfait ou remboursé",
      a: [
        "Chaque commande est automatiquement couverte par une assurance contre la perte, le vol ou les dommages pendant le transport.",
        "Garantie satisfait ou remboursé pendant 30 jours : retournez votre produit sans conditions et recevez un remboursement complet.",
        "Les remboursements sont traités dans un délai de 5 à 7 jours ouvrés après réception du retour.",
      ],
    },
  ],
  faq: [
    { q: "Le fauteuil nécessite-t-il un montage ?", a: "Non. Sortez-le du carton, laissez-le se déployer quelques heures, et il est prêt à l'emploi." },
    { q: "Combien de temps pour qu'il prenne sa forme ?", a: "Quelques heures suffisent généralement pour que la mousse retrouve son volume optimal." },
    { q: "Quelle est la durée de livraison ?", a: "Comptez 5 à 7 jours ouvrés après validation de votre commande. Un numéro de suivi vous sera attribué." },
    { q: "Quelles sont les dimensions exactes ?", a: "Ø 90 x H. 60 cm. Un format compact idéal pour les salons, coins lecture ou chambre." },
    { q: "Le tissu est-il facile à entretenir ?", a: "Oui — un simple coup d'aspirateur et un nettoyage doux à l'éponge humide suffisent au quotidien." },
    { q: "Et si ça ne me convient pas ?", a: "30 jours pour retourner le produit, sans justification. Remboursement intégral." },
  ],
  reviews: [
    { name: "Camille R.", rating: 5, date: "Il y a 1 minute",        text: "Je l'ai vu et je l'ai commandé le même jour. Il est encore plus beau en vrai. Mon salon a une âme maintenant.",  image: G("05"), avatar: "/avatars/camille.jpg" },
    { name: "Marc D.",    rating: 5, date: "Il y a 2 minutes",       text: "La qualité du tissu est incroyable au toucher. Et le confort est dingue, on s'enfonce dedans avec bonheur.",     image: G("02"), avatar: "/avatars/marc.jpg" },
    { name: "Inès B.",    rating: 5, date: "Il y a 2 minutes",       text: "Pas besoin de montage, il a pris sa forme tout seul en quelques heures. Magique.",                              image: G("06"), avatar: "/avatars/ines.jpg" },
    { name: "Thomas L.",  rating: 5, date: "Il y a quelques minutes", text: "Tout le monde me demande d'où il vient dès qu'ils entrent chez moi. Un vrai statement piece.",                  image: G("11"), avatar: "/avatars/thomas.jpg" },
  ],
};
