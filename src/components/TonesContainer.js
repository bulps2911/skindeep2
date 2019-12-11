import React from "react";
import Tones from "./Tones";
import sun from "../assets/icon-sun.svg";
import water from "../assets/icon-drop.svg";
import neutral from "../assets/icon-tree.svg";
import "./TonesContainer.css";

function TonesContainer(props) {
  return (
    <div className="TonesContainer">
      <h2>TONES</h2>
      <div className="norm">
        <Tones
          img={sun}
          imgAlt="sun"
          align="left"
          title="WARM"
          description="Anim fugiat laboris ipsum dolore consequat nulla duis tempor. Tempor in reprehenderit amet proident eu duis est veniam. Irure tempor occaecat ad qui non. In ex et nulla laboris sit et elit aliquip.

Duis qui officia cillum consectetur eu commodo commodo fugiat non incididunt. In aute irure reprehenderit labore cillum anim ex excepteur excepteur eiusmod fugiat mollit cillum aliqua. Et amet fugiat id ex eiusmod dolore."
        />
      </div>
      <div className="alt">
        <Tones
          img={water}
          imgAlt="water"
          align="right"
          title="COOL"
          description="Fugiat ullamco proident exercitation ut. In id ullamco id fugiat. Labore veniam ullamco irure consequat qui ipsum cupidatat aliqua. Excepteur non magna ad non adipisicing sit sunt. Nisi excepteur dolor eu consequat exercitation.

Nisi dolor enim elit labore in nulla quis labore veniam sit occaecat. Excepteur do aliqua ut exercitation adipisicing in nulla dolor commodo aliqua amet aliqua. Occaecat reprehenderit laborum Lorem qui minim reprehenderit laborum officia sunt nostrud id officia. Elit aliquip consectetur tempor dolore irure velit nisi eiusmod mollit sunt duis laborum Lorem. Veniam ullamco proident esse deserunt laboris ut dolore fugiat eu commodo eiusmod irure aute cillum. Et veniam pariatur qui exercitation do."
        />
      </div>
      <div className="norm">
        <Tones
          img={neutral}
          imgAlt="water"
          align="left"
          title="NEUTRAL"
          description="Duis culpa deserunt culpa ea cupidatat ullamco tempor qui magna eu incididunt labore culpa. Nisi sunt aute in occaecat. Occaecat reprehenderit excepteur quis eiusmod aliqua ullamco officia velit fugiat cupidatat labore. Incididunt nisi consectetur laboris exercitation nostrud quis officia voluptate et ut dolore mollit eiusmod. Excepteur ut dolore occaecat cupidatat pariatur veniam proident.

Aliquip tempor duis voluptate consectetur duis deserunt dolor eiusmod consequat veniam ea. Proident ea dolor reprehenderit labore voluptate sit amet sint Lorem dolore irure. Nisi anim laborum nisi sit do Lorem."
        />
      </div>
    </div>
  );
}

export default TonesContainer;
