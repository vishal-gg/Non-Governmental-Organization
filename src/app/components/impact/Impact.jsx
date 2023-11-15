import './Impact.scss'
import CountUp from 'react-countup'

const Impact = () => {

  const Impacts = [
    {numbers: 15, title: "Lac", desc: "children and their families are impacted every year"},
    {numbers: 2000, title: "Villages", desc: "and slums are reached out to across the country"},
    {numbers: 400, title: "Projects", desc: "focused on education, healthcare, and women empowerment"},
    {numbers: 25, title: "States", desc: "are reached including the remotest areas"}
  ]

  return (
    <div className='impact__container'>
      <h2 className='title'>Our Impact</h2>
      <div className='wrapper'>
        {Impacts.map((impact, i) => (
          <div className='detail__wrapper' key={i}>
            <p className='detail__number'><CountUp end={impact.numbers} enableScrollSpy scrollSpyOnce />+</p>
            <p className='detail__title'>{impact.title}</p>
            <p className='detail__description'>{impact.desc}</p>
          </div>    
          ))}
      </div>
    </div>
  )
}

export default Impact;
