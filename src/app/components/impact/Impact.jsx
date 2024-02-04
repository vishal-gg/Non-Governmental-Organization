import './Impact.scss'
import CountUp from 'react-countup'

const Impact = () => {

  const impacts = [
    {numbers: 15, title: "Lac", desc: "children and their families are impacted every year"},
    {numbers: 2000, title: "Villages", desc: "and slums are reached out to across the country"},
    {numbers: 400, title: "Projects", desc: "focused on education, healthcare, and women empowerment"},
    {numbers: 25, title: "States", desc: "are reached including the remotest areas"}
  ]

  return (
    <div className='impact_container'>
      <h3 className='title'>Our Impact</h3>
      <div className='wrapper'>
        {impacts.map((impact, i) => (
          <div key={i}>
            <p><CountUp end={impact.numbers} enableScrollSpy scrollSpyOnce />+</p>
            <p>{impact.title}</p>
            <p>{impact.desc}</p>
          </div>    
          ))}
      </div>
    </div>
  )
}

export default Impact;
