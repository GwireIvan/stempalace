import CTA from '../components/CTA.jsx';
import InfoCard from '../components/InfoCard.jsx';
import PageHero from '../components/PageHero.jsx';
import { workshopGroups } from '../data/siteData.js';

export default function Workshops() {
  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="Premium STEM workshops for classrooms, communities and organisations"
        text="We design robotics, coding, AI and innovation workshops that are practical, polished and easy for hosts to run."
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <section className="section">
        <div className="container story-grid workshop-story">
          <figure className="story-image">
            <img src="/images/3d-printing-workshop.jpg" alt="Group learning about 3D printing equipment" />
          </figure>
          <div>
            <p className="eyebrow">Workshop experience</p>
            <h2>From demonstration to guided building</h2>
            <p>
              Workshops combine short explanations with practical building time. Learners
              handle components, test code, ask questions and leave with a clearer picture
              of how technology solves real problems.
            </p>
          </div>
          <figure className="story-image">
            <img src="/images/drone-innovation-girls.jpg" alt="Students presenting drone innovation projects" />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid">
          {workshopGroups.map((group, index) => (
            <InfoCard
              key={group}
              icon={String(index + 1).padStart(2, '0')}
              title={group}
              text="A focused, hands-on learning experience with clear objectives, guided activities and memorable takeaways."
            />
          ))}
        </div>
      </section>
      <CTA title="Book a workshop that feels organised from the first call." text="We will help you define the audience, duration, outcomes, materials and best delivery format." label="Book a Workshop" />
    </>
  );
}
