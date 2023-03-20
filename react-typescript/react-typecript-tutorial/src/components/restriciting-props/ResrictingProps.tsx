type RandomNummberType = {
  value: number;
};
type PositiveNumber = RandomNummberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNummberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = RandomNummberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const ResrictingProps = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "Positive"} {isNegative && "Negative"} {isZero && "Zero"}
    </div>
  );
};

export default ResrictingProps;
