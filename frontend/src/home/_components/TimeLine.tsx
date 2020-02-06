import React from "react";

import "./TimeLine.scss";

export default class TimeLine extends React.Component {
  timeline(props: React.PropsWithChildren<{}>): JSX.Element {
    return <div id="timeline">{props.children}</div>;
  }

  date(props: { date: string }): JSX.Element {
    return <div className="date">{props.date}</div>;
  }

  entry(props: React.PropsWithChildren<{}>): JSX.Element {
    return <div className="entry">{props.children}</div>;
  }

  texts(props: React.PropsWithChildren<{}>): JSX.Element {
    return <div className="texts">{props.children}</div>;
  }

  dotted(props: React.PropsWithChildren<{}>): JSX.Element {
    return <div className="dotted">{props.children}</div>;
  }

  spacing(props: React.PropsWithChildren<{}>): JSX.Element {
    return <div className="spacing">{props.children}</div>;
  }

  timelinePoint(props: {
    color: string;
    text: string;
    tooltip: string;
  }): JSX.Element {
    let textColor =
      props.color === "warning" || props.color === "white"
        ? "has-text-black"
        : "has-text-white";
    return (
      <div
        className={`tag is-large is-${props.color} ${textColor} tooltip is-tooltip-${props.color} is-tooltip-multiline`}
        data-tooltip={props.tooltip}
        style={{ width: "90%" }}
      >
        {props.text}
      </div>
    );
  }

  render(): JSX.Element {
    return (
      <this.timeline>
        <u className="is-half is-family-code has-text-underlined">Timeline</u>
        <this.entry>
          <this.date date="2005" />
          <this.texts>
            <this.timelinePoint
              color="dark"
              text="Start of everything"
              tooltip="Here starts everything... First real experience with computers, mainly windows, etc."
            />
          </this.texts>
        </this.entry>
        <this.dotted />
        <this.entry>
          <this.date date="2009" />
          <this.texts>
            <this.timelinePoint
              color="warning"
              text="Started with Java and WEB"
              tooltip="Beginning of my programming knowledge"
            />
            <this.timelinePoint
              color="dark"
              text="First look into Linux"
              tooltip="Beginning of my programming knowledge"
            />
          </this.texts>
        </this.entry>
        <this.dotted />
        <this.entry>
          <this.date date="2012" />
          <this.texts>
            <this.timelinePoint
              color="warning"
              text="Started with C/C++"
              tooltip="Major step into the 'native world'!"
            />
            <this.timelinePoint
              color="link"
              text="Started learning Japanese"
              tooltip="I loved this language since the beginning!"
            />
          </this.texts>
        </this.entry>
        <this.dotted />
        <this.entry>
          <this.date date="2014" />
          <this.texts>
            <this.timelinePoint
              color="link"
              text="LCCI certificate"
              tooltip="Finished my LCCI business english certificate"
            />
          </this.texts>
        </this.entry>
        <this.spacing />
        <this.entry>
          <this.date date="2015" />
          <this.texts>
            <this.timelinePoint
              color="info"
              text="Primary education"
              tooltip="[2009-2015] German primary school education, completed with allowance for secondary school education."
            />
          </this.texts>
        </this.entry>
        <this.dotted />
        <this.entry>
          <this.date date="2018" />
          <this.texts>
            <this.timelinePoint
              color="info"
              text="Secondary education"
              tooltip="[2015-2018] German secondary school education, completed with vocational diploma."
            />
            <this.timelinePoint
              color="success"
              text="Best 1st semester uni project"
              tooltip="My team got voted the best first semester project!"
            />
            <this.timelinePoint
              color="link"
              text="Dutch certificate"
              tooltip="Right before starting my study!"
            />
          </this.texts>
        </this.entry>
        <this.spacing />
        <this.entry>
          <this.date date="2019" />
          <this.texts>
            <this.timelinePoint
              color="warning"
              text="Started with Rust"
              tooltip="Starting point of learning rust"
            />
            <this.timelinePoint
              color="success"
              text="Best 2nd semester uni project"
              tooltip="My team managed to be one of the best projects!"
            />
          </this.texts>
        </this.entry>
        <this.spacing />
        <this.entry>
          <this.date date="2020" />
          <this.texts>
            <this.timelinePoint
              color="white"
              text="Internship"
              tooltip="Hopefully a fantastic experience!"
            />
          </this.texts>
        </this.entry>
        <this.spacing />
        <this.entry>
          <this.date date="2021" />
          <this.texts>
            <this.timelinePoint
              color="white"
              text="Minor"
              tooltip="Not yet sure what ..."
            />
          </this.texts>
        </this.entry>
        <this.spacing />
        <this.entry>
          <this.date date="2022" />
          <this.texts>
            <this.timelinePoint
              color="white"
              text="International study"
              tooltip="[2018-2022] Software engineering study, abroad in the Netherlands. To be completed with a bachelor of science degree."
            />
          </this.texts>
        </this.entry>
      </this.timeline>
    );
  }
}