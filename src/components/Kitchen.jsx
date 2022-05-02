import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return (
    <div className="kitchen">
      <div className="kitchenette">
        <Oven />
        <Sink />
      </div>
      <p>Kitchen!</p>
    </div>
  );
};

export default Kitchen;
