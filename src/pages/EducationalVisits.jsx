import CTA from '../components/CTA.jsx';
import InfoCard from '../components/InfoCard.jsx';
import PageHero from '../components/PageHero.jsx';

export default function EducationalVisits() {
  const visits = [
    { icon: 'DM', image: '/images/robotics-class-demo.jpg', title: 'Robotics demos', text: 'Learners see robots in action, ask questions and explore how sensors, code and motors work together.' },
    { icon: 'CA', image: '/images/coding-electronics-lab.jpg', title: 'Coding activities', text: 'Short practical challenges introduce logic, sequencing, debugging and creative programming.' },
    { icon: 'IT', image: '/images/teacher-training-session.jpg', title: 'Innovation talks', text: 'Inspiring sessions connect STEM skills to entrepreneurship, problem solving and careers.' },
    { icon: 'CG', image: '/images/school-robotics-team.jpg', title: 'STEM career guidance', text: 'Learners discover pathways in engineering, software, data, AI, design and technology leadership.' }
  ];

  return (
    <>
      <PageHero
        eyebrow="Educational Visits"
        title="We bring engaging STEM experiences directly to your school"
        text="STEM Palace visits schools to run demos, robotics sessions, coding activities, innovation talks and STEM career guidance."
      />
      <section className="section">
        <div className="container card-grid">
          {visits.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
      </section>
      <CTA title="Host a STEM Palace visit at your school." text="Choose a demo day, full-day activation or recurring visit designed around your learners." label="Book a Visit" />
    </>
  );
}
