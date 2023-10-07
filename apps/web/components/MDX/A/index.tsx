function A(props): JSX.Element {
  return (
    <a
      {...props}
      className="my-4 text-lg font-normal italic text-blue-700 hover:underline"
    >
      {props.children}
    </a>
  );
}

export { A };
