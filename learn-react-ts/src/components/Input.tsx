type InputProps = {
  value?: "";
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
    <input type="text" onChange={props.handleChange} value={props.value} />
  );
}

export default Input;
