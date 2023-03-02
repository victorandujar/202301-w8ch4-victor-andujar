interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button className="key-buttons">{text}</button>;
};

export default Button;
