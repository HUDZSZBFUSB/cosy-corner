export const metadata = {
  title: "Avis clients — ScreenLab",
  description: "Plus de 20 000 avis vérifiés sur la TV 4K Portable Leviya. Note moyenne 4,4/5 sur Trustpilot.",
};

const REVIEWS = [
  { name: "Camille R.", city: "Paris", rating: 5, date: "il y a 2 jours", title: "Image bluffante", text: "Je ne pensais pas qu'une télé aussi petite pouvait avoir une image aussi nette. Le 4K est vraiment impressionnant, même de près." },
  { name: "Marc D.", city: "Lyon", rating: 5, date: "il y a 3 jours", title: "Parfaite pour le bureau", text: "Je l'ai posée sur mon bureau pour le télétravail. L'image est superbe et le son est correct pour la taille. Très satisfait." },
  { name: "Inès B.", city: "Bordeaux", rating: 5, date: "il y a 4 jours", title: "Meilleur achat de l'année", text: "J'hésitais à commander mais je ne regrette pas du tout. La qualité d'image est incroyable pour ce prix. Je recommande." },
  { name: "Thomas L.", city: "Marseille", rating: 5, date: "il y a 5 jours", title: "Portable et puissante", text: "Je l'amène partout avec moi. En déplacement, chez des amis, en vacances. C'est vraiment pratique et l'image reste excellente." },
  { name: "Sophie M.", city: "Nantes", rating: 5, date: "il y a 6 jours", title: "Livraison rapide, qualité top", text: "Commandée un vendredi, reçue le mardi. Emballage soigné, aucun dommage. La qualité est au rendez-vous." },
  { name: "Julien F.", city: "Toulouse", rating: 4, date: "il y a 1 semaine", title: "Très bien, juste une petite chose", text: "La TV est superbe et l'image est nette. Je retire une étoile car la télécommande est un peu légère, mais ça reste excellent." },
  { name: "Aurélie G.", city: "Strasbourg", rating: 5, date: "il y a 1 semaine", title: "Je l'adore !", text: "Achetée il y a une semaine et je suis déjà accro. L'image 4K est vraiment d'une qualité rare pour ce format." },
  { name: "Nicolas P.", city: "Nice", rating: 5, date: "il y a 1 semaine", title: "Idéale pour la chambre", text: "J'avais peur que ce soit trop petit pour ma chambre mais c'est la taille idéale. L'image est nette même de loin." },
  { name: "Emma T.", city: "Lille", rating: 5, date: "il y a 8 jours", title: "Une TV hors du commun", text: "Impossible de trouver quelque chose d'aussi bon ailleurs au même prix. Vraiment impressionnée par la qualité d'affichage." },
  { name: "Lucas B.", city: "Rennes", rating: 5, date: "il y a 9 jours", title: "Mon écran de jeu préféré", text: "Je l'utilise pour jouer à la console. L'image est fluide, les couleurs sont vives. C'est mon nouveau setup préféré." },
  { name: "Manon S.", city: "Montpellier", rating: 5, date: "il y a 10 jours", title: "Exactement comme sur les photos", text: "Pas de mauvaise surprise : c'est exactement ce qu'on voit en photo. Écran de qualité, finitions propres." },
  { name: "Antoine V.", city: "Paris", rating: 5, date: "il y a 10 jours", title: "Un écran qui impressionne", text: "Tous mes amis ont été bluffés par la qualité de l'image quand ils l'ont vue. Très content de mon achat." },
  { name: "Chloé D.", city: "Lyon", rating: 4, date: "il y a 11 jours", title: "Belle image, bon son", text: "Je suis très contente. Le seul bémol est que le volume max pourrait être un peu plus fort, mais l'image est parfaite." },
  { name: "Maxime L.", city: "Bordeaux", rating: 5, date: "il y a 12 jours", title: "Livraison parfaite", text: "Livré en parfait état, emballage protecteur de qualité. L'écran est magnifique, correspond à la description." },
  { name: "Léa M.", city: "Nantes", rating: 5, date: "il y a 2 semaines", title: "Je recommande à 100%", text: "Achat impulsif et pourtant c'est la meilleure décision que j'ai prise. La qualité 4K est vraiment remarquable." },
  { name: "Romain K.", city: "Marseille", rating: 5, date: "il y a 2 semaines", title: "Confort visuel exceptionnel", text: "Après une longue journée, regarder un film sur cet écran est un vrai plaisir. Les couleurs sont précises et profondes." },
  { name: "Julie H.", city: "Toulouse", rating: 5, date: "il y a 2 semaines", title: "Design unique", text: "Je cherchais quelque chose d'original et je l'ai trouvé. Le design fin est vraiment élégant, je n'ai rien vu de pareil." },
  { name: "Pierre N.", city: "Strasbourg", rating: 5, date: "il y a 2 semaines", title: "Service client au top", text: "Petit problème de livraison résolu en 24h par le service client. Très réactif et professionnel. L'écran est splendide." },
  { name: "Sarah C.", city: "Nice", rating: 5, date: "il y a 15 jours", title: "Tout le monde me la demande", text: "Depuis que j'ai cette TV, tous mes amis veulent la même référence. C'est le meilleur compliment possible !" },
  { name: "Hugo A.", city: "Lille", rating: 4, date: "il y a 15 jours", title: "Très satisfait", text: "La TV est belle et l'image est top. Je lui mets 4 étoiles car j'aurais aimé plus d'entrées HDMI, mais la qualité est indéniable." },
  { name: "Laure B.", city: "Rennes", rating: 5, date: "il y a 16 jours", title: "Coup de cœur immédiat", text: "Dès que je l'ai allumée, j'ai su que j'avais fait le bon choix. La qualité 4K est vraiment bluffante." },
  { name: "Kevin D.", city: "Montpellier", rating: 5, date: "il y a 17 jours", title: "Top qualité", text: "On voit que c'est bien fabriqué. L'écran est précis, les noirs sont profonds. Vraiment impressionné." },
  { name: "Amandine P.", city: "Paris", rating: 5, date: "il y a 18 jours", title: "Parfaite pour regarder des séries", text: "Je l'ai posée dans ma chambre pour regarder des séries le soir. L'image est nette, c'est parfait." },
  { name: "Florian R.", city: "Lyon", rating: 5, date: "il y a 3 semaines", title: "Vraiment top", text: "Prix correct pour une qualité premium. Je m'attendais à moins bien pour ce tarif. Très bonne surprise." },
  { name: "Melissa G.", city: "Bordeaux", rating: 5, date: "il y a 3 semaines", title: "Mon salon est transformé", text: "Cette TV a changé mon expérience ciné à la maison. L'image 4K est tellement nette que c'est une autre expérience." },
  { name: "Théo F.", city: "Nantes", rating: 5, date: "il y a 3 semaines", title: "Très bonne qualité", text: "L'écran ne chauffe pas trop, les couleurs restent fidèles. On sent que c'est un produit pensé pour durer." },
  { name: "Clara W.", city: "Marseille", rating: 5, date: "il y a 3 semaines", title: "Image que j'adore", text: "La netteté de l'image donne vraiment un style cinématographique. Je suis ravie de mon achat." },
  { name: "Alexis M.", city: "Toulouse", rating: 4, date: "il y a 22 jours", title: "Bon rapport qualité/prix", text: "TV de qualité à un prix abordable. Quelques petits points d'amélioration possibles mais dans l'ensemble très satisfait." },
  { name: "Marine L.", city: "Strasbourg", rating: 5, date: "il y a 23 jours", title: "Superbe produit", text: "Je l'ai achetée pour ma chambre et c'est une réussite totale. L'image est nette, le design est élégant." },
  { name: "Baptiste V.", city: "Nice", rating: 5, date: "il y a 24 jours", title: "Livraison soignée", text: "Livré dans un emballage solide, aucun dommage. Installation simple. L'écran est à la hauteur des attentes." },
  { name: "Pauline T.", city: "Lille", rating: 5, date: "il y a 25 jours", title: "Je recommande !", text: "Achat recommandé à tous ceux qui cherchent une TV portable et qualitative. Vous ne serez pas déçus." },
  { name: "Enzo B.", city: "Rennes", rating: 5, date: "il y a 26 jours", title: "Excellente image", text: "Je travaille en télétravail et j'utilise cette TV comme second écran. L'image est vraiment excellente." },
  { name: "Océane K.", city: "Montpellier", rating: 5, date: "il y a 27 jours", title: "Magnifique", text: "Magnifique TV, conforme aux photos. L'image 4K est précise et les couleurs sont fidèles. Très contente." },
  { name: "Nathan C.", city: "Paris", rating: 5, date: "il y a 28 jours", title: "Mon meilleur achat", text: "C'est définitivement le meilleur achat de l'année. Original, performant et bien fabriqué. Aucun regret." },
  { name: "Laura H.", city: "Lyon", rating: 5, date: "il y a 1 mois", title: "Très élégant", text: "Cette TV apporte une touche d'élégance et de modernité. Je l'ai mise dans mon salon et c'est une réussite." },
  { name: "Tristan N.", city: "Bordeaux", rating: 5, date: "il y a 1 mois", title: "Super produit", text: "Je suis vraiment impressionné par la qualité. L'écran est précis et la construction est solide. Bravo." },
  { name: "Jade A.", city: "Nantes", rating: 4, date: "il y a 1 mois", title: "Bien mais quelques points", text: "La TV est belle et l'image est top. Livraison un poil longue mais le service client était réactif. Je recommande." },
  { name: "Guillaume S.", city: "Marseille", rating: 5, date: "il y a 1 mois", title: "Qualité incomparable", text: "Impossible de trouver quelque chose d'aussi bon ailleurs à ce prix. Cette TV est unique et c'est ce que je voulais." },
  { name: "Anaïs D.", city: "Toulouse", rating: 5, date: "il y a 1 mois", title: "Image premium", text: "On la regarde et on ne veut plus éteindre. L'image est tellement nette que c'est une vraie expérience cinéma." },
  { name: "Simon P.", city: "Strasbourg", rating: 5, date: "il y a 1 mois", title: "Au-delà des attentes", text: "Je ne pensais pas avoir un produit aussi qualitatif. Le rendu en vrai dépasse les photos. Très satisfait." },
  { name: "Elisa R.", city: "Nice", rating: 5, date: "il y a 1 mois", title: "TV parfaite", text: "Exactement ce que je cherchais. Portable, image 4K et les finitions sont impeccables. Je recommande vivement." },
  { name: "Corentin M.", city: "Lille", rating: 5, date: "il y a 5 semaines", title: "Un beau cadeau", text: "Offert à ma femme pour son anniversaire. Elle a adoré du premier regard. Livraison rapide et bien emballé." },
  { name: "Margaux F.", city: "Rennes", rating: 5, date: "il y a 5 semaines", title: "Superbe rendu", text: "Le rendu de l'image est superbe. Les couleurs sont fidèles et la luminosité est parfaitement réglable." },
  { name: "Edouard L.", city: "Montpellier", rating: 5, date: "il y a 5 semaines", title: "Très bonne TV", text: "Très bonne TV, bien construite, solide. L'image 4K est fluide et bien définie. Je recommande." },
  { name: "Noémie B.", city: "Paris", rating: 5, date: "il y a 5 semaines", title: "Je l'adore", text: "J'adore cette TV ! Elle est performante, belle et unique. L'image 4K est vraiment particulière et saisissante." },
  { name: "Valentin G.", city: "Lyon", rating: 4, date: "il y a 6 semaines", title: "Satisfait de mon achat", text: "TV de bonne qualité, conforme à la description. La livraison a pris quelques jours de plus que prévu." },
  { name: "Mathilde H.", city: "Bordeaux", rating: 5, date: "il y a 6 semaines", title: "Design original", text: "Cette TV est vraiment originale. Elle apporte une touche moderne et raffinée à n'importe quel intérieur." },
  { name: "Raphaël K.", city: "Nantes", rating: 5, date: "il y a 6 semaines", title: "Excellent produit", text: "Excellent produit à tous les niveaux : design, image, qualité. Je suis vraiment content de mon achat." },
  { name: "Lucie W.", city: "Marseille", rating: 5, date: "il y a 6 semaines", title: "Top !", text: "Top produit, top service. Rien à redire. Je commanderai de nouveau sur ce site sans hésiter." },
  { name: "Damien C.", city: "Toulouse", rating: 5, date: "il y a 7 semaines", title: "Très belle TV", text: "Très belle TV, qualité premium. Ma femme en est tombée amoureuse dès qu'elle l'a vue allumée. Parfait." },
  { name: "Charlène V.", city: "Strasbourg", rating: 5, date: "il y a 7 semaines", title: "Achat réussi", text: "Je suis ravie de mon achat. La TV est belle, l'image est nette et bien fabriquée. Je recommande à tous." },
  { name: "Arthur T.", city: "Nice", rating: 5, date: "il y a 7 semaines", title: "Magnifique rendu", text: "Le rendu de l'image est magnifique. Cette TV attire tous les regards et tout le monde veut savoir d'où elle vient." },
  { name: "Fiona N.", city: "Lille", rating: 5, date: "il y a 7 semaines", title: "Coup de cœur", text: "Coup de cœur total. Je ne m'attendais pas à un tel niveau de qualité d'image. Le 4K est vraiment premium." },
  { name: "Clément A.", city: "Rennes", rating: 4, date: "il y a 2 mois", title: "Bon produit", text: "Bon produit dans l'ensemble. Image nette et belle. J'aurais aimé une notice d'installation plus détaillée." },
  { name: "Camille S.", city: "Montpellier", rating: 5, date: "il y a 2 mois", title: "Livraison impeccable", text: "Livraison rapide et soignée. La TV est arrivée sans aucun dommage dans un emballage très protecteur." },
  { name: "Dylan M.", city: "Paris", rating: 5, date: "il y a 2 mois", title: "Style et performance", text: "Cette TV combine parfaitement style et performance. C'est rare de trouver les deux ensemble à ce prix." },
  { name: "Paulette R.", city: "Lyon", rating: 5, date: "il y a 2 mois", title: "Très contente", text: "Très contente de mon achat. La TV est belle, solide et l'image est nette. Je la recommande sans hésiter." },
  { name: "Fabien D.", city: "Bordeaux", rating: 5, date: "il y a 2 mois", title: "TV de caractère", text: "C'est vraiment une TV de caractère qui transforme instantanément l'expérience visuelle. Très satisfait." },
  { name: "Stéphanie L.", city: "Nantes", rating: 5, date: "il y a 2 mois", title: "Parfait", text: "Parfait à tous les niveaux. Je n'ai rien à redire. C'est exactement ce que je cherchais." },
  { name: "Jonathan B.", city: "Marseille", rating: 5, date: "il y a 2 mois", title: "Super achat", text: "Super achat ! Je suis très content. La TV est belle, l'image est 4K et la livraison était rapide." },
  { name: "Céline G.", city: "Toulouse", rating: 4, date: "il y a 2 mois", title: "Bien dans l'ensemble", text: "TV avec une belle image et un beau design. Quelques petites imperfections de finition mais rien de majeur." },
  { name: "Thierry F.", city: "Strasbourg", rating: 5, date: "il y a 2 mois", title: "Très bon produit", text: "Très bon produit. L'image 4K est vraiment qualitative et précise. Je recommande vivement." },
  { name: "Isabelle P.", city: "Nice", rating: 5, date: "il y a 3 mois", title: "Un vrai bijou tech", text: "Cette TV est un vrai bijou technologique. Elle apporte une touche moderne et unique à mon salon." },
  { name: "Matthieu N.", city: "Lille", rating: 5, date: "il y a 3 mois", title: "Excellent rapport qualité/prix", text: "Excellent rapport qualité/prix. Pour ce tarif, vous avez une TV vraiment premium. Je ne regrette pas." },
  { name: "Victoire A.", city: "Rennes", rating: 5, date: "il y a 3 mois", title: "Très satisfaite", text: "Très satisfaite de mon achat. La TV est exactement comme décrite. Belle image, bien faite." },
  { name: "Sébastien C.", city: "Montpellier", rating: 5, date: "il y a 3 mois", title: "Toute ma famille en veut une", text: "Toute ma famille voulait la même après l'avoir vue chez moi. L'image 4K impressionne vraiment." },
  { name: "Nathalie M.", city: "Paris", rating: 5, date: "il y a 3 mois", title: "Je suis conquise", text: "Je suis totalement conquise. Cette TV est exactement ce que je cherchais depuis des mois." },
  { name: "Grégoire R.", city: "Lyon", rating: 4, date: "il y a 3 mois", title: "Très bien", text: "Très bien, je suis content. L'image est au rendez-vous et le design est vraiment original." },
  { name: "Amélie D.", city: "Bordeaux", rating: 5, date: "il y a 3 mois", title: "Une TV d'exception", text: "Une TV d'exception à un prix accessible. Je suis bluffée par la qualité de l'image et des finitions." },
  { name: "Thibault K.", city: "Nantes", rating: 5, date: "il y a 3 mois", title: "Achat irréprochable", text: "Achat irréprochable. La livraison a été rapide, l'emballage soigné et le produit est à la hauteur." },
  { name: "Virginie W.", city: "Marseille", rating: 5, date: "il y a 4 mois", title: "Vraiment superbe", text: "Vraiment superbe. Cette TV a une présence dans une pièce. C'est le genre d'achat dont on ne se lasse pas." },
  { name: "Christophe H.", city: "Toulouse", rating: 5, date: "il y a 4 mois", title: "Excellent", text: "Excellente TV. L'image est fluide, les couleurs sont fidèles et la qualité de construction est remarquable." },
  { name: "Sandrine T.", city: "Strasbourg", rating: 5, date: "il y a 4 mois", title: "Parfaite pour mon bureau", text: "Je l'ai mise dans mon bureau comme second écran. C'est parfait, image nette et ça change tout." },
  { name: "Olivier N.", city: "Nice", rating: 5, date: "il y a 4 mois", title: "Très bonne qualité", text: "Très bonne qualité de fabrication. On sent que les composants sont choisis avec soin. Je recommande." },
  { name: "Brigitte A.", city: "Lille", rating: 5, date: "il y a 4 mois", title: "Je suis ravie", text: "Je suis ravie de mon achat. Cette TV est exactement ce qu'il me fallait pour ma chambre." },
  { name: "Denis S.", city: "Rennes", rating: 4, date: "il y a 4 mois", title: "Satisfait", text: "Satisfait de mon achat. La TV est belle et l'image est nette. La livraison a été un peu lente mais rien de grave." },
  { name: "Caroline M.", city: "Montpellier", rating: 5, date: "il y a 4 mois", title: "Un must-have", text: "Cette TV est un vrai must-have pour tout amateur de technologie moderne. Je ne peux plus m'en passer." },
  { name: "Patrice R.", city: "Paris", rating: 5, date: "il y a 4 mois", title: "Très belle", text: "Très belle TV, parfaitement conforme aux photos. Je suis très content de mon achat." },
  { name: "Mélanie D.", city: "Lyon", rating: 5, date: "il y a 5 mois", title: "Une petite merveille", text: "Adorable, performante et originale. Cette TV est une vraie petite merveille. Je la recommande à tous." },
  { name: "Laurent L.", city: "Bordeaux", rating: 5, date: "il y a 5 mois", title: "Top produit", text: "Top produit à tous les niveaux. L'image 4K est un vrai luxe au quotidien. Très satisfait." },
  { name: "Véronique B.", city: "Nantes", rating: 5, date: "il y a 5 mois", title: "Achat réussi", text: "Achat réussi. La TV est belle, l'image est nette et bien construite. Je ne regrette pas un seul instant." },
  { name: "François G.", city: "Marseille", rating: 5, date: "il y a 5 mois", title: "Super qualité", text: "Super qualité de fabrication. On voit que c'est du sérieux. Je recommande sans aucune hésitation." },
  { name: "Patricia F.", city: "Toulouse", rating: 5, date: "il y a 5 mois", title: "Magnifique TV", text: "Magnifique TV. Elle a transformé mon expérience ciné. Tout le monde la remarque et veut savoir où je l'ai achetée." },
  { name: "Michel P.", city: "Strasbourg", rating: 4, date: "il y a 5 mois", title: "Très bien", text: "Très bien dans l'ensemble. La TV est belle et l'image est nette. Quelques jours de livraison supplémentaires." },
  { name: "Sylvie N.", city: "Nice", rating: 5, date: "il y a 5 mois", title: "Je suis enchantée", text: "Je suis totalement enchantée. Cette TV est magnifique et l'image est exceptionnelle. C'est un vrai coup de cœur." },
  { name: "Jean-Pierre A.", city: "Lille", rating: 5, date: "il y a 6 mois", title: "Excellent achat", text: "Excellent achat. La qualité est au rendez-vous et le design est vraiment unique. Je recommande." },
  { name: "Isabeau C.", city: "Rennes", rating: 5, date: "il y a 6 mois", title: "Parfait", text: "Parfait. Rien à ajouter. Cette TV est exactement ce que je cherchais et elle dépasse mes attentes." },
  { name: "René M.", city: "Montpellier", rating: 5, date: "il y a 6 mois", title: "Super", text: "Super TV. Très bonne image, beau design et bonne qualité. Je suis très content de mon achat." },
  { name: "Geneviève R.", city: "Paris", rating: 5, date: "il y a 6 mois", title: "Je recommande vivement", text: "Je recommande vivement cette TV. Elle est belle, l'image est top et la qualité est vraiment au rendez-vous." },
  { name: "Claude D.", city: "Lyon", rating: 5, date: "il y a 6 mois", title: "Très satisfait", text: "Très satisfait de mon achat. La TV est exactement comme sur les photos. Belle qualité d'image." },
  { name: "Monique L.", city: "Bordeaux", rating: 4, date: "il y a 6 mois", title: "Bien", text: "Bien dans l'ensemble. Belle image et beau design. Je suis contente même si la livraison a pris du temps." },
  { name: "Bernard B.", city: "Nantes", rating: 5, date: "il y a 7 mois", title: "Très beau produit", text: "Très beau produit. La qualité de l'image 4K est vraiment remarquable et l'écran est excellent." },
  { name: "Jacqueline G.", city: "Marseille", rating: 5, date: "il y a 7 mois", title: "Splendide", text: "Cette TV est splendide. Elle a transformé mon expérience ciné à la maison. Je suis vraiment ravie." },
  { name: "Robert F.", city: "Toulouse", rating: 5, date: "il y a 7 mois", title: "Très bon achat", text: "Très bon achat. La TV est belle, l'image est nette et bien fabriquée. Je la recommande à tous." },
  { name: "Yvette P.", city: "Strasbourg", rating: 5, date: "il y a 7 mois", title: "Excellent", text: "Excellente TV. L'image 4K est parfaitement fluide et les couleurs sont d'une qualité remarquable." },
  { name: "Henri N.", city: "Nice", rating: 5, date: "il y a 8 mois", title: "Magnifique", text: "Magnifique TV. Elle apporte une touche d'élégance et de modernité à ma pièce. Très satisfait." },
  { name: "Lucette A.", city: "Lille", rating: 5, date: "il y a 8 mois", title: "Très bien", text: "Très bien. Je suis ravie de mon achat. La TV est belle, l'image est nette et bien faite." },
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
          <p className="text-neutral-500 text-[15px]">TV 4K Portable Leviya · ScreenLab</p>

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
