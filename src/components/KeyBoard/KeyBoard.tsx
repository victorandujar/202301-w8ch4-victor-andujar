import Button from "../Button/Button";

const keys = [
  "C",
  "/",
  "x",
  "9",
  "8",
  "7",
  "-",
  "6",
  "5",
  "4",
  "+",
  "3",
  "2",
  "1",
  "=",
  ".",
  "0",
];

const KeyBoard = (): JSX.Element => {
  return (
    <ul>
      {keys.map((key) => {
        return (
          <li key={key}>
            <Button text={key} />
          </li>
        );
      })}
    </ul>
  );
};

export default KeyBoard;
