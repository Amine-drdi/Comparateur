import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {
  FaCheckCircle
} from 'react-icons/fa';
import {
  regimesSociaux
} from "../../assets/mutuelle-sante/Data/regimesSociaux";
import {
  codesPostaux
} from "../../assets/mutuelle-sante/Data/codesPostaux";
import {
  registerDevis,
  getDevisById,
  updateDevis
} from "../../api/devisApi";

import femmeImg from '../../assets/Accueil/images/compareImage/woman.png';
import hommeImg from '../../assets/Accueil/images/compareImage/man.png';
import vousImg from '../../images/compareImage/man.png';
import conjointImg from '../../assets/Accueil/images/compareImage/icon-couple.DNy2uJdQ.png';
import enfantsImg from '../../assets/Accueil/images/compareImage/icon-single-with-children.DyCgMNJT.png';
import familleImg from '../../assets/Accueil/images/compareImage/icon-family.C0um2KMM.png';
import calandrierImg from '../../assets/mutuelle-sante/images/calandrier.png';
import codePostale from '../../assets/mutuelle-sante/images/codePostale.png';
import assurance from '../../assets/mutuelle-sante/images/assurance.png';
import nomIcon from "../../assets/mutuelle-sante/images/nom.png";
import mailIcon from "../../assets/mutuelle-sante/images/mail.png";
import phoneIcon from "../../assets/mutuelle-sante/images/phone.png";

// Types
type Props = {
  id?: string;
};

type NiveauRemboursement = {
  soinsCourants: string;
  hospitalisation: string;
  dentaire: string;
  optique: string;
};

type FormData = {
  genre: string;
  couverture: string;
  dateNaissance: string;
  regimeSocial: string;
  codePostal: string;
  selectedCode: CodePostalOption;
  dateDebutAssurance: string;
  typeCouverture: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  accepteAppel: string;
  conditionsAcceptees: boolean;
  niveauRemboursement: NiveauRemboursement;
};
type DevisPayload = Omit<FormData, 'selectedCode'>;

type ResultatDevis = {
  minimale?: {
    prix: number;
    description: string;
  };
  equilibree?: {
    prix: number;
    description: string;
  };
  maximale?: {
    prix: number;
    description: string;
  };
};

type CodePostalOption = {
  value: string;
  label: string;
} | null;

type FieldErrors = {
  [key: string]: string;
};

function CompareMutuelleSante({ id }: Props) {
    const [formData, setFormData] = useState<FormData>({
      genre: '',
      couverture: '',
      dateNaissance: '',
      regimeSocial: '',
      codePostal: '',
      selectedCode: null,
      dateDebutAssurance: '',
      typeCouverture: '',
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      accepteAppel: '',
      conditionsAcceptees: false,
      niveauRemboursement: {
        soinsCourants: '',
        hospitalisation: '',
        dentaire: '',
        optique: '',
      },
    });
  
    const [result, setResult] = useState<ResultatDevis | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<FieldErrors>({});
    const [step, setStep] = useState<number>(1);
    const [filteredCodes, setFilteredCodes] = useState(codesPostaux);
  
    useEffect(() => {
      if (id) {
        const fetchDevis = async () => {
          try {
            const response = await getDevisById(id);
            const data = response.data;
            setFormData({
              genre: data.genre || '',
              couverture: data.couverture || '',
              dateNaissance: data.dateNaissance || '',
              regimeSocial: data.regimeSocial || '',
              codePostal: data.codePostal || '',
              selectedCode: codesPostaux.find(c => c.value === data.codePostal) || null,
              dateDebutAssurance: data.dateDebutAssurance || '',
              typeCouverture: data.typeCouverture || '',
              nom: data.nom || '',
              prenom: data.prenom || '',
              email: data.email || '',
              telephone: data.telephone || '',
              niveauRemboursement: {
                soinsCourants: data.niveauRemboursement?.soinsCourants || '',
                hospitalisation: data.niveauRemboursement?.hospitalisation || '',
                dentaire: data.niveauRemboursement?.dentaire || '',
                optique: data.niveauRemboursement?.optique || ''
              },
              accepteAppel: data.accepteAppel || '',
              conditionsAcceptees: data.conditionsAcceptees || false
            });
          } catch (error) {
            console.error("Erreur lors du chargement du devis :", error);
          }
        };
  
        fetchDevis();
      }
    }, [id]);
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData({ ...formData, codePostal: value });
  
      if (value) {
        const filtered = codesPostaux.filter((code) =>
          code.value.includes(value) || code.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCodes(filtered);
      } else {
        setFilteredCodes(codesPostaux);
      }
    };
  
    const handleSelectCode = (code: Exclude<CodePostalOption, null>) => {
      setFormData({
        ...formData,
        codePostal: code.value,
        selectedCode: code,
      });
      setFilteredCodes([]);
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError({});
        setResult(null);
        setStep(6); // Affiche les résultats
      
        // Enlève selectedCode avant l'envoi
       // const { selectedCode, ...dataToSend }: DevisPayload = formData;
       const { selectedCode, ...dataToSend } = formData;
        try {
          let response;
          if (id) {
            response = await updateDevis(id, dataToSend);
          } else {
            response = await registerDevis(dataToSend);
          }
          setResult(response.data);
        } catch (err) {
          setError({ general: "Erreur lors de la récupération des résultats." });
          setLoading(false);
        }
      };
  
    const handleNiveauChange = (categorie: keyof NiveauRemboursement, valeur: string) => {
      setFormData(prev => ({
        ...prev,
        niveauRemboursement: {
          ...prev.niveauRemboursement,
          [categorie]: valeur
        }
      }));
    };
  
    const nextStep = () => {
      const errors: FieldErrors = {};
  
      if (step === 1) {
        if (!formData.genre) errors.genre = "Genre requis";
        if (!formData.couverture) errors.couverture = "Couverture requise";
        if (!formData.dateNaissance) errors.dateNaissance = "Date de naissance requise";
        if (!formData.regimeSocial) errors.regimeSocial = "Régime social requis";
      } else if (step === 2) {
        if (!formData.codePostal) errors.codePostal = "Code postal requis";
        if (!formData.dateDebutAssurance) errors.dateDebutAssurance = "Date requise";
        if (!formData.typeCouverture) errors.typeCouverture = "Type de couverture requis";
      } else if (step === 3) {
        if (!formData.nom) errors.nom = "Nom requis";
        if (!formData.prenom) errors.prenom = "Prénom requis";
        if (!formData.email) errors.email = "Email requis";
        if (!formData.telephone) errors.telephone = "Téléphone requis";
      } else if (step === 4) {
        if (!formData.niveauRemboursement.soinsCourants) errors.soinsCourants = 'Niveau requis';
        if (!formData.niveauRemboursement.hospitalisation) errors.hospitalisation = 'Niveau requis';
        if (!formData.niveauRemboursement.dentaire) errors.dentaire = 'Niveau requis';
        if (!formData.niveauRemboursement.optique) errors.optique = 'Niveau requis';
        if (!formData.accepteAppel) errors.accepteAppel = 'Choix requis';
        if (!formData.conditionsAcceptees) errors.conditionsAcceptees = 'Condition requise';
      }
  
      if (Object.keys(errors).length > 0) {
        setError(errors);
        return;
      }
  
      setError({});
      setStep(step + 1);
    };
    const stepsData = [
        { label: 'Adhérent', number: 1 },
        { label: 'Contrat', number: 2 },
        { label: 'Coordonnées', number: 3 },
        { label: 'Couverture', number: 4 },
        { label: 'Vérification', number: 5 },
      ];
      
    const prevStep = () => setStep(step - 1);
  
    const getRegimeSocialLabel = (value: string) => {
      switch (value) {
        case 'salarie':
          return 'Salarié';
        case 'sans_emploi':
          return 'Sans emploi';
        case 'retraite':
          return 'Retraité';
        case 'fonctionnaire':
          return 'Fonctionnaire';
        default:
          return value;
      }
    };
  
    const getCouvertureLabel = (value: string) => {
      switch (value) {
        case 'adulte':
          return 'Un adulte';
        case 'adulte_enfant':
          return 'Adulte + enfant';
        case 'couple':
          return 'Un couple';
        case 'couple_enfant':
          return 'Couple + enfant';
        default:
          return value;
      }
    };
    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl md:text-3xl font-semibold text-sky-800 text-center mb-8">
                Comparateur de Mutuelles Santé
            </h1>
            
            {/* Barre de progression */}
            <div className="relative mb-8">
      {/* Les cercles numérotés */}
      <div className="flex justify-between relative z-10">
        {stepsData.map(({ label, number }) => (
          <div key={number} className="flex flex-col items-center" style={{ width: `${100 / stepsData.length}%` }}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 text-white text-lg font-bold 
                ${step >= number ? 'bg-sky-800' : 'bg-gray-300 text-gray-500'}`}
            >
              {/* Icône simulée par un numéro stylisé */}
              <span>{number}</span>
            </div>
            <span className={`text-xs text-center ${step >= number ? 'text-sky-800 font-semibold' : 'text-gray-500'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Barre de progression arrière */}
      <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0"></div>

      {/* Barre de progression avant */}
      <div
        className={`absolute top-4 left-0 h-1 bg-sky-800 z-0 transition-all duration-300 
          ${step === 1 ? 'w-0' :
            step === 2 ? 'w-1/5' :
            step === 3 ? 'w-2/5' :
            step === 4 ? 'w-3/5' :
            step === 5 ? 'w-4/5' : 'w-full'}`}
      ></div>
    </div>

            {error.general && (
  <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 text-center">
    {error.general}
  </div>
)}
{error.general && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 text-center">
                    {error.general}
                </div>
            )}
            {/* Étape 1: Adhérent */}
          {step === 1 && (
                          <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                              <div>
                                  <label className="block text-gray-700 font-semibold mb-3">Êtes-vous...</label>
                                  <div className="grid grid-cols-2 gap-4">
                                      <button
                                          type="button"
                                          onClick={() => setFormData({...formData, genre: 'homme'})}
                                          className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.genre === 'homme' ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                                      >
                                          <img src={hommeImg} className="text-6xl mb-2 text-sky-800" />
                                          <span>Homme</span> 
                                      </button>
                                      <button
                                          type="button"
                                          onClick={() => setFormData({...formData, genre: 'femme'})}
                                          className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.genre === 'femme' ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                                      >
                                          <img src={femmeImg} className="text-6xl mb-2 text-sky-800" />
                                          <span>Femme</span>
                                      </button>
                                  </div>
                                  {error.genre && <p className="text-red-500 text-sm mt-2 text-center">{error.genre}</p>}

                              </div>
                              <div>
                                  <label className="block text-gray-700 font-semibold mb-3">Qui souhaitez-vous assurer ?</label>
                                  <div className="grid grid-cols-2 gap-4">
                                      {[
                                          { value: 'adulte', label: 'Un adulte', icon: <img  src={femmeImg} className="text-6xl mb-2 text-sky-800" /> },
                                          { value: 'adulte_enfant', label: 'Un adulte + enfant', icon: <div className="flex items-center justify-center mb-2"><img src={enfantsImg} className="text-6xl mb-2 text-sky-800" /></div> },
                                          { value: 'couple', label: 'Un couple', icon: <img src={conjointImg} className="text-6xl mb-2 text-sky-800" /> },
                                          { value: 'couple_enfant', label: 'Un couple + enfant', icon: <div className="flex items-center justify-center mb-2"><img src={familleImg} className="text-6xl mb-2 text-sky-800" /></div> }
                                      ].map((option) => (
                                          <button
                                              key={option.value}
                                              type="button"
                                              onClick={() => setFormData({...formData, couverture: option.value})}
                                              className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.couverture === option.value ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                                          >
                                              {option.icon}
                                              <span>{option.label}</span>
                                          </button>
                                      ))}
                                  </div>
                                  {error.couverture && <p className="text-red-500 text-sm mt-1">{error.couverture}</p>}
                              </div>
          
                              <div>
                                  <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                  <img src={calandrierImg} className="w-10 h-10 mr-2" alt="icon" />
                                      Date de naissance
                                  </label>
                                  <input
                                      type="date"
                                      name="dateNaissance"
                                      value={formData.dateNaissance}
                                      onChange={handleChange}
                                      required
                                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                  />
                                  {error.dateNaissance && <p className="text-red-500 text-sm mt-1">{error.dateNaissance}</p>}
                              </div>
          
                              <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                          Quel est votre régime social ?
                      </label>
                      <select
                          name="regimeSocial"
                          value={formData.regimeSocial}
                          onChange={handleChange}
                          required
                          //size={5} // Définit une liste visible avec 5 options affichées
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
                      >
                          <option value="">Sélectionnez votre régime</option>
                          {regimesSociaux.map((option) => (
                              <option key={option.value} value={option.value}>
                                  {option.label}
                              </option>
                          ))}
                      </select>
                      {error.regimeSocial && <p className="text-red-500 text-sm mt-1">{error.regimeSocial}</p>}
                  </div>
                  <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Continuer
                        </button>
                    </div>
                          </form>
                      )}

            {/* Étape 2: Contrat */}
               { 
                    step === 2 && (
                        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                    <img src={codePostale} className="w-10 h-10 mr-2" alt="icon"  />
                                    Code Postal
                                </label>
                                <input
                                    type="text"
                                    name="codePostal"
                                    value={formData.codePostal}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    pattern="\d{5}"
                                    title="5 chiffres requis"
                                />
                            {error.codePostal && <p className="text-red-500 text-sm mt-1">{error.codePostal}</p>}
                                {filteredCodes.length > 0 && (
                                    <ul className="mt-2 border border-gray-300 rounded-lg max-h-60 overflow-y-auto">
                                        {filteredCodes.map((code) => (
                                            <li
                                                key={code.value}
                                                onClick={() => handleSelectCode(code)}
                                                className="px-4 py-2 cursor-pointer hover:bg-sky-500 hover:text-white"
                                            >
                                                {code.value} - {code.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                <img src={calandrierImg} className="w-10 h-10 mr-2" alt="icon" />
                                    A quelle date souhaitez-vous être assuré(e) ?
                                </label>
                                <input
                                    type="date"
                                    name="dateDebutAssurance"
                                    value={formData.dateDebutAssurance}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                 
                                />
                        {error.dateDebutAssurance && <p className="text-red-500 text-sm mt-1">{error.dateDebutAssurance}</p>}
                            </div>
            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-3 flex items-center">
                                <img src={assurance} className="w-10 h-10 mr-2" alt="icon" />

                                    Je souhaite une couverture...
                                </label>
                                <div className="grid grid-cols-3 gap-4">
                                    {[ 
                                        { value: 'minimale', label: 'Minimale', sublabel: 'Essentielle' },
                                        { value: 'equilibree', label: 'Equilibrée', sublabel: 'Recommandée' },
                                        { value: 'maximale', label: 'Maximale', sublabel: 'Complète' }
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, typeCouverture: option.value })}
                                            className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.typeCouverture === option.value ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                                        >
                                            <span>{option.label}</span>
                                            <span className="text-xs text-gray-500 mt-1">{option.sublabel}</span>
                                        </button>
                                    ))}
                                </div>
                                {error.typeCouverture && <p className="text-red-500 text-sm mt-1">{error.typeCouverture}</p>}
                            </div>
            
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                                >
                                    Retour
                                </button>
                                <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Continuer
                        </button>
                    </div>
                            </div>
                        </form>
                    )}

            {/* Étape 3: Coordonnées */}
            {step === 3 && (
                            <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                        <img src={nomIcon} className="w-10 h-10 mr-2" alt="icon" />

                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                        />
                                                                   {error.nom && <p className="text-red-500 text-sm mt-1">{error.nom}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                        <img src={nomIcon} className="w-10 h-10 mr-2" alt="icon" />

                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            name="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                        />
                                                                   {error.prenom && <p className="text-red-500 text-sm mt-1">{error.prenom}</p>}
                                    </div>
                           
                                </div>
            
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                    <img src={mailIcon} className="w-10 h-10 mr-2" alt="icon" />

                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                    />
                                                      {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
                                </div>
            
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                    <img src={phoneIcon} className="w-10 h-10 mr-2" alt="icon" />

                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                        pattern="[0-9]{10}"
                                        title="10 chiffres requis"
                                    />
                             {error.telephone && <p className="text-red-500 text-sm">{error.telephone}</p>}
                             </div>
            
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                                    >
                                        Retour
                                    </button>
                                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Continuer
                        </button>
                    </div>
                                </div>
                            </form>
                        )}

            {/* Nouvelle Étape 4: Couverture */}
            {step === 4 && (
    <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
        <div className="bg-sky-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-sky-800 mb-4">
                Quel niveau de remboursement souhaitez-vous ?
            </h2>
            <p className="text-gray-600 mb-6">
                Pas d'inquiétude, vous pourrez modifier votre couverture sur la page de résultats.<br/>
                <span className="text-red-500">Attention, sélectionner le niveau maximum réduira le nombre de résultats proposés.</span>
            </p>

            {/* Soins courants */}
            <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Soins courants</h3>
                <p className="text-sm text-gray-500 mb-4">(médecine générale, pharmacie, radios, etc.)</p>
                <div className="grid grid-cols-4 gap-2">
                    {['Minimum', 'Moyen', 'Fort', 'Maximum'].map((niveau) => (
                        <button
                            key={niveau}
                            type="button"
                            onClick={() => handleNiveauChange('soinsCourants', niveau)}
                            className={`p-3 text-sm rounded-md transition-all ${
                                formData.niveauRemboursement.soinsCourants === niveau 
                                ? 'bg-sky-800 text-white border-2 border-sky-900' 
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-sky-300'
                            }`}
                        >
                            {niveau}
                        </button>
                    ))}
                </div>
                {error.soinsCourants && <p className="text-red-500 text-sm mt-2">{error.soinsCourants}</p>}
            </div>

            {/* Hospitalisation */}
            <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Hospitalisation</h3>
                <p className="text-sm text-gray-500 mb-4">(frais de séjour, frais de transport, chirurgie, etc.)</p>
                <div className="grid grid-cols-4 gap-2">
                    {['Minimum', 'Moyen', 'Fort', 'Maximum'].map((niveau) => (
                        <button
                            key={niveau}
                            type="button"
                            onClick={() => handleNiveauChange('hospitalisation', niveau)}
                            className={`p-3 text-sm rounded-md transition-all ${
                                formData.niveauRemboursement.hospitalisation === niveau 
                                ? 'bg-sky-800 text-white border-2 border-sky-900' 
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-sky-300'
                            }`}
                        >
                            {niveau}
                        </button>
                    ))}
                </div>
                {error.hospitalisation && <p className="text-red-500 text-sm mt-2">{error.hospitalisation}</p>}

            </div>

            {/* Dentaire */}
            <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Dentaire</h3>
                <p className="text-sm text-gray-500 mb-4">(dentiste, prothèses, soins, etc.)</p>
                <div className="grid grid-cols-4 gap-2">
                    {['Minimum', 'Moyen', 'Fort', 'Maximum'].map((niveau) => (
                        <button
                            key={niveau}
                            type="button"
                            onClick={() => handleNiveauChange('dentaire', niveau)}
                            className={`p-3 text-sm rounded-md transition-all ${
                                formData.niveauRemboursement.dentaire === niveau 
                                ? 'bg-sky-800 text-white border-2 border-sky-900' 
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-sky-300'
                            }`}
                        >
                            {niveau}
                        </button>
                    ))}
                </div>
                {error.dentaire && <p className="text-red-500 text-sm mt-2">{error.dentaire}</p>}

            </div>

            {/* Optique */}
            <div className="mb-8">
                <h3 className="font-semibold text-gray-700 mb-4">Optique</h3>
                <p className="text-sm text-gray-500 mb-4">(lentilles, lunettes, chirurgie réfractive, etc.)</p>
                <div className="grid grid-cols-4 gap-2">
                    {['Minimum', 'Moyen', 'Fort', 'Maximum'].map((niveau) => (
                        <button
                            key={niveau}
                            type="button"
                            onClick={() => handleNiveauChange('optique', niveau)}
                            className={`p-3 text-sm rounded-md transition-all ${
                                formData.niveauRemboursement.optique === niveau 
                                ? 'bg-sky-800 text-white border-2 border-sky-900' 
                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-sky-300'
                            }`}
                        >
                            {niveau}
                        </button>
                    ))}
                </div>
                {error.optique && <p className="text-red-500 text-sm mt-2">{error.optique}</p>}

            </div>

            {/* Contact partenaires */}
            <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">
                    Accepteriez-vous d'être contacté par nos partenaires ?
                </h3>
                <div className="flex gap-6">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="accepteAppel"
                            value="oui"
                            checked={formData.accepteAppel === 'oui'}
                            onChange={handleChange}
                            className="form-radio h-4 w-4 text-sky-800"
                        />

                        <span className="ml-2">Oui</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="accepteAppel"
                            value="non"
                            checked={formData.accepteAppel === 'non'}
                            onChange={handleChange}
                            className="form-radio h-4 w-4 text-sky-800"
                        />

                        <span className="ml-2">Non</span>
                    </label>
                    {error.accepteAppel && <p className="text-red-500 text-sm mt-1">{error.accepteAppel}</p>}

                </div>
            </div>

            {/* Conditions */}
            <label className="flex items-start mt-6">
                <input
                    type="checkbox"
                    name="conditionsAcceptees"
                    checked={formData.conditionsAcceptees}
                    onChange={(e) => setFormData({...formData, conditionsAcceptees: e.target.checked})}
                    className="form-checkbox h-4 w-4 mt-1 text-sky-800"
                />
                 {error.conditionsAcceptees && <p className="text-red-500 text-sm mt-1">{error.conditionsAcceptees}</p>}
                <span className="ml-2 text-sm text-gray-600">
                    J'accepte les conditions d'utilisation et d'être contacté par les partenaires 
                    Assurance Santé pour recevoir des offres personnalisées.
                </span>
            </label>
        </div>

        <div className="flex justify-between">
            <button
                type="button"
                onClick={prevStep}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg"
            >
                Retour
            </button>
            <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Continuer
                        </button>
                    </div>
        </div>
    </form>
)}

            {/* Étape 5: Vérification */}
            {step === 5 && (
                <div className="space-y-6">
                                   <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                                       <h3 className="text-xl text-sky-800 mb-4 flex items-center">
                                           <FaCheckCircle className="mr-2" />
                                           Vérifiez vos informations
                                       </h3>
                                       
                                       <div className="space-y-4">
                                           <div>
                                               <h4 className="font-semibold text-gray-700 mb-2">Informations personnelles</h4>
                                               <div className="bg-white p-4 rounded-lg">
                                                   <p><span className="text-gray-600">Genre:</span> {formData.genre === 'homme' ? 'Homme' : 'Femme'}</p>
                                                   <p><span className="text-gray-600">Couverture:</span> {getCouvertureLabel(formData.couverture)}</p>
                                                   <p><span className="text-gray-600">Date de naissance:</span> {formData.dateNaissance}</p>
                                                   <p><span className="text-gray-600">Régime social:</span> {getRegimeSocialLabel(formData.regimeSocial)}</p>
                                               </div>
                                           </div>
               
                                           <div>
                                               <h4 className="font-semibold text-gray-700 mb-2">Contrat</h4>
                                               <div className="bg-white p-4 rounded-lg">
                                                   <p><span className="text-gray-600">Code postal:</span> {formData.codePostal}</p>
                                                   <p><span className="text-gray-600">Date début assurance:</span> {formData.dateDebutAssurance}</p>
                                                   <p><span className="text-gray-600">Type de couverture:</span> 
                                                       {formData.typeCouverture === 'minimale' ? ' Minimale' : 
                                                        formData.typeCouverture === 'equilibree' ? ' Equilibrée' : 
                                                        ' Maximale'}
                                                   </p>
                                               </div>
                                           </div>
               
                                           <div>
                                               <h4 className="font-semibold text-gray-700 mb-2">Coordonnées</h4>
                                               <div className="bg-white p-4 rounded-lg">
                                                   <p><span className="text-gray-600">Nom:</span> {formData.nom}</p>
                                                   <p><span className="text-gray-600">Prénom:</span> {formData.prenom}</p>
                                                   <p><span className="text-gray-600">Email:</span> {formData.email}</p>
                                                   <p><span className="text-gray-600">Téléphone:</span> {formData.telephone}</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
               
                                   <div className="flex justify-between">
                                       <button
                                           onClick={prevStep}
                                           className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                                       >
                                           Modifier
                                       </button>
                                       <button
                                           onClick={handleSubmit}
                                           className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 flex items-center"
                                           disabled={loading}
                                       >
                                           {loading ? (
                                               <>
                                                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                   </svg>
                                                   Envoi en cours...
                                               </>
                                           ) : (
                                               <>
                                                   <FaCheckCircle className="mr-2" />
                                                   Confirmer et obtenir mon devis
                                               </>
                                           )}
                                       </button>
                                   </div>
                               </div>
            )}

             {/* Étape 6: Résultats CORRIGÉE */}
             {step === 6 && (
                <div className="mt-6">
                    {loading && (
                        <div className="text-center py-10">
                            <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-sky-800 rounded-full animate-spin"></div>
                            <p className="mt-5 text-gray-700">Recherche des meilleures offres...</p>
                        </div>
                    )}

{error.general && (
  <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 text-center">
    {error.general}
  </div>
)}
                    {result && (
                        <div>
                            <h3 className="text-xl text-sky-800 text-center mb-6">Voici les meilleures offres pour vous</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                                    <h4 className="text-sky-800 mb-4 font-semibold">Minimale</h4>
                                    <p className="text-2xl font-bold text-sky-800">€{result.minimale?.prix || '--'}/mois</p>
                                    <p className="my-3 text-gray-600">{result.minimale?.description || 'Couverture essentielle'}</p>
                                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-lg mt-3 transition duration-300">
                                        Souscrire
                                    </button>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg text-center border-2 border-sky-500 relative">
                                    <div className="absolute top-0 left-0 right-0 bg-sky-500 text-white py-1 text-sm font-semibold">
                                        Le plus choisi
                                    </div>
                                    <h4 className="text-sky-800 mb-4 font-semibold mt-4">Equilibrée</h4>
                                    <p className="text-2xl font-bold text-sky-800">€{result.equilibree?.prix || '--'}/mois</p>
                                    <p className="my-3 text-gray-600">{result.equilibree?.description || 'Bon rapport qualité-prix'}</p>
                                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-lg mt-3 transition duration-300">
                                        Souscrire
                                    </button>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
                                    <h4 className="text-sky-800 mb-4 font-semibold">Maximale</h4>
                                    <p className="text-2xl font-bold text-sky-800">€{result.maximale?.prix || '--'}/mois</p>
                                    <p className="my-3 text-gray-600">{result.maximale?.description || 'Couverture complète'}</p>
                                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-lg mt-3 transition duration-300">
                                        Souscrire
                                    </button>
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <button
                                    onClick={() => setStep(1)}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                                >
                                    Nouvelle comparaison
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CompareMutuelleSante;