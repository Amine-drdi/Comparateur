import { ChevronDown } from 'lucide-react';
import {useState } from 'react';
import CompareBanner from "../../Components/official/CompareBanner"
import student from "../../assets/student/images/insuranceStudent.png"
import AvantagesComparateur from './AvantagesComparateur';
import StudentMutuelleTable from './StudentMutuelleTable';
import HealthTipsForStudents from './HealthTipsForStudents';
import StudentMutuellePricing from './StudentMutuellePricing';
import StudentMutuelleComparison from './StudentMutuelleComparison';
import PourquoiComparer from './PourquoiComparer';
import QuelleMutuelle from './QuelleMutuelle';
import DiplomeEnPoche from './DiplomeEnPoche';
import CompareGratuit from './CompareGratuit';
import FoireAuxQuestions from './FoireAuxQuestions';


export default function QuestionsSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  //const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /*const toggle = (index: number | SetStateAction<null>) => {
    setActiveIndex(activeIndex === index ? null : index);
  };*/
  const toggle: (index: number) => void = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex text-sm mb-8 text-gray-600">
        <a href="#" className="hover:text-blue-600">Accueil</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:text-blue-600">Mutuelle sante</a>
        <span className="mx-2">›</span>
        <span className="text-gray-500">Profil - Mutuelle étudiante : quelle mutuelle choisir en 2025 ?</span>
      </div>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
      Mutuelle étudiante : quelle mutuelle choisir en 2025 ?
      </h1>

      <section className="mt-10 max-w-4xl mx-auto px-4">
      <p className="text-gray-700 mb-6 leading-relaxed">
      Lorsque vous devenez étudiant, votre budget est bien souvent limité et vos frais 
      de santé ne sont pas forcément prioritaires. Mais vous devez tout de même penser à
       souscrire une mutuelle santé afin de vous faire rembourser vos soins quand vous
        en avez besoin.
      </p>
    </section>

      {/* Sommaire */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Sommaire</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="#section1" className="text-blue-500 hover:underline">
            Quelle est la meilleure mutuelle pour étudiants ?

            </a>
          </li>
          <li>
            <a href="#section2" className="text-blue-500 hover:underline">
            Les mutuelles étudiantes pour petits budgets
            </a>
          </li>
          {isExpanded && (
            <>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                Choisir la bonne complémentaire santé étudiante selon son profil
                </a>
              </li>
              <li>
                <a href="#section4" className="text-blue-500 hover:underline">
                Quel est le prix moyen d'une mutuelle étudiant ?
                </a>
              </li>
              <li>
                <a href="#section5" className="text-blue-500 hover:underline">
                Comparatif des mutuelles pour les étudiants
                </a>
              </li>
              <li>
                <a href="#section6" className="text-blue-500 hover:underline">
                Pourquoi comparer les mutuelles pour étudiants avec  Devis Mutuelle ?
                </a>
              </li>
              <li>
              <a href="#section7" className="text-blue-500 hover:underline">
              Quelle mutuelle choisir en fonction de votre situation étudiante ?
              </a>
              </li>
               <li>
              <a href="#section8" className="text-blue-500 hover:underline">
              Une fois votre diplôme en poche, pensez à comparer pour souscrire une nouvelle mutuelle !
              </a>
              </li>
              <li>
              <a href="#section9" className="text-blue-500 hover:underline">
              Comparer avec les devis mutuelle, c'est gratuit
              </a>
              </li>
               <li>
              <a href="#section10" className="text-blue-500 hover:underline">
              Foire aux questions
               </a>
              </li>
            </>
          )}
        </ol>

        <button 
          onClick={toggleExpand}
          className="flex items-center mt-6 text-blue-500 hover:text-blue-700"
        >
          <span>Afficher {isExpanded ? 'moins' : 'plus'}</span>
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className="flex justify-center items-center min-h-screen">
      <img
  src={student} // remplace par l’URL correcte selon ton projet
  alt="Mutuelle entreprise"
  className="w-1/2 h-auto object-cover"
/>
</div>
      {/* Sections détaillées */}
      <div className="space-y-10 text-gray-700">
        <section id="section1">
        <StudentMutuelleTable/>
        </section>
        <CompareBanner/>
        <section id="section2">
        <StudentMutuelleTable/>
        </section>
       
        <CompareBanner/>
    
        <section id="section3">
        <HealthTipsForStudents/>
      </section>
        <section id="section4">
        <StudentMutuellePricing/>
        </section>
        <section id="section5">
        <StudentMutuelleComparison/>
        </section>
        <section id="section6">
        <PourquoiComparer/>
        </section>
        <CompareBanner/>
        <section id="section7">
         <QuelleMutuelle/>
        </section>
        <CompareBanner/>
        <section id="section8">
        <DiplomeEnPoche/>
        </section>
        <section id="section9">
        <CompareGratuit/>
        </section>
        <section id="section10">
        <FoireAuxQuestions/>
        </section>
        <CompareBanner/>
       <AvantagesComparateur/>

         </div>
         </div>
  );
}
