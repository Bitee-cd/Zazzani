import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../Components/Pricing/Card";

describe("Card", () => {
  const defaultProps = {
    id: 1,
    price: 9.99,
    title: "Test Title",
    billing: "billed annually",
    button_text: "Subscribe Now",
    features: [
      {
        id: 1,
        text: "Feature 1",
      },
      {
        id: 2,
        text: "Feature 2",
      },
    ],
  };

  test("renders the Card component with props", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByTestId("price")).toHaveTextContent(defaultProps.price);
    expect(screen.getByText(defaultProps.billing)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.button_text)).toBeInTheDocument();
    expect(screen.getByText("Features:")).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
  });

  test("renders the popular tag when popular prop is true", () => {
    const popularProps = { ...defaultProps, popular: true };
    render(<Card {...popularProps} />);

    expect(screen.getByTestId("popular")).toBeInTheDocument();
    expect(screen.getByText("popular")).toBeInTheDocument();
  });

  test("does not render the popular tag when popular prop is false or undefined", () => {
    const falsePopularProps = { ...defaultProps, popular: false };
    const undefinedPopularProps = { ...defaultProps };
    render(<Card {...falsePopularProps} />);
    expect(screen.queryByTestId("popular")).toBeNull();

    render(<Card {...undefinedPopularProps} />);
    expect(screen.queryByTestId("popular")).toBeNull();
  });

  test("renders the Checkbox component", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getAllByTestId("checkbox")).toHaveLength(
      defaultProps.features.length
    );
  });
});
