export default function Bath(props) {
    return (
      <div className={`bath ${props.size}`}>
        <p>{props.size} bath</p>
      </div>
    );
  }