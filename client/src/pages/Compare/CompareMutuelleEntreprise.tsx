import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormHeader from "../../Components/mutuelle-entreprises/FormHeader";

const steps = ["Entreprise", "Informations légales", "Vos infos", "Vos offres"];

const validationSchemas = [
    // ÉTAPE 1 : Entreprise
    Yup.object({
      salaries: Yup.number().typeError("Doit être un nombre").required("Champ requis"),
      cadres: Yup.string().required("Champ requis"),
      nonCadres: Yup.number().typeError("Doit être un nombre").required("Champ requis"),
      ageNonCadres: Yup.number().typeError("Doit être un nombre").required("Champ requis"),
    }),
  
    // ÉTAPE 2 : Informations légales
    Yup.object({
      activite: Yup.string().required("Champ requis"),
      raison: Yup.string().required("Champ requis"),
      adresse: Yup.string().required("Champ requis"),
      codePostal: Yup.string()
        .matches(/^\d{5}$/, "Code postal invalide")
        .required("Champ requis"),
      anciennete: Yup.string().required("Champ requis"),
      statut: Yup.string().required("Champ requis"),
    }),
  
    // ÉTAPE 3 : Vos infos
    Yup.object({
      civilite: Yup.string().required("Champ requis"),
      prenom: Yup.string().required("Champ requis"),
      nom: Yup.string().required("Champ requis"),
      telephone: Yup.string()
        .matches(/^(\+33|0)[1-9](\d{2}){4}$/, "Numéro invalide (ex: 0612345678)")
        .required("Champ requis"),
      email: Yup.string().email("Email invalide").required("Champ requis"),
    }),
  ];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState([]);

  const initialValues = {
    salaries: "",
    cadres: "",
    nonCadres: "",
    ageNonCadres: "",
    activite: "",
    raison: "",
    adresse: "",
    codePostal: "",
    anciennete: "",
    statut: "",
    civilite: "",
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
  };

  const handleNext = (values) => {
    if (!completed.includes(step)) {
      setCompleted([...completed, step]);
    }
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Input label="Nombre de salariés à couvrir" name="salaries" />
            <Select label="Nombre de cadres à couvrir" name="cadres" options={["0", "1", "2", "3+"]} />
            <Input label="Nombre de non-cadres à couvrir" name="nonCadres" />
            <Input label="Âge moyen des non cadres" name="ageNonCadres" />
          </>
        );
      case 1:
        return (
          <>
            <Input label="Activité exacte" name="activite" icon />
            <Input label="Raison sociale" name="raison" />
            <Input label="Adresse de l'entreprise" name="adresse" />
            <Input label="Code postal" name="codePostal" />
            <Select label="Ancienneté de l'entreprise" name="anciennete" options={["Moins de 2 ans", "2 à 5 ans", "Plus de 5 ans"]} />
            <Select label="Statut juridique" name="statut" options={["SARL", "SELARL", "SAS", "Micro"]} />
          </>
        );
      case 2:
        return (
          <>
            <RadioGroup label="Civilité" name="civilite" options={["Madame", "Monsieur"]} />
            <Input label="Prénom" name="prenom" />
            <Input label="Nom" name="nom" />
            <Input label="Téléphone" name="telephone" />
            <Input label="Email" name="email" />
          </>
        );
      case 3:
        return <div className="text-center text-xl font-semibold text-green-600">🎉 Vos offres sont prêtes à être affichées !</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <FormHeader />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center ${
                  i === step
                    ? "border-blue-600 bg-blue-100"
                    : completed.includes(i)
                    ? "border-green-600 bg-green-100"
                    : "border-gray-300"
                }`}
              >
                {completed.includes(i) ? "✔" : i + 1}
              </div>
              <p className={`mt-2 text-sm ${i === step ? "font-semibold text-blue-600" : "text-gray-500"}`}>{s}</p>
            </div>
          ))}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step]}
          onSubmit={(values) => handleNext(values)}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-5">
              {renderStep()}

              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                {step > 0 && (
                  <button type="button" onClick={handleBack} className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    ← Retour
                  </button>
                )}
                {step < steps.length - 1 ? (
                  <button type="submit" className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                    Suivant →
                  </button>
                ) : (
                  <button type="submit" className="ml-auto px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Découvrir mes offres →
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// Composants réutilisables
const Input = ({ label, name, icon }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <div className="relative">
      {icon && <span className="absolute left-3 top-3 text-gray-400">🔍</span>}
      <Field
        name={name}
        className={`w-full px-4 py-2 rounded-lg border border-blue-300 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          icon ? "pl-10" : ""
        }`}
      />
    </div>
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

const Select = ({ label, name, options }) => (
  <div>
    <label className="block mb-1 font-medium">{label}</label>
    <Field as="select" name={name} className="w-full px-4 py-2 rounded-lg border border-blue-300 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
      <option value="">Choisir</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

const RadioGroup = ({ label, name, options }) => (
  <div>
    <p className="mb-1 font-medium">{label}</p>
    <div className="flex gap-4">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <Field type="radio" name={name} value={opt} className="form-radio text-blue-600" />
          {opt}
        </label>
      ))}
    </div>
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

export default MultiStepForm;
