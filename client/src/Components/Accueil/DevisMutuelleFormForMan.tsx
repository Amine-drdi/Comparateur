import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {images} from "../../assets/Accueil/data/compareImagesFile/images"
const steps = [
  'Genre',
  'Assurés',
  'Statut professionnel',
  'Identité',
  'Remboursements',
  'Adresse',
  'Coordonnées'
];

/*const images = {
  'Une femme': 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  'Un homme': 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
  'Vous': 'https://cdn-icons-png.flaticon.com/512/921/921347.png',
  'Vous et votre conjoint': 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png',
  'Vous et vos enfants': 'https://cdn-icons-png.flaticon.com/512/3048/3048394.png',
  'Toute la famille': 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
  'Coordonnées': 'https://cdn-icons-png.flaticon.com/512/1008/1008996.png',
  'Famille maison': 'https://cdn-icons-png.flaticon.com/512/590/590685.png'
};*/

const validationSchemas = [
  Yup.object({ genre: Yup.string().required('Veuillez sélectionner un genre') }),
  Yup.object({ assures: Yup.string().required('Veuillez sélectionner un choix') }),
  Yup.object({ statut: Yup.string().required('Veuillez sélectionner un statut') }),
  Yup.object({
    prenom: Yup.string().required('Prénom requis'),
    nom: Yup.string().required('Nom requis'),
   /* naissance: Yup.string().required('Date de naissance requise'),*/
   naissance: Yup.date()
  .transform(function (value, originalValue) {
    if (this.isType(value)) return value;
    const [day, month, year] = originalValue.split('/');
    return new Date(`${year}-${month}-${day}`);
  })
  .typeError("Format de date invalide (JJ/MM/AAAA)")
  .required("Date de naissance requise")
  .test("is-18", "Vous devez avoir au moins 18 ans", function (value) {
    if (!value) return false;
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();
    const m = today.getMonth() - value.getMonth();
    return age > 18 || (age === 18 && m >= 0);
  })
  }),
  Yup.object({
    Soins_Courants: Yup.string().required('Obligatoire'),
    Dentaire: Yup.string().required('Obligatoire'),
    Optique: Yup.string().required('Obligatoire'),
    Hospitalisation: Yup.string().required('Obligatoire'),
  }),
  Yup.object({
    adresse: Yup.string().required('Adresse requise'),
    codepostal: Yup.string().required('Code postal requis'),
  }),
  Yup.object({
    telephone: Yup.string().required('Téléphone requis'),
    email: Yup.string().email('Email invalide').required('Email requis'),
  }),
];

export default function DevisMutuelleForm() {
  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      genre: '',
      assures: '',
      statut: '',
      prenom: '',
      nom: '',
      naissance: '',
      naissance_conjoint: '',
      Soins_Courants: '',
      Dentaire: '',
      Optique: '',
      Hospitalisation: '',
      adresse: '',
      codepostal: '',
      telephone: '',
      email: '',
    },
    validationSchema: validationSchemas[step],
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      if (step === steps.length - 1) {
        console.log('Formulaire final envoyé :', formik.values);
        alert("Formulaire validé avec succès !");
      } else {
        setStep(step + 1);
      }
    },
  });

  /*const next = async () => {
    const isValid = await formik.validateForm();
    if (Object.keys(isValid).length === 0) {
      formik.handleSubmit();
    } else {
      formik.setTouched(Object.keys(validationSchemas[step].fields).reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {}));
    }
  };*/

  const next = async () => {
    const isValid = await formik.validateForm();
  
    if (Object.keys(isValid).length === 0) {
      // Vérification âge uniquement à l'étape 3
      if (step === 3 && formik.values.naissance) {
        const [day, month, year] = formik.values.naissance.split('/');
        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
  
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        const d = today.getDate() - birthDate.getDate();
  
        const is18orMore = age > 18 || (age === 18 && (m > 0 || (m === 0 && d >= 0)));
  
        if (!is18orMore) {
          alert("❌ Vous devez avoir au moins 18 ans pour continuer.");
          return; // bloque le passage à l'étape suivante
        } else {
          alert("✅ Vous avez plus de 18 ans !");
        }
      }
  
      formik.handleSubmit(); // passe à l’étape suivante
    } else {
      // Affiche les erreurs de validation
      formik.setTouched(
        Object.keys(validationSchemas[step].fields).reduce((acc, field) => {
          acc[field] = true;
          return acc;
        }, {})
      );
    }
  };

  const prev = () => setStep((s) => s - 1);

  const handleChange = (key, value) => {
    formik.setFieldValue(key, value);
  };

  const error = (field) =>
    formik.touched[field] && formik.errors[field] ? (
      <p className="text-red-500 text-sm">{formik.errors[field]}</p>
    ) : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4">
        <p className="font-semibold text-lg">Étape {step + 1} | {steps[step]}</p>
        <div className="h-2 bg-gray-200 rounded-full">
          <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="grid md:grid-cols-3 gap-6">
        {step === 3 && (
          <div className="hidden md:block">
            <img src={images['Famille maison']} alt="Illustration" className="w-full h-auto object-contain" />
          </div>
        )}

        <div className={step === 3 ? 'md:col-span-2' : 'md:col-span-3'}>
          {/* === Étapes === */}
          {step === 0 && (
            <div className="space-y-4">
              <p className="font-medium">Vous êtes</p>
              <div className="flex gap-4">
                {['Une femme', 'Un homme'].map((gender) => (
                  <div key={gender}
                    className={`border rounded-lg p-4 cursor-pointer w-1/2 text-center ${formik.values.genre === gender ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => handleChange('genre', gender)}>
                    <img src={images[gender]} alt={gender} className="w-16 h-16 mx-auto mb-2" />
                    {gender}
                  </div>
                ))}
              </div>
              {error('genre')}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <p className="font-medium">Vous souhaitez assurer</p>
              <div className="grid grid-cols-2 gap-4">
                {['Vous', 'Vous et votre conjoint', 'Vous et vos enfants', 'Toute la famille'].map((item) => (
                  <div key={item}
                    className={`border rounded-lg p-4 cursor-pointer text-center ${formik.values.assures === item ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => handleChange('assures', item)}>
                    <img src={images[item]} alt={item} className="w-16 h-16 mx-auto mb-2" />
                    {item}
                  </div>
                ))}
              </div>
              {error('assures')}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="font-medium">Votre statut professionnel</p>
              <select className="w-full border p-2 rounded"
                value={formik.values.statut}
                onChange={(e) => handleChange('statut', e.target.value)}>
                <option value="">-- Sélectionnez --</option>
                {["Freelance - Auto-entrepreneur", "Fonctionnaire", "Agent territorial", "Étudiant", "Exploitant agricole", "Régime Alsace - Moselle", "Fonction publique hospitalière"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {error('statut')}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="font-medium">Vos coordonnées</p>
              <input className="w-full border p-2 rounded" placeholder="Prénom" value={formik.values.prenom} onChange={formik.handleChange} name="prenom" />
              {error('prenom')}
              <input className="w-full border p-2 rounded" placeholder="Nom" value={formik.values.nom} onChange={formik.handleChange} name="nom" />
              {error('nom')}
              <input className="w-full border p-2 rounded" placeholder="Date de naissance (JJ/MM/AAAA)" value={formik.values.naissance} onChange={formik.handleChange} name="naissance" />
              {error('naissance')}
              <input className="w-full border p-2 rounded" placeholder="Date de naissance de votre conjoint" value={formik.values.naissance_conjoint} onChange={formik.handleChange} name="naissance_conjoint" />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              {['Soins_Courants', 'Dentaire', 'Optique', 'Hospitalisation'].map((type) => (
                <div key={type} className="space-y-2">
                  <p>{type.replace('_', ' ')}</p>
                  <div className="flex gap-2">
                    {['Minimum', 'Moyen', 'Fort', 'Maximum'].map((level) => (
                      <button type="button" key={level}
                        className={`border rounded p-2 flex-1 ${formik.values[type] === level ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                        onClick={() => handleChange(type, level)}>
                        {level}
                      </button>
                    ))}
                  </div>
                  {error(type)}
                </div>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <p className="font-medium">Votre adresse</p>
              <input className="w-full border p-2 rounded" placeholder="Adresse" value={formik.values.adresse} onChange={formik.handleChange} name="adresse" />
              {error('adresse')}
              <input className="w-full border p-2 rounded" placeholder="Code postal ou ville" value={formik.values.codepostal} onChange={formik.handleChange} name="codepostal" />
              {error('codepostal')}
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <p className="font-medium">Vos coordonnées</p>
              <input className="w-full border p-2 rounded" placeholder="Téléphone" value={formik.values.telephone} onChange={formik.handleChange} name="telephone" />
              {error('telephone')}
              <input className="w-full border p-2 rounded" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} name="email" />
              {error('email')}
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" defaultChecked />
                <span className="text-sm">J’accepte d’être contacté</span>
              </label>
            </div>
          )}
        </div>

        {step === 6 && (
          <div className="hidden md:block">
            <img src={images['Coordonnées']} alt="Coordonnées" className="w-full h-auto object-contain" />
          </div>
        )}
      </form>

      <div className="flex justify-between mt-6">
        {step > 0 && <button onClick={prev} className="text-sm text-gray-600">Retour</button>}
        <button onClick={next} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 ml-auto">
          {step < steps.length - 1 ? 'Suivant' : 'Découvrir mes offres'}
        </button>
      </div>
    </div>
  );
}
