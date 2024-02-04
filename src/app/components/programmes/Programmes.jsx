import './Programmes.scss'
import education from '../../../../public/assets/education.png'
import healthcare from '../../../../public/assets/healthcare.png'
import livehood from '../../../../public/assets/livehood.png'
import disaster_reponse from '../../../../public/assets/disaster_response.png'
import women_empowerment from '../../../../public/assets/women_empowerment.png'
import empowering_grassroots from '../../../../public/assets/empowering.png'
import Image from 'next/image'

const programmes = [
  {
    image: education,
    heading: "EDUCATION",
    paragraph: "Education, nutrition and holistic education of children."
  },
  {
    image: healthcare,
    heading: "HEALTHCARE",
    paragraph: "Taking the healthcare services to doorsteps of hard to reach communities."
  },
  {
    image: livehood,
    heading: "LIVELIHOOD",
    paragraph: "Skill training and placement support for underprivileged youth."
  },
  {
     image: disaster_reponse,
     heading: "DISASTER RESPONSE",
     paragraph: "Reach out and respond to the needs of the disaster-affected people."
   },
   {
      image: women_empowerment,
      heading: "WOMEN EMPOWERMENT",
      paragraph: "Empowering adolescent girls & women through community engagement."
   },
   {
     image: empowering_grassroots,
     heading: "EMPOWERING GRASSROOTS",
     paragraph: "Helping community-based organizations become locally sustainable."
   }
];

const Programmes = () => {
  return (
    <div className="programmes_container">
      <h3 className="title">Programmes</h3>
      <div className="wrapper">
        {programmes.map((data) => (
          <div key={data.heading}>
            <span>
               <Image src={data.image} alt="404" fill />
            </span>
            <div>
               <h5 className={data.heading.toLowerCase().replaceAll(" ","_")}>{data.heading}</h5>
               <p>{data.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programmes;
