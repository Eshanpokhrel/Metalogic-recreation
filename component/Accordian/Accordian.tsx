"use client"
import * as React from 'react';
import './Accordian.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface accProps {
    question: string;
    answer: string;
  }

const AccordionUsage = ({ question, answer }: accProps) => {

    const [isBlue, setIsBlue] = React.useState(false);

    const changeColor = () => {
        setIsBlue(!isBlue);
    }

    const textColor = isBlue ? '#2a4ab3' : '#545454';

  return (
    <div className='acc-wrapper'>
      <Accordion className='acc'>
        <AccordionSummary
          onClick={changeColor}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ color : textColor }}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails className='answer-text'>
          {answer}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionUsage
