type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button(props:ButtonProps) {
  return <button onClick={props.handleClick}>Button</button>;
}

export default Button;
