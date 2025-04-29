import { CheckCircle } from "lucide-react";

export default function GarantiesMutuelleSenior() {
  const data = [
    { niveau: "Minimum", moyen: "861€", moinsCher: "450€" },
    { niveau: "Moyen", moyen: "1481€", moinsCher: "986€" },
    { niveau: "Fort", moyen: "2151€", moinsCher: "1423€" },
    { niveau: "Maximum", moyen: "2390€", moinsCher: "2125€" },
  ];

  const garanties = [
    "Des cures thermales",
    "Des soins d’optiques (lunettes et lentilles)",
    "Des soins dentaires (implants, couronnes)",
    "Des maladies chroniques",
    "Des appareils auditifs et des prothèses",
    "De la médecine douce (ostéopathie, acupuncture, réflexologie)",
    "Des consultations de spécialistes (cardiologue, urologue, etc.)",
    "De l’hospitalisation (soins, transport, frais de confort)",
    "Des services d’assistance en cas de dépendance",
  ];

  const attentions = [
    "Aux taux de remboursement et à leurs plafonds",
    "Aux exclusions de garantie",
    "Aux délais de carence proposés",
    "À l’existence ou non du tiers-payant (qui vous dispense d’avancer vos frais de santé)",
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 text-gray-700">
      <h2 className="text-xl md:text-2xl font-bold text-teal-900 mb-4">
        Comment choisir votre mutuelle pour retraité ? Les garanties indispensables à la mutuelle senior
      </h2>

      <p className="mb-4 leading-relaxed">
        Faites régulièrement le point sur vos besoins en santé, ça vous aidera à mieux cerner les garanties qu’il vous faut dans votre future mutuelle senior.
        Le niveau de garanties que vous allez choisir va impacter votre remboursement. Sachez qu’il est possible de moduler les niveaux de garanties en fonction des postes de soins dont vous avez le plus besoin.
      </p>

      <p className="mb-6">
        Par exemple voici une moyenne des prix annuels en fonction du niveau de garanties choisis ainsi que le prix annuel le moins cher constaté selon Devis Mutuelle :
      </p>

      {/* Tableau */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 border border-gray-200 font-semibold">Besoins</th>
              <th className="p-4 border border-gray-200 font-semibold">Prix moyen en €/an</th>
              <th className="p-4 border border-gray-200 font-semibold">Prix moyen le moins cher en €/an</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="p-4 border border-gray-200">{row.niveau}</td>
                <td className="p-4 border border-gray-200">{row.moyen}</td>
                <td className="p-4 border border-gray-200">{row.moinsCher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  

      {/* Garanties à vérifier */}
      <p className="mb-4">
        Que ce soit dans le cadre d’une hospitalisation, d’une consultation ou de soins{" "}
        <span className="text-blue-600 underline">dentaires et optiques</span>, soyez particulièrement attentif à vos besoins en santé et à la prise en charge :
      </p>

      <ul className="space-y-2 mb-8">
        {garanties.map((item, i) => (
          <li key={i} className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Attention aux pièges */}
      <p className="mb-4 font-semibold text-gray-900">Dans le but de souscrire une mutuelle senior pas chère, faites aussi attention :</p>
      <ul className="list-disc pl-5 space-y-2">
        {attentions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
