function P(props): JSX.Element {
  return (
    <p {...props} className="my-4 text-lg font-normal">
      {props.children}
    </p>
  );
}

export { P };
