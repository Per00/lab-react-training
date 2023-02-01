export function Greetings(props) {
  console.log(props);

  return (
    <div className="lang">
      <p>
        {props.lang} {'Hallo'} {props.children}
        {props.lang} {'Bonjuar'} {props.children}
      </p>
    </div>
  );
}
