import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
};

export const Button = ({ variant = "primary", ...props }) => {
  const { children, style } = props;
  const _style: React.CSSProperties = style || {};
  switch (variant) {
    case "primary":
      _style.backgroundColor = "#006E7F";
      _style.color = "#fff";
      _style.fontWeight = "bold";
      break;
    case "secondary":
      _style.backgroundColor = "#F8CB2E";
      _style.color = "#000";
      _style.fontWeight = "bold";
      break;
    case "danger":
      _style.backgroundColor = "#B22727";
      _style.color = "#fff";
      _style.fontWeight = "bold";
      break;
  }
  _style.padding = "5px 10px";
  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
};
