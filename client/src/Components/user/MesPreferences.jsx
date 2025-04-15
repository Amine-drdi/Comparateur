import React, { useState } from "react";

const MesPreferences = () => {
  const [activeTab, setActiveTab] = useState("emailing");
  const [newsletter, setNewsletter] = useState(false);
  const [alerts, setAlerts] = useState(true);
  const email = "mohamedtahacherchari@gmail.com";

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🎯 Mes préférences</h1>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        <button
          onClick={() => setActiveTab("emailing")}
          className={`pb-2 border-b-2 ${
            activeTab === "emailing" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
          } font-medium`}
        >
          Emailing
        </button>
        <button
          onClick={() => setActiveTab("unsubscribe")}
          className={`pb-2 border-b-2 ${
            activeTab === "unsubscribe" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
          } font-medium`}
        >
          Désabonnement
        </button>
      </div>

      {activeTab === "emailing" && (
        <>
          <p className="text-gray-700 mb-4">
            Choisissez les emails qui seront envoyés à <strong>{email}</strong>
          </p>

          <div className="bg-white rounded-2xl shadow-md p-8 flex gap-8">
            <div className="w-1/3 flex justify-center">
              <img
                src="./images/logo/cle_email.jpg"
                alt="Illustration"
               />
            </div>

            <div className="w-2/3 space-y-6">
              {/* Newsletter */}
              <div>
                <h2 className="text-lg font-semibold">📩 Newsletters</h2>
                <p className="text-sm text-gray-600">
                  Recevez chaque mois des articles et astuces “Malynx” pour gérer votre assurance et budget.
                </p>
                <p className="text-xs text-gray-400 mt-1">Fréquence : 2 emails/mois</p>
                <div className="mt-2 flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="newsletter"
                      checked={newsletter}
                      onChange={() => setNewsletter(true)}
                    />
                    Oui
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="newsletter"
                      checked={!newsletter}
                      onChange={() => setNewsletter(false)}
                    />
                    Non
                  </label>
                </div>
              </div>

              {/* Alertes */}
              <div>
                <h2 className="text-lg font-semibold">🔔 Alertes personnalisées</h2>
                <p className="text-sm text-gray-600">
                  Soyez averti(e) des échéances et nouveautés de nos services pour ne rien rater.
                </p>
                <p className="text-xs text-gray-400 mt-1">Fréquence : 2 emails/mois</p>
                <div className="mt-2 flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="alerts"
                      checked={alerts}
                      onChange={() => setAlerts(true)}
                    />
                    Oui
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="alerts"
                      checked={!alerts}
                      onChange={() => setAlerts(false)}
                    />
                    Non
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "unsubscribe" && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-red-600 mb-2">❌ Se désabonner</h2>
          <p className="text-gray-700 mb-4">
            Vous ne souhaitez plus recevoir d'emails ? Entrez votre adresse ci-dessous.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              value={email}
              readOnly
              className="border px-4 py-2 rounded w-full sm:w-1/2 bg-gray-100"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Se désabonner
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MesPreferences;
