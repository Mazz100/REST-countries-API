import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <svg
        className="h-36 w-36 animate-spin"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="m512 1024c-69.1 0-136.2-13.5-199.3-40.2-61-25.8-115.7-62.8-162.7-109.8s-84-101.7-109.8-162.7c-26.7-63.1-40.2-130.2-40.2-199.3 0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9s87.5 72.2 139.9 94.3c54.2 22.9 111.8 34.5 171.2 34.5s117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3s72.2-87.5 94.3-139.9c22.9-54.2 34.5-111.8 34.5-171.2s-11.6-117-34.6-171.3a440.45 440.45 0 0 0 -94.3-139.9 437.71 437.71 0 0 0 -139.9-94.3c-54.2-22.9-111.8-34.5-171.2-34.5-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2 61 25.8 115.7 62.8 162.7 109.8s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3c-25.7 61-62.7 115.7-109.7 162.7s-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
