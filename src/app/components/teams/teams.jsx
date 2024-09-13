import React from "react";
import "./teams.scss";

const teamMembers = [
  {
    name: "Akash Awana",
    post: "Treasure",
    qualification: "B.A., B.P.Ed., M.P.Ed., CNCC, LLB (pursuing)",
    profession: "Physical Educator",
    motive:
      "Social Welfare, Education for All, Environmental Conservation, Humanitarian Aid, Development and Empowerment",
    image: "/assets/teams/akash.png",
  },
  // Add 8 more team members here
  {
    name: "Shailesh kumar",
    post: "president",
    profession: "Real estate ( Rama properties)",
    qualification: "-",
    motive:
      "To help the weaker section of the society, social welfare , to work in the field of education, to protect the environment, and to make people aware of their rights.",
   image: "/assets/teams/shailesh.png",
  },
  {
    name: "Manoj Baisoya",
    post: "vice president",
    qualification: "B.A, B.B.A, M.B.A",
    profession: "Marketing",
    motive:
      "Education for all, Environmental conservation, Development and Empowerment",
    image: "/assets/teams/manoj.png",
  },
  {
    name: "Vinod Nagar",
    post: "Secretary (Founder Member)",
    profession: "Writer & Freelancer Journalist",
    qualification: "MBA, MA(Eco.), LLB(3 Yrs), LLM (Criminal Law)",
    motive:
      "Free education is the right of every Indian child, and I want to promote and spread education to the underprivileged children of the country",
    image: "/assets/teams/vinod.png",
  },
  {
    name: "Suresh kr.Gupta",
    post: "Secretary",
    profession: "teaching (PGT commerce)",
    qualification: "B.com(hons.), Ma(Eco), Ca(inter), b.ed",
    motive:
      "As a secretary for an educational NGO, my motive is to promote equitable access to quality education, support community-driven initiatives, and facilitate programs that empower and uplift underprivileged learners.",
    image: "/assets/teams/suresh.png",
  },
  {
    name: "KANHAIYA JEE",
    post: "RESEARCH ASSOCIATE",
    image: "/assets/teams/kanhaiya.png",
  },
  
  {
    name: "Prasant Sharma",
    post: "member",
    profession: "teaching (PGT HINDI)",
    image: "/assets/teams/prashant.png",
  },
  {
    name: "Pandit Rameshkumar Pathak",
    post: "member",
   image: "/assets/teams/pandit.png",
  },
  
];

const OurTeam = () => {
  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              className="team-member__image"
            />
            <div className="team-member__details">
              <h3>{member.name}</h3>
              <p>
                <strong>Post:</strong> {member.post}
              </p>
              <p>
                <strong>Qualification:</strong> {member.qualification}
              </p>
              <p>
                <strong>Profession:</strong> {member.profession}
              </p>
              <p>
                <strong>Motive in NGO:</strong> {member.motive}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
