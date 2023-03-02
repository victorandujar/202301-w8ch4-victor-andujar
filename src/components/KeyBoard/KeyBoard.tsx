import Button from "../Button/Button";

const keys = [
  "C",
  "/",
  "x",
  "9",
  "6",
  "7",
  "8",
  "-",
  "3",
  "4",
  "5",
  "+",
  "1",
  "2",
  ".",
  "=",
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
