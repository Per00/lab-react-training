export function BoxColor(props) {
  let divStyle = {
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
  };

  return (
    <div className="color" style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}
