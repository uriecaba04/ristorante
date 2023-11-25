import React from "react";
import { Media } from "reactstrap";
function RenderLeader(props) {
  if (props.leaders != null) {
    const leaders = props.leaders.map((leader) => {
      return (
        <Media li className="mt-3">
          <Media className="ml-5">
            <Media left middle>
              <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{leader.name}</Media>
              <Media subheading>{leader.designation}</Media>
              <br />
              <p>{leader.description}</p>
            </Media>
          </Media>
        </Media>
      );
    });

    return <div className="col-12">{leaders}</div>;
  } else {
    return <div></div>;
  }
}

export default RenderLeader;
