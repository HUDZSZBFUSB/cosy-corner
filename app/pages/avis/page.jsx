export const metadata = {
  title: "Avis clients — Cosy Corner",
  description: "Plus de 20 000 avis vérifiés sur le 3D Bubble Sofa Mini. Note moyenne 4,4/5 sur Trustpilot.",
};

const REVIEWS = [
  { name: "Camille R.", city: "Paris", rating: 5, date: "il y a 2 jours", title: "Un coup de cœur absolu", text: "Je ne pensais pas que ça allait autant changer mon salon. Le fauteuil est encore plus beau en vrai qu'en photo. Tout le monde me demande où je l'ai trouvé." },
  { name: "Marc D.", city: "Lyon", rating: 5, date: "il y a 3 jours", title: "Qualité bluffante", text: "Le tissu Techno 3D est incroyable au toucher. Doux, résistant, et il garde sa forme. La base pivotante est un vrai plus au quotidien." },
  { name: "Inès B.", city: "Bordeaux", rating: 5, date: "il y a 4 jours", title: "Meilleure décision déco", text: "J'hésitais entre plusieurs coloris. J'ai pris le vert et c'est la meilleure décision déco que j'aie prise. Il ancre toute la pièce." },
  { name: "Thomas L.", city: "Marseille", rating: 5, date: "il y a 5 jours", title: "Mes invités sont jaloux", text: "Tout le monde me demande d'où il vient dès qu'ils entrent chez moi. C'est exactement l'effet que je cherchais." },
  { name: "Sophie M.", city: "Nantes", rating: 5, date: "il y a 6 jours", title: "Livraison rapide, qualité top", text: "Commandé un vendredi, reçu le mardi. Emballage soigné, aucun dommage. La qualité est au rendez-vous, rien à redire." },
  { name: "Julien F.", city: "Toulouse", rating: 4, date: "il y a 1 semaine", title: "Très bien, juste une petite chose", text: "Le fauteuil est superbe et confortable. Je retire une étoile car le délai de livraison a été légèrement plus long que prévu, mais ça valait l'attente." },
  { name: "Aurélie G.", city: "Strasbourg", rating: 5, date: "il y a 1 semaine", title: "Je l'adore !", text: "Acheté il y a une semaine et je suis déjà accro. Le confort est là, le style aussi. Je recommande sans hésiter." },
  { name: "Nicolas P.", city: "Nice", rating: 5, date: "il y a 1 semaine", title: "Parfait pour mon salon", text: "J'avais peur que ce soit trop grand, mais c'est la taille idéale. La rotation 360° est vraiment pratique." },
  { name: "Emma T.", city: "Lille", rating: 5, date: "il y a 8 jours", title: "Un fauteuil hors du commun", text: "Impossible de trouver quelque chose d'aussi beau et confortable ailleurs au même prix. Vraiment impressionnée." },
  { name: "Lucas B.", city: "Rennes", rating: 5, date: "il y a 9 jours", title: "Mon coin détente préféré", text: "J'y passe mes soirées entières. Le tissu est doux, la forme enveloppante. C'est mon nouveau coin préféré de l'appartement." },
  { name: "Manon S.", city: "Montpellier", rating: 5, date: "il y a 10 jours", title: "Exactement comme sur les photos", text: "Pas de mauvaise surprise : c'est exactement ce qu'on voit en photo. Couleur fidèle, finitions propres." },
  { name: "Antoine V.", city: "Paris", rating: 5, date: "il y a 10 jours", title: "Un vrai statement pièce", text: "Ce fauteuil est devenu la pièce maîtresse de mon salon. Chaque visiteur le remarque en premier. Très content de mon achat." },
  { name: "Chloé D.", city: "Lyon", rating: 4, date: "il y a 11 jours", title: "Beau et confortable", text: "Je suis très contente de mon achat. Le seul bémol est que l'assemblage demande un peu de patience, mais le résultat est superbe." },
  { name: "Maxime L.", city: "Bordeaux", rating: 5, date: "il y a 12 jours", title: "Livraison parfaite", text: "Livré en parfait état, emballage protecteur de qualité. Le fauteuil est magnifique, correspond parfaitement à la description." },
  { name: "Léa M.", city: "Nantes", rating: 5, date: "il y a 2 semaines", title: "Je recommande à 100%", text: "Achat impulsif et pourtant c'est la meilleure décision que j'ai prise. Le tissu est d'une qualité remarquable." },
  { name: "Romain K.", city: "Marseille", rating: 5, date: "il y a 2 semaines", title: "Confort exceptionnel", text: "Après une longue journée de travail, ce fauteuil est un vrai refuge. Le confort est exceptionnel, la mousse garde bien la forme." },
  { name: "Julie H.", city: "Toulouse", rating: 5, date: "il y a 2 semaines", title: "Design unique", text: "Je cherchais quelque chose d'original et je l'ai trouvé. Le design rond est vraiment unique, je n'ai rien vu de pareil en magasin." },
  { name: "Pierre N.", city: "Strasbourg", rating: 5, date: "il y a 2 semaines", title: "Service client au top", text: "Petit problème de livraison résolu en 24h par le service client. Très réactif et professionnel. Le fauteuil est splendide." },
  { name: "Sarah C.", city: "Nice", rating: 5, date: "il y a 15 jours", title: "Un fauteuil qui fait parler", text: "Depuis que j'ai ce fauteuil, mes amis me demandent tous la référence. C'est le meilleur compliment possible !" },
  { name: "Hugo A.", city: "Lille", rating: 4, date: "il y a 15 jours", title: "Très satisfait", text: "Le fauteuil est beau et confortable. Je lui mets 4 étoiles car j'aurais aimé plus de choix de coloris, mais la qualité est indéniable." },
  { name: "Laure B.", city: "Rennes", rating: 5, date: "il y a 16 jours", title: "Coup de cœur immédiat", text: "Dès que je l'ai déballé, j'ai su que j'avais fait le bon choix. La texture du tissu est vraiment particulière et agréable." },
  { name: "Kevin D.", city: "Montpellier", rating: 5, date: "il y a 17 jours", title: "Top qualité", text: "On voit que c'est bien fabriqué. Rien ne bouge, rien ne craque. La base pivotante est fluide et bien construite." },
  { name: "Amandine P.", city: "Paris", rating: 5, date: "il y a 18 jours", title: "Parfait pour lire", text: "Je l'ai posé dans mon coin lecture et c'est devenu mon endroit préféré. Confortable pour de longues sessions." },
  { name: "Florian R.", city: "Lyon", rating: 5, date: "il y a 3 semaines", title: "Vraiment top", text: "Prix correct pour une qualité premium. Je m'attendais à moins bien pour ce tarif. Très bonne surprise." },
  { name: "Melissa G.", city: "Bordeaux", rating: 5, date: "il y a 3 semaines", title: "Mon salon est transformé", text: "Ce fauteuil a totalement transformé l'ambiance de mon salon. Il apporte du caractère et de la chaleur." },
  { name: "Théo F.", city: "Nantes", rating: 5, date: "il y a 3 semaines", title: "Très bonne qualité", text: "Le tissu ne se froisse pas, les coutures sont propres. On sent que c'est du matériel pensé pour durer." },
  { name: "Clara W.", city: "Marseille", rating: 5, date: "il y a 3 semaines", title: "Design que j'adore", text: "La forme ronde donne vraiment un style contemporain à la pièce. Je suis ravie de mon choix de coloris rose." },
  { name: "Alexis M.", city: "Toulouse", rating: 4, date: "il y a 22 jours", title: "Bon rapport qualité/prix", text: "Fauteuil de qualité à un prix abordable. Quelques petits points d'amélioration possibles mais dans l'ensemble très satisfait." },
  { name: "Marine L.", city: "Strasbourg", rating: 5, date: "il y a 23 jours", title: "Superbe produit", text: "Je l'ai acheté pour agrémenter ma chambre et c'est une réussite totale. Élégant, confortable, parfait." },
  { name: "Baptiste V.", city: "Nice", rating: 5, date: "il y a 24 jours", title: "Livraison soignée", text: "Livré dans un emballage solide, aucun dommage. Montage simple. Le fauteuil est à la hauteur des attentes." },
  { name: "Pauline T.", city: "Lille", rating: 5, date: "il y a 25 jours", title: "Je recommande !", text: "Achat recommandé à tous ceux qui cherchent un fauteuil original et confortable. Vous ne serez pas déçus." },
  { name: "Enzo B.", city: "Rennes", rating: 5, date: "il y a 26 jours", title: "Excellent confort", text: "Je travaille en télétravail et j'utilise ce fauteuil pour mes pauses. Le confort est vraiment excellent." },
  { name: "Océane K.", city: "Montpellier", rating: 5, date: "il y a 27 jours", title: "Magnifique", text: "Magnifique fauteuil, conforme aux photos. Le tissu est doux et agréable. Je suis très contente." },
  { name: "Nathan C.", city: "Paris", rating: 5, date: "il y a 28 jours", title: "Mon meilleur achat", text: "C'est définitivement le meilleur achat de l'année. Original, confortable et bien fabriqué. Aucun regret." },
  { name: "Laura H.", city: "Lyon", rating: 5, date: "il y a 1 mois", title: "Très élégant", text: "Ce fauteuil apporte une touche d'élégance à n'importe quelle pièce. Je l'ai mis dans mon salon et c'est une réussite." },
  { name: "Tristan N.", city: "Bordeaux", rating: 5, date: "il y a 1 mois", title: "Super produit", text: "Je suis vraiment impressionné par la qualité. Le tissu est premium et la construction est solide. Bravo." },
  { name: "Jade A.", city: "Nantes", rating: 4, date: "il y a 1 mois", title: "Bien mais quelques points", text: "Le fauteuil est beau et confortable. Livraison un poil longue mais le service client était réactif. Je recommande." },
  { name: "Guillaume S.", city: "Marseille", rating: 5, date: "il y a 1 mois", title: "Style incomparable", text: "Impossible de trouver quelque chose d'aussi stylé ailleurs. Ce fauteuil est unique et c'est ce que je voulais." },
  { name: "Anaïs D.", city: "Toulouse", rating: 5, date: "il y a 1 mois", title: "Confort premium", text: "On s'y assoit et on ne veut plus se lever. La mousse est de bonne qualité et la forme est vraiment ergonomique." },
  { name: "Simon P.", city: "Strasbourg", rating: 5, date: "il y a 1 mois", title: "Au-delà des attentes", text: "Je ne pensais pas avoir un produit aussi qualitatif. Le rendu en vrai dépasse les photos. Très satisfait." },
  { name: "Elisa R.", city: "Nice", rating: 5, date: "il y a 1 mois", title: "Fauteuil parfait", text: "Exactement ce que je cherchais. Original, confortable et les finitions sont impeccables. Je recommande vivement." },
  { name: "Corentin M.", city: "Lille", rating: 5, date: "il y a 5 semaines", title: "Un beau cadeau", text: "Offert à ma femme pour son anniversaire. Elle a adoré du premier regard. Livraison rapide et bien emballé." },
  { name: "Margaux F.", city: "Rennes", rating: 5, date: "il y a 5 semaines", title: "Superbe rendu", text: "Le rendu dans mon salon est superbe. La couleur est fidèle aux photos et le tissu est vraiment agréable." },
  { name: "Edouard L.", city: "Montpellier", rating: 5, date: "il y a 5 semaines", title: "Très bon fauteuil", text: "Très bon fauteuil, bien fait, solide. La rotation à 360° est fluide et bien pensée. Je recommande." },
  { name: "Noémie B.", city: "Paris", rating: 5, date: "il y a 5 semaines", title: "Je l'adore", text: "J'adore ce fauteuil ! Il est confortable, beau et unique. Le tissu 3D est vraiment particulier et agréable." },
  { name: "Valentin G.", city: "Lyon", rating: 4, date: "il y a 6 semaines", title: "Satisfait de mon achat", text: "Fauteuil de bonne qualité, conforme à la description. La livraison a pris quelques jours de plus que prévu." },
  { name: "Mathilde H.", city: "Bordeaux", rating: 5, date: "il y a 6 semaines", title: "Design original", text: "Ce fauteuil est vraiment original. Il apporte une touche moderne et raffinée à n'importe quel intérieur." },
  { name: "Raphaël K.", city: "Nantes", rating: 5, date: "il y a 6 semaines", title: "Excellent produit", text: "Excellent produit à tous les niveaux : design, confort, qualité. Je suis vraiment content de mon achat." },
  { name: "Lucie W.", city: "Marseille", rating: 5, date: "il y a 6 semaines", title: "Top !", text: "Top produit, top service. Rien à redire. Je commanderai de nouveau sur ce site sans hésiter." },
  { name: "Damien C.", city: "Toulouse", rating: 5, date: "il y a 7 semaines", title: "Très beau fauteuil", text: "Très beau fauteuil, qualité premium. Ma femme en est tombée amoureuse dès qu'elle l'a vu. Parfait." },
  { name: "Charlène V.", city: "Strasbourg", rating: 5, date: "il y a 7 semaines", title: "Achat réussi", text: "Je suis ravie de mon achat. Le fauteuil est beau, confortable et bien fabriqué. Je recommande à tous." },
  { name: "Arthur T.", city: "Nice", rating: 5, date: "il y a 7 semaines", title: "Magnifique rendu", text: "Le rendu dans ma pièce est magnifique. Ce fauteuil attire tous les regards et tout le monde veut s'y asseoir." },
  { name: "Fiona N.", city: "Lille", rating: 5, date: "il y a 7 semaines", title: "Coup de cœur", text: "Coup de cœur total. Je ne m'attendais pas à un tel niveau de qualité. Le tissu est vraiment premium." },
  { name: "Clément A.", city: "Rennes", rating: 4, date: "il y a 2 mois", title: "Bon produit", text: "Bon produit dans l'ensemble. Confortable et beau. J'aurais aimé un guide d'assemblage plus détaillé." },
  { name: "Camille S.", city: "Montpellier", rating: 5, date: "il y a 2 mois", title: "Livraison impeccable", text: "Livraison rapide et soignée. Le fauteuil est arrivé sans aucun dommage dans un emballage très protecteur." },
  { name: "Dylan M.", city: "Paris", rating: 5, date: "il y a 2 mois", title: "Style et confort", text: "Ce fauteuil combine parfaitement style et confort. C'est rare de trouver les deux ensemble à ce prix." },
  { name: "Paulette R.", city: "Lyon", rating: 5, date: "il y a 2 mois", title: "Très contente", text: "Très contente de mon achat. Le fauteuil est beau, solide et confortable. Je le recommande sans hésiter." },
  { name: "Fabien D.", city: "Bordeaux", rating: 5, date: "il y a 2 mois", title: "Fauteuil de caractère", text: "C'est vraiment un fauteuil de caractère qui transforme instantanément une pièce. Très satisfait." },
  { name: "Stéphanie L.", city: "Nantes", rating: 5, date: "il y a 2 mois", title: "Parfait", text: "Parfait à tous les niveaux. Je n'ai rien à redire. C'est exactement ce que je cherchais." },
  { name: "Jonathan B.", city: "Marseille", rating: 5, date: "il y a 2 mois", title: "Super achat", text: "Super achat ! Je suis très content. Le fauteuil est beau, confortable et la livraison était rapide." },
  { name: "Céline G.", city: "Toulouse", rating: 4, date: "il y a 2 mois", title: "Bien dans l'ensemble", text: "Fauteuil confortable et beau. Quelques petites imperfections de finition mais rien de majeur. Bien." },
  { name: "Thierry F.", city: "Strasbourg", rating: 5, date: "il y a 2 mois", title: "Très bon produit", text: "Très bon produit. Le tissu Techno 3D est vraiment qualitatif et agréable. Je recommande vivement." },
  { name: "Isabelle P.", city: "Nice", rating: 5, date: "il y a 3 mois", title: "Un vrai bijou de déco", text: "Ce fauteuil est un vrai bijou de décoration. Il apporte une touche artistique unique à mon salon." },
  { name: "Matthieu N.", city: "Lille", rating: 5, date: "il y a 3 mois", title: "Excellent rapport qualité/prix", text: "Excellent rapport qualité/prix. Pour ce tarif, vous avez un fauteuil vraiment premium. Je ne regrette pas." },
  { name: "Victoire A.", city: "Rennes", rating: 5, date: "il y a 3 mois", title: "Très satisfaite", text: "Très satisfaite de mon achat. Le fauteuil est exactement comme décrit. Beau, confortable, bien fait." },
  { name: "Sébastien C.", city: "Montpellier", rating: 5, date: "il y a 3 mois", title: "Superbe", text: "Superbe fauteuil. Tout le monde dans ma famille voulait le même après l'avoir vu chez moi." },
  { name: "Nathalie M.", city: "Paris", rating: 5, date: "il y a 3 mois", title: "Je suis conquise", text: "Je suis totalement conquise. Ce fauteuil est exactement ce que je cherchais depuis des mois." },
  { name: "Grégoire R.", city: "Lyon", rating: 4, date: "il y a 3 mois", title: "Très bien", text: "Très bien, je suis content. Le confort est au rendez-vous et le design est vraiment original." },
  { name: "Amélie D.", city: "Bordeaux", rating: 5, date: "il y a 3 mois", title: "Un fauteuil d'exception", text: "Un fauteuil d'exception à un prix accessible. Je suis bluffée par la qualité du tissu et des finitions." },
  { name: "Thibault K.", city: "Nantes", rating: 5, date: "il y a 3 mois", title: "Achat irréprochable", text: "Achat irréprochable. La livraison a été rapide, l'emballage soigné et le produit est à la hauteur." },
  { name: "Virginie W.", city: "Marseille", rating: 5, date: "il y a 4 mois", title: "Vraiment superbe", text: "Vraiment superbe. Ce fauteuil a une présence dans une pièce. C'est le genre d'achat dont on ne se lasse pas." },
  { name: "Christophe H.", city: "Toulouse", rating: 5, date: "il y a 4 mois", title: "Excellent", text: "Excellent fauteuil. La rotation est vraiment fluide et le tissu est d'une qualité remarquable." },
  { name: "Sandrine T.", city: "Strasbourg", rating: 5, date: "il y a 4 mois", title: "Parfait pour mon bureau", text: "Je l'ai mis dans mon bureau pour les pauses. C'est parfait, confortable et ça change de la chaise de bureau." },
  { name: "Olivier N.", city: "Nice", rating: 5, date: "il y a 4 mois", title: "Très bonne qualité", text: "Très bonne qualité de fabrication. On sent que les matériaux sont choisis avec soin. Je recommande." },
  { name: "Brigitte A.", city: "Lille", rating: 5, date: "il y a 4 mois", title: "Je suis ravie", text: "Je suis ravie de mon achat. Ce fauteuil est exactement ce qu'il me fallait pour mon salon." },
  { name: "Denis S.", city: "Rennes", rating: 4, date: "il y a 4 mois", title: "Satisfait", text: "Satisfait de mon achat. Le fauteuil est beau et confortable. La livraison a été un peu lente mais rien de grave." },
  { name: "Caroline M.", city: "Montpellier", rating: 5, date: "il y a 4 mois", title: "Un must-have", text: "Ce fauteuil est un vrai must-have pour tout amateur de déco moderne. Je ne peux plus m'en passer." },
  { name: "Patrice R.", city: "Paris", rating: 5, date: "il y a 4 mois", title: "Très beau", text: "Très beau fauteuil, parfaitement conforme aux photos. Je suis très content de mon achat." },
  { name: "Mélanie D.", city: "Lyon", rating: 5, date: "il y a 5 mois", title: "Adorable", text: "Adorable, confortable et original. Ce fauteuil est une vraie petite merveille. Je le recommande à tous." },
  { name: "Laurent L.", city: "Bordeaux", rating: 5, date: "il y a 5 mois", title: "Top produit", text: "Top produit à tous les niveaux. La rotation 360° est un vrai luxe au quotidien. Très satisfait." },
  { name: "Véronique B.", city: "Nantes", rating: 5, date: "il y a 5 mois", title: "Achat réussi", text: "Achat réussi. Le fauteuil est beau, confortable et bien construit. Je ne regrette pas un seul instant." },
  { name: "François G.", city: "Marseille", rating: 5, date: "il y a 5 mois", title: "Super qualité", text: "Super qualité de fabrication. On voit que c'est du sérieux. Je recommande sans aucune hésitation." },
  { name: "Patricia F.", city: "Toulouse", rating: 5, date: "il y a 5 mois", title: "Magnifique fauteuil", text: "Magnifique fauteuil. Il a transformé mon salon. Tout le monde le remarque et veut savoir où je l'ai acheté." },
  { name: "Michel P.", city: "Strasbourg", rating: 4, date: "il y a 5 mois", title: "Très bien", text: "Très bien dans l'ensemble. Le fauteuil est beau et confortable. Quelques jours de livraison supplémentaires." },
  { name: "Sylvie N.", city: "Nice", rating: 5, date: "il y a 5 mois", title: "Je suis enchantée", text: "Je suis totalement enchantée. Ce fauteuil est magnifique et confortable. C'est un vrai coup de cœur." },
  { name: "Jean-Pierre A.", city: "Lille", rating: 5, date: "il y a 6 mois", title: "Excellent achat", text: "Excellent achat. La qualité est au rendez-vous et le design est vraiment unique. Je recommande." },
  { name: "Isabeau C.", city: "Rennes", rating: 5, date: "il y a 6 mois", title: "Parfait", text: "Parfait. Rien à ajouter. Ce fauteuil est exactement ce que je cherchais et il dépasse mes attentes." },
  { name: "René M.", city: "Montpellier", rating: 5, date: "il y a 6 mois", title: "Super", text: "Super fauteuil. Très confortable, beau design et bonne qualité. Je suis très content de mon achat." },
  { name: "Geneviève R.", city: "Paris", rating: 5, date: "il y a 6 mois", title: "Je recommande vivement", text: "Je recommande vivement ce fauteuil. Il est beau, confortable et la qualité est vraiment au rendez-vous." },
  { name: "Claude D.", city: "Lyon", rating: 5, date: "il y a 6 mois", title: "Très satisfait", text: "Très satisfait de mon achat. Le fauteuil est exactement comme sur les photos. Belle qualité." },
  { name: "Monique L.", city: "Bordeaux", rating: 4, date: "il y a 6 mois", title: "Bien", text: "Bien dans l'ensemble. Confortable et beau. Je suis contente de mon achat même si la livraison a pris du temps." },
  { name: "Bernard B.", city: "Nantes", rating: 5, date: "il y a 7 mois", title: "Très beau produit", text: "Très beau produit. La qualité du tissu est vraiment remarquable et le confort est excellent." },
  { name: "Jacqueline G.", city: "Marseille", rating: 5, date: "il y a 7 mois", title: "Splendide", text: "Ce fauteuil est splendide. Il a transformé mon salon. Je suis vraiment ravie de mon achat." },
  { name: "Robert F.", city: "Toulouse", rating: 5, date: "il y a 7 mois", title: "Très bon achat", text: "Très bon achat. Le fauteuil est beau, confortable et bien fabriqué. Je le recommande à tous." },
  { name: "Yvette P.", city: "Strasbourg", rating: 5, date: "il y a 7 mois", title: "Excellent", text: "Excellent fauteuil. La rotation est parfaitement fluide et le tissu est d'une qualité remarquable." },
  { name: "Henri N.", city: "Nice", rating: 5, date: "il y a 8 mois", title: "Magnifique", text: "Magnifique fauteuil. Il apporte une touche d'élégance et de modernité à ma pièce. Très satisfait." },
  { name: "Lucette A.", city: "Lille", rating: 5, date: "il y a 8 mois", title: "Très bien", text: "Très bien. Je suis ravie de mon achat. Le fauteuil est beau, confortable et bien fait." },
];

const AVG = 4.4;
const TOTAL = "20 341";
const RATING_COUNTS = { 5: 15865, 4: 3256, 3: 815, 2: 203, 1: 102 };
const RATING_TOTAL = 20241;

function TrustpilotLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 126 117" className="w-5 h-5" fill="#00b67a"><path d="M63 0l15.12 46.53H126L88.44 75.27l15.12 46.53L63 93.06 22.44 121.8l15.12-46.53L0 46.53h47.88z"/></svg>
      <span className="font-bold text-[15px] tracking-tight">Trustpilot</span>
    </div>
  );
}

function StarRow({ filled, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="rounded-[3px] flex items-center justify-center"
          style={{ width: size, height: size, backgroundColor: i <= filled ? "#00b67a" : "#dcdce6" }}>
          <svg viewBox="0 0 24 24" fill="white" width={size * 0.65} height={size * 0.65}>
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z"/>
          </svg>
        </div>
      ))}
    </div>
  );
}

function RatingBar({ stars, count }) {
  const pct = Math.round((count / RATING_TOTAL) * 100);
  return (
    <div className="flex items-center gap-3 text-[13px]">
      <span className="w-14 shrink-0 text-neutral-700">{stars} étoiles</span>
      <div className="flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: "#00b67a" }} />
      </div>
      <span className="w-10 text-right text-neutral-500 shrink-0">{Math.round(pct)}%</span>
    </div>
  );
}

export default function AvisPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f4f4" }}>

      {/* Hero banner */}
      <div className="bg-white border-b border-neutral-200 py-10 md:py-14">
        <div className="container-page max-w-3xl text-center">
          <TrustpilotLogo />
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-4 mb-1 text-neutral-900">
            Avis clients
          </h1>
          <p className="text-neutral-500 text-[15px]">3D Bubble Sofa Mini · Cosy Corner</p>

          {/* Big score */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <span className="text-7xl font-black text-neutral-900 leading-none">{AVG}</span>
            <StarRow filled={5} size={36} />
            <p className="text-neutral-600 text-[14px]">
              <span className="font-bold text-neutral-900">{TOTAL} avis vérifiés</span>
              {" "}sur{" "}
              <span className="inline-flex items-center gap-1 font-bold">
                <svg viewBox="0 0 126 117" className="w-3.5 h-3.5" fill="#00b67a"><path d="M63 0l15.12 46.53H126L88.44 75.27l15.12 46.53L63 93.06 22.44 121.8l15.12-46.53L0 46.53h47.88z"/></svg>
                Trustpilot
              </span>
            </p>
          </div>

          {/* Distribution bars */}
          <div className="mt-8 max-w-xs mx-auto space-y-2">
            {[5,4,3,2,1].map(s => <RatingBar key={s} stars={s} count={RATING_COUNTS[s]} />)}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="container-page max-w-4xl py-10">
        <p className="text-[13px] text-neutral-500 mb-6 text-center">
          Affichage des 100 avis les plus récents
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white rounded-lg border border-neutral-200 p-5 flex flex-col gap-3">
              {/* Stars + date */}
              <div className="flex items-center justify-between">
                <StarRow filled={r.rating} size={18} />
                <span className="text-[12px] text-neutral-400">{r.date}</span>
              </div>
              {/* Title + text */}
              <div>
                <p className="font-bold text-[14px] text-neutral-900 mb-1">{r.title}</p>
                <p className="text-[13px] text-neutral-600 leading-relaxed">{r.text}</p>
              </div>
              {/* Author */}
              <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                  style={{ backgroundColor: "#00b67a" }}>
                  {r.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-neutral-900 leading-tight">{r.name}</p>
                  <p className="text-[11px] text-neutral-400">{r.city}, France</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="#00b67a" className="w-3.5 h-3.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-[11px] font-semibold" style={{ color: "#00b67a" }}>Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
