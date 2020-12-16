import React, { useState } from "react";
import  './Accordion.css'

const Accordion = ({ items }) => {
  const [activeIndex, setactiveIndex] = useState(null);

  const onTtitleClick = (index) => {
    setactiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
      const active=index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTtitleClick(index)} className="title">
          <i className={"dropdown " + active}>{item.title}</i>
        </div>
        <div className={"content "+active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div  className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
