import icone from "../../assets/mutuelle-entreprises/images/assurance-medicale.png";

export default function AssuranceBanner() {
  return (
    <div className="bg-[#b3e5fc] w-full py-4 md:py-6 px-4 my-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src={icone}
          alt="Assurance Icon"
          className="w-10 h-10"
        />
        <h2 className="text-lg md:text-xl font-semibold text-[#002b45]">
          Partant pour la meilleure assurance ?
        </h2>
      </div>
      <a
        href="/Typeform"
        className="bg-red-400 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors mt-4 md:mt-0"
      >
        Comparer
      </a>
    </div>
  );
}
