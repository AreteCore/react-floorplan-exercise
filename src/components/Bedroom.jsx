export default function Bedroom(props) {
    return (
      <div className={`bedroom ${props.brNum}`}>
        <p>Bedroom {props.bedNum}</p>
      </div>
    );
  }
  