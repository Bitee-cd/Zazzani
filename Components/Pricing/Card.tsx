// Import the necessary modules
import React, { FC } from "react";
import styles from "./card.module.css";

// Define the CardProps interface
interface CardProps {
  id: number;
  price: any;
  title: any;
  billing: string;
  button_text: string;
  popular?: boolean;
  features: Array<Features>;
}

// Define the Features interface
interface Features {
  id: number;
  text: string;
}
// Define the Card functional component
const Card: FC<CardProps> = ({
  price,
  title,
  features,
  billing,
  button_text,
  popular,
  id,
}) => {
  // Render the Card component
  return (
    <div
      className={`${styles.card} card-${id} shadow-lg relative hover:bg-gray-100  duration-300`}
      data-testid="card"
    >
      <div className=" absolute top-0 right-0 ">
        {popular && (
          <p
            data-testid="popular"
            className="p-2 text-white rounded-tr-lg rounded-bl-lg uppercase text-[10px] md:text-xs font-[600] popular "
          >
            popular
          </p>
        )}
      </div>
      <p className={`card-${id}-text font-semibold text-xl`}>{title}</p>
      <p>
        <span className="text-gray-500 text-[40px]">$</span>
        <span data-testid="price" className="font-semibold text-[40px] mr-3">
          {price}
        </span>
        per month
      </p>
      <p className="text-gray-400 font-[600]">{billing}</p>
      <button className="w-full py-3 hover:opacity-70 duration-500 text-white mt-2 mb-5 [flex] items-center font-[700] bg-blue-600 rounded-lg ">
        {button_text}
      </button>
      <h4 className="text-[20px] font-[700]">Features:</h4>
      <div>
        {features.map((feature) => (
          <div key={feature.id}>
            <p className="text-base flex items-center my-2 gap-2">
              <span data-testid="checkbox">
                <Checkbox />
              </span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define default props for the Card component
Card.defaultProps = {
  price: undefined,
  title: undefined,
  billing: undefined,
  features: undefined,
  popular: undefined,
  button_text: undefined,
};
export default Card;

// Define the Checkbox component
export const Checkbox = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={24} height={24} rx={12} fill="#D3DEF6" />
    <path
      d="M17.3346 8L10.0013 15.3333L6.66797 12"
      stroke="#2158D2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
