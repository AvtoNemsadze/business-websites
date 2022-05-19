import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


export default function ImageBox() {
    const myStyle = {
        color: 'black',
        borderBottom:'3px solid orange',
        borderPosition:'center',
        width:'10%',
        justifyContent:'center',
        fontFamily:'cursive'
    }

    const divStyle = {
        textAlign:'center',
        justifyContent:'center',
        display:'flex',
        padding:'0.5rem'
    }

  return (
    <React.Fragment>
        <div style={divStyle}>
            <h1 style={myStyle}>Timeline</h1>
        </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>We have energy market expertise, corporate buying power, and commitment to supporting the commercial market and providing competitive pricing.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>You can rest easy knowing that you have chosen an established energy supplier who will be able to meet your long and short-term energy supply needs.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>We have products that can be customized to fit your particular needs. Whether you own a small or large business, our energy solutions are tailored to meet your energy needs.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>We have a team of industry experts who will work with you to develop an energy supply solution that meets your needs, requirements and budget as well.</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>We have a team of industry experts who will work with you to develop an energy supply solution that meets your needs, requirements and budget as well.</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>In the company, we understand the importance of having the right energy partner, and we are proud to be one of the largest providers of electricity in the 2002.</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
