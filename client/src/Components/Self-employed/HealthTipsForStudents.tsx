import React from "react";

const HealthTipsForStudents: React.FC = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto text-[#0f1f38] space-y-4">
      <h2 className="text-xl font-bold">
        Choisir la bonne complémentaire santé étudiante selon son profil
      </h2>

      <p className="text-sm leading-relaxed">
        La meilleure complémentaire santé, c’est d’abord celle qui couvre vos besoins médicaux à vous !
        Si vous êtes étudiant, vous n’avez probablement pas les mêmes besoins en santé qu’un jeune parent,
        qu’un enfant, qu’un quinquagénaire ou qu’un retraité. Et vous n’avez peut-être pas le même budget à y allouer.
      </p>

      <p className="text-sm leading-relaxed">
        Alors, concentrez-vous sur vos usages, qui définiront les garanties essentielles que doit couvrir
        votre mutuelle étudiante. Par exemple :
      </p>

      <ul className="list-disc list-inside text-sm space-y-1 pl-2">
        <li>Une couverture correcte en médecine générale et médicaments</li>
        <li>Une bonne couverture optique pour rembourser vos lunettes et vos lentilles</li>
        <li>
          Une couverture suffisante pour rembourser les dépassements d’honoraires chez les médecins
          spécialistes et les praticiens non-remboursés par la Sécurité sociale
          (gynécologue, kinésithérapeute, ostéopathe, psychologue…)
        </li>
      </ul>

      <p className="text-sm leading-relaxed">
        En effet, la Sécurité sociale vous rembourse déjà une partie de vos dépenses de santé, mais pas tout !
        Par exemple, une consultation chez votre médecin traitant, s’il est conventionné secteur 1, sera remboursée
        16,50€ alors qu’elle coûte 26,50€. Si vous ne voulez pas payer le reste de votre poche, la mutuelle peut s’en charger !
      </p>

      <p className="text-sm leading-relaxed">
        Certaines choses ne sont tout simplement pas couvertes par l’Assurance Maladie, comme les médecines douces
        (acupuncture, ostéopathie) et la psychologie : votre mutuelle peut prendre en charge plusieurs séances par an,
        de façon à ce que vous ne payiez rien (ou presque rien).
      </p>
    </section>
  );
};

export default HealthTipsForStudents;
