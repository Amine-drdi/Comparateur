import dentiste1 from "../../assets/dentaire/images/Dentiste1.png"
import dentiste2 from "../../assets/dentaire/images/Dentiste2.png"
export default function EnSavoirPlusDentaire() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#003E5F] mb-6">
        Mutuelle dentaire : en savoir plus
      </h2>

      <div className="space-y-6">
        {/* Bloc 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src= {dentiste1} // Remplace par ton chemin réel
            alt="Implant dentaire"
            className="w-full md:w-40 h-28 object-cover rounded-md border-2 border-blue-300"
          />
          <div>
            <h3 className="text-[#003E5F] font-semibold mb-1">
              Mutuelle implant dentaire : comparez les remboursements des mutuelles pour vos implants dentaires
            </h3>
            <p className="text-sm text-gray-700">
              Si vous avez besoin d'un implant dentaire, vous devez savoir qu'il s'agit de l'un des actes
              médicaux les plus chers. Si toutes les autres prestations dentaires sont remboursées par la
              Sécurité Sociale, ce n'est pas le cas d'un implant. Pour cette prestation, les prix sont fixés
              par les dentistes eux-mêmes et peuvent rapidement être très chers, c'est pourquoi souscrire une
              mutuelle santé vous permet de prendre en charge tout ou partie de ce coût. lesfurets vous
              explique tout.
            </p>
          </div>
        </div>

        {/* Bloc 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src= {dentiste2}// Remplace par ton chemin réel
            alt="Orthodontie adulte"
            className="w-full md:w-40 h-28 object-cover rounded-md border-2 border-blue-300"
          />
          <div>
            <h3 className="text-[#003E5F] font-semibold mb-1">
              Mutuelle orthodontie adulte : trouvez une mutuelle pas chère qui rembourse bien
            </h3>
            <p className="text-sm text-gray-700">
              À partir de 16 ans les soins orthodontiques ne sont plus pris en charge par l'Assurance Maladie.
              Si vous avez besoin d'un appareil dentaire, une mutuelle santé peut prendre en charge tout ou
              partie de vos soins si vous avez souscrit un contrat qui prend en charge ces dépenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
