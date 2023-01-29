import React, { FC } from "react";

import "./Styles.css";
import Foward from "../../assets/undo.svg";

interface TitleProps {
  content: String;
}

const Title: FC<TitleProps> = ({content}) => {
  return (
    <div className="title-view">
      <p className="path">
          <img src={Foward} alt="foward" />
          {content}
        </p>
    </div>
  );
};

export default Title