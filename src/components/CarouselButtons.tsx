import React from "react";

interface CaroButtonsProp {
  onClick: () => void;
}

export const PrevButton: React.FC<CaroButtonsProp> = ({ onClick }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="50px"
      height="50px"
      viewBox="0 0 199.404 199.404"
      xmlSpace="preserve"
      className="prev-button"
      onClick={onClick}
    >
      <g style={{ fill: "#dee3ed" }}>
        <polygon
          points="199.404,81.529 74.742,81.529 127.987,28.285 99.701,0 0,99.702 99.701,199.404 127.987,171.119 74.742,117.876 
		199.404,117.876"
        />
      </g>
    </svg>
  );
};

export const NextButton: React.FC<CaroButtonsProp> = ({ onClick }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="50px"
      height="50px"
      viewBox="0 0 199.405 199.405"
      xmlSpace="preserve"
      className="next-button"
      onClick={onClick}
    >
      <g style={{ fill: "#dee3ed" }}>
        <polygon
          points="99.703,199.405 199.405,99.702 99.703,0 71.418,28.285 124.662,81.529 0,81.529 0,117.876 124.662,117.876 
                71.418,171.12 	"
        />
      </g>
    </svg>
  );
};
