const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-screen w-full mx-auto">
        <outlet
          className="text-indigo-600 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          aria-live="polite"
        ></outlet>
      </div>
    );
  };
  
  export default LoadingSpinner;