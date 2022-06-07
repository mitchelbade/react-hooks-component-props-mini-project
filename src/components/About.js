import React from "react";

function About({ image, about }) {
  return (
    <aside>
      {image ? <img alt="blog logo" src={image}></img> : <img alt="blog logo" src="https://via.placeholder.com/215"></img>}
      <p>{about}</p>
    </aside>
  );
}

export default About;