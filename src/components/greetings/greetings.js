export function Greetings(props) {
  //console.log(props);
  if (props.lang === 'de') {
    return <p>Hallo! {props.children}</p>;
  }
  if (props.lang === 'fr') {
    return <p>Bonjuar! {props.children}</p>;
  }
}
