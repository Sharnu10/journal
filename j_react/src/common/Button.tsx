const Button = (props: any) => {
  return (
    <button className="btn btn-primary" onClick={props.callApi}>
      Click to generate
    </button>
  );
};

export default Button;
