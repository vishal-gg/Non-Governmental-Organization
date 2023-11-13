"use client";

import './Faq.scss'
import { BiSolidChevronDown } from "react-icons/bi";
import { useEffect, useState } from "react";
import {useTheme} from '../contexts/ThemeProvider'

const Faq = () => {
  const [currentExpendedQues, setCurrentExpendedQues] = useState(null);
  const [clientTheme, setClientTheme] = useState(null)
  const {theme} = useTheme()

  useEffect(()=> {
    setClientTheme(theme)
  }, [theme])

  const FAQ = [
    {
      ques: "How to become a volunteer?",
      ans: "Suspendisse finibus urna mauris, vitae free text consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.",
    },
    {
      ques: "How to become a volunteer?",
      ans: "Suspendisse finibus urna mauris, vitae free text consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.",
    },
    {
      ques: "How to become a volunteer?",
      ans: "Suspendisse finibus urna mauris, vitae free text consequat quam vel. Vestibulum leo ligula, vitae commodo nisl.",
    },
  ]

  return (
    <div  className={`FAQ-container ${clientTheme !== 'light' && 'dark'}`}>
      <div className="FAQ-wrapper">
        <div className="section-1"></div>
        <div className="section-2">
          <p>Frequently Asked Questions</p>
          <h3>Have any Questions ?</h3>
          {FAQ.map((faq, i) => (
            <div
              onClick={() => setCurrentExpendedQues(prev => (prev !== i ? i : null))}
              className="ques-ans-wrapper" key={i}>
              <h5 className="faq-ques" data-accordion={`${currentExpendedQues === i && "true"}`}>
                {faq.ques} <BiSolidChevronDown />
              </h5>
              <div onClick={e => e.stopPropagation()} className="faq-ans"><p>{faq.ans}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq;
