import { useState } from 'react';
import { codesPostaux } from '../assets/Data/codesPostaux ';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        codePostal: '',
        selectedCode: null,
    });

    const [filteredCodes, setFilteredCodes] = useState(codesPostaux);
    
    const handleInputChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, codePostal: value });

        // Filtrer les codes postaux en fonction de l'entrée de l'utilisateur
        if (value) {
            const filtered = codesPostaux.filter((code) =>
                code.value.includes(value) || code.label.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCodes(filtered);
        } else {
            setFilteredCodes(codesPostaux); // Afficher tous les codes quand le champ est vide
        }
    };

    const handleSelectCode = (code) => {
        setFormData({
            ...formData,
            codePostal: code.value,
            selectedCode: code,
        });
        setFilteredCodes([]); // Cacher les suggestions après la sélection
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); console.log(formData); }}>
            <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center">
                    Code Postal
                </label>
                <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Tapez un code postal ou un nom"
                />
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
            <div className="mt-4">
                <button type="submit" className="px-6 py-2 bg-sky-500 text-white rounded-lg">
                    Soumettre
                </button>
            </div>
        </form>
    );
};

export default Formulaire;
