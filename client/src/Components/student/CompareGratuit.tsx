import React from 'react'
import { Link } from 'react-router-dom';

const CompareGratuit = () => {
  return (
    <div>
         <section className="px-6 py-12 max-w-7xl mx-auto text-[#1c1c1c] text-xl">
        <h2 className='text-xl font-bold mb-4'>
            Comparer avec Devis Mutuelle, c'est gratuit
        </h2>
        <h4  className='text-lg font-bold mb-4'>
        0 commission ou frais cachés
        </h4>
        <div   className="text-sm mb-6">
        <div className='mb-4'>
        Le comparateur n'applique aucun frais supplémentaires aux tarifs affichés.
         Le prix que vous voyez affiché, c'est celui que vous paierez à la fin. 
         Aucun partenaire n'est mis en avant. L'offre qui apparaît en premier dans les résultats est toujours la moins chère.
        </div>
        </div>
        <h4  className='text-lg font-bold mb-4'>
        Comment le comparateur se rémunère ?
        </h4>
        <div   className="text-sm mb-6">
        <div className='mb-4'>
        Le comparateur ne prend aucune commission, ni frais cachés.
         Ce sont les partenaires
         qui rémunèrent le service lorsqu'un contrat est souscrit, 
         sans aucun impact sur votre budget.
        </div>
        <div>
      <Link to="/services" className="text-blue-600 hover:underline text-base">
      Voir le fonctionnement en détails
      </Link>
    </div>
        </div>
        </section>
    </div>
  )
}

export default CompareGratuit