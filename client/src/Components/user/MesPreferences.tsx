import React, { useState } from "react";

const MesPreferences: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'emailing' | 'unsubscribe'>("emailing");
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<boolean>(true);
  const email: string = "mohamedtahacherchari@gmail.com";

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">🎯 Mes préférences</h1>

      {/* Onglets */}
      <div className="flex justify-center gap-6 border-b pb-2 mb-8">
        <button
          onClick={() => setActiveTab("emailing")}
          className={`text-sm font-medium transition pb-2 ${
            activeTab === "emailing"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Emailing
        </button>
        <button
          onClick={() => setActiveTab("unsubscribe")}
          className={`text-sm font-medium transition pb-2 ${
            activeTab === "unsubscribe"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Désabonnement
        </button>
      </div>

      {/* Emailing */}
      {activeTab === "emailing" && (
        <>
          <p className="text-gray-700 text-center mb-6">
            Choisissez les types d'emails à recevoir sur <strong>{email}</strong>
          </p>

          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img
                src="./images/logo/cle_email.jpg"
                alt="Illustration"
                className="rounded-xl max-h-[250px]"
              />
            </div>

            <div className="md:w-2/3 space-y-8">
              {/* Newsletter */}
              <div>
                <h2 className="text-lg font-semibold mb-1">📩 Newsletters</h2>
                <p className="text-sm text-gray-600">
                  Recevez chaque mois des articles et astuces pour gérer votre assurance et votre budget.
                </p>
                <p className="text-xs text-gray-400 mt-1">Fréquence : 2 emails/mois</p>

                <div className="mt-3 flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="newsletter"
                      checked={newsletter}
                      onChange={() => setNewsletter(true)}
                      className="accent-blue-600"
                    />
                    Oui
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="newsletter"
                      checked={!newsletter}
                      onChange={() => setNewsletter(false)}
                      className="accent-blue-600"
                    />
                    Non
                  </label>
                </div>
              </div>

              {/* Alertes */}
              <div>
                <h2 className="text-lg font-semibold mb-1">🔔 Alertes personnalisées</h2>
                <p className="text-sm text-gray-600">
                  Recevez des rappels d’échéance ou des alertes sur nos nouveautés.
                </p>
                <p className="text-xs text-gray-400 mt-1">Fréquence : 2 emails/mois</p>

                <div className="mt-3 flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="alerts"
                      checked={alerts}
                      onChange={() => setAlerts(true)}
                      className="accent-blue-600"
                    />
                    Oui
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="alerts"
                      checked={!alerts}
                      onChange={() => setAlerts(false)}
                      className="accent-blue-600"
                    />
                    Non
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Désabonnement */}
      {activeTab === "unsubscribe" && (
        <div className="bg-white rounded-3xl shadow-md p-8 mt-4 text-center max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-red-600 mb-2">❌ Se désabonner</h2>
          <p className="text-gray-700 mb-4">
            Vous ne souhaitez plus recevoir d'emails ? Entrez votre adresse ci-dessous.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              readOnly
              className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-2/3 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition">
              Se désabonner
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MesPreferences;
