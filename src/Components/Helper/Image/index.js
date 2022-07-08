import React from "react";
import { Wrapper } from "./styled";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <div></div>}
      <img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
