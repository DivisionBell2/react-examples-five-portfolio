import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            date={item.date}
            index={index}
            key={item.title}
            category={item.category}
            side={item.side}
            description={item.description}
            url={item.url}
            urlName={item.urlName}
            skills={item.skills}
            exampleUrl={item.exampleUrl}
            exampleUrlName={item.exampleUrlName}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, date, category, side, description, url, urlName, skills, exampleUrl, exampleUrlName }) => (
  <div
    className={`
    timelineItem
    ${side === 'left' ? "leftTimeline" : "rightTimeline"}
    ${category}
    `}
  >
    <div className={'timelineItemInfo'}>
      <p className={'date'}>{date}</p>
      <h2>{heading}</h2>
      <p>{description}</p>
      <p><a href={url} target={"_blank"}>{urlName}</a></p>
      <p><a href={exampleUrl} target={"_blank"}>{exampleUrlName}</a></p>
      <p className="skills">skills: {skills}</p>
    </div>
  </div>
);

export default Timeline;