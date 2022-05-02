import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";
import "../styles.css";

export default function FloorPlan(props) {
    return (
      <div className="floor-plan">
        <Bedroom bedNum="1" brNum="bedroom-1" />
        <Kitchen />
        <Bath size="full" />
        <Bedroom bedNum="2" brNum="bedroom-2" />
        <LivingRoom />
        <Bath size="half" />
        <Bedroom bedNum="3" brNum="bedroom-3" />
      </div>
    );
  }