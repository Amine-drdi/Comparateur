import React, { useState } from 'react';
import axios from 'axios';
import { FaMale, FaFemale, FaUser, FaUserFriends, FaChild, FaBirthdayCake, FaMapMarkerAlt, FaCalendarAlt, FaShieldAlt, FaIdCard, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';

function ComparisonForm() {
    const [formData, setFormData] = useState({
        // Étape 1: Adhérent
        genre: '',
        couverture: '',
        dateNaissance: '',
        regimeSocial: '',
        // Étape 2: Contrat
        codePostal: '',
        dateDebutAssurance: '',
        typeCouverture: '',
        // Étape 3: Coordonnées
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
    });
    
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await axios.post('http://localhost:5000/api/comparaison', formData);
            setResult(response.data);
            setStep(5); // Afficher les résultats
        } catch (err) {
            setError('Erreur lors de la récupération des résultats.');
            setLoading(false);
        }
    };

    const nextStep = () => {
        // Validation avant de passer à l'étape suivante
        if (step === 1 && (!formData.genre || !formData.couverture || !formData.dateNaissance || !formData.regimeSocial)) {
            setError('Veuillez remplir tous les champs obligatoires');
            return;
        }
        if (step === 2 && (!formData.codePostal || !formData.dateDebutAssurance || !formData.typeCouverture)) {
            setError('Veuillez remplir tous les champs obligatoires');
            return;
        }
        if (step === 3 && (!formData.nom || !formData.prenom || !formData.email || !formData.telephone)) {
            setError('Veuillez remplir tous les champs obligatoires');
            return;
        }
        setError('');
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    // Fonction pour afficher le libellé complet du régime social
    const getRegimeSocialLabel = (value) => {
        switch(value) {
            case 'salarie': return 'Salarié';
            case 'sans_emploi': return 'Sans emploi';
            case 'retraite': return 'Retraité ancien salarié';
            case 'fonctionnaire': return 'Fonctionnaire d\'état';
            default: return value;
        }
    };

    // Fonction pour afficher le libellé complet du type de couverture
    const getCouvertureLabel = (value) => {
        switch(value) {
            case 'adulte': return 'Un adulte';
            case 'adulte_enfant': return 'Un adulte + enfant';
            case 'couple': return 'Un couple';
            case 'couple_enfant': return 'Un couple + enfant';
            default: return value;
        }
    };

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl md:text-3xl font-semibold text-sky-800 text-center mb-8">
                Comparateur de Mutuelles Santé
            </h1>
            
            {/* Progress bar - maintenant 5 étapes (3 formulaires + vérification + résultats) */}
            <div className="relative mb-8">
                <div className="flex justify-between relative z-10">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex flex-col items-center" style={{ width: `${100/4}%` }}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 
                                ${step >= item ? 'bg-sky-800 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                {item}
                            </div>
                            <span className={`text-xs text-center ${step >= item ? 'text-sky-800 font-semibold' : 'text-gray-500'}`}>
                                {item === 1 ? 'Adhérent' : 
                                 item === 2 ? 'Contrat' : 
                                 item === 3 ? 'Coordonnées' : 
                                 'Vérification'}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0"></div>
                <div className={`absolute top-4 left-0 h-1 bg-sky-800 z-0 transition-all duration-300 
                    ${step === 1 ? 'w-0' : 
                      step === 2 ? 'w-1/4' : 
                      step === 3 ? 'w-2/4' : 
                      step === 4 ? 'w-3/4' : 
                      'w-full'}`}></div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 text-center">
                    {error}
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
                                <FaMale className="text-6xl mb-2 text-sky-800" />
                                <span>Homme</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({...formData, genre: 'femme'})}
                                className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.genre === 'femme' ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                            >
                                <FaFemale className="text-6xl mb-2 text-sky-800" />
                                <span>Femme</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-3">Qui souhaitez-vous assurer ?</label>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: 'adulte', label: 'Un adulte', icon: <FaUser className="text-6xl mb-2 text-sky-800" /> },
                                { value: 'adulte_enfant', label: 'Un adulte + enfant', icon: <div className="flex items-center justify-center mb-2"><FaUser className="text-6xl mb-2 text-sky-800" /><FaChild className="text-3xl mb-2 text-sky-800" /></div> },
                                { value: 'couple', label: 'Un couple', icon: <FaUserFriends className="text-6xl mb-2 text-sky-800" /> },
                                { value: 'couple_enfant', label: 'Un couple + enfant', icon: <div className="flex items-center justify-center mb-2"><FaUserFriends className="text-6xl mb-2 text-sky-800" /><FaChild className="text-3xl mb-2 text-sky-800" /></div> }
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
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <FaBirthdayCake className="mr-2" />
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
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Quel est votre régime social ?</label>
                        <select
                            name="regimeSocial"
                            value={formData.regimeSocial}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
                        >
                            <option value="">Sélectionnez votre régime</option>
                            <option value="salarie">Salarié</option>
                            <option value="sans_emploi">Sans emploi</option>
                            <option value="retraite">Retraité ancien salarié</option>
                            <option value="fonctionnaire">Fonctionnaire d'état</option>
                        </select>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                            disabled={!formData.genre || !formData.couverture || !formData.dateNaissance || !formData.regimeSocial}
                        >
                            Continuer
                        </button>
                    </div>
                </form>
            )}

            {/* Étape 2: Contrat */}
            {step === 2 && (
                <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            Code Postal
                        </label>
                        <input
                            type="text"
                            name="codePostal"
                            value={formData.codePostal}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            pattern="\d{5}"
                            title="5 chiffres requis"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <FaCalendarAlt className="mr-2" />
                            A quelle date souhaitez-vous être assuré(e) ?
                        </label>
                        <input
                            type="date"
                            name="dateDebutAssurance"
                            value={formData.dateDebutAssurance}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-3 flex items-center">
                            <FaShieldAlt className="mr-2" />
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
                                    onClick={() => setFormData({...formData, typeCouverture: option.value})}
                                    className={`p-4 border rounded-lg flex flex-col items-center transition ${formData.typeCouverture === option.value ? 'border-sky-500 bg-sky-50 text-sky-800' : 'border-gray-300 hover:border-sky-300'}`}
                                >
                                    <span>{option.label}</span>
                                    <span className="text-xs text-gray-500 mt-1">{option.sublabel}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Retour
                        </button>
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                            disabled={!formData.codePostal || !formData.dateDebutAssurance || !formData.typeCouverture}
                        >
                            Continuer
                        </button>
                    </div>
                </form>
            )}

            {/* Étape 3: Coordonnées */}
            {step === 3 && (
                <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                <FaIdCard className="mr-2" />
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
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                                <FaIdCard className="mr-2" />
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
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <FaEnvelope className="mr-2" />
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
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <FaPhone className="mr-2" />
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
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Retour
                        </button>
                        <button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                            disabled={!formData.nom || !formData.prenom || !formData.email || !formData.telephone}
                        >
                            Continuer
                        </button>
                    </div>
                </form>
            )}

            {/* Étape 4: Vérification */}
            {step === 4 && (
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

            {/* Étape 5: Résultats */}
            {step === 5 && (
                <div className="mt-6">
                    {loading && (
                        <div className="text-center py-10">
                            <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-sky-800 rounded-full animate-spin"></div>
                            <p className="mt-5 text-gray-700">Recherche des meilleures offres...</p>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-center">
                            {error}
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

export default ComparisonForm;