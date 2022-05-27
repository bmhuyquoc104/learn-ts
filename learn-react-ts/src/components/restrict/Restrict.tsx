import React from "react";

type valueProps = {
  value: number;
};

type PositiveProps = valueProps & {
  isPositive: boolean;
  isZero?: never;
  isNegative?: never;
};

type NegativeProps = valueProps & {
  isNegative: boolean;
  isZero?: never;
  isPositive?: never;
};

type Zero = valueProps & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type NumberProps = PositiveProps | NegativeProps | Zero;

function Restrict({ value, isPositive, isNegative, isZero }: NumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}

export default Restrict;
