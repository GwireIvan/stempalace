import CTA from '../components/CTA.jsx';
import PageHero from '../components/PageHero.jsx';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About STEM Palace"
        title="Uganda-based STEM education with a practical technology mindset"
        text="STEM Palace helps learners move from curiosity to capability through robotics, coding, engineering thinking, innovation and practical digital skills."
        secondaryLabel="View Programmes"
        secondaryTo="/programmes"
      />
      <section className="section">
        <div className="container split-section">
          <div>
            <h2>We turn technology education into something learners can touch, build and explain.</h2>
            <p>
              STEM Palace works with schools, parents, students, NGOs and companies across Uganda to
              make STEM learning more engaging, useful and career-relevant. Our sessions are designed
              to help learners think like creators: identifying problems, building prototypes, coding
              solutions and communicating ideas with confidence.
            </p>
          </div>
          <div className="image-panel">
            <img src="/images/learner-certification.jpg" alt="Learners celebrating technology training completion" />
            <div className="mission-panel overlay-panel">
              <h3>Our focus</h3>
              <ul>
                <li>Robotics and engineering thinking</li>
                <li>Coding foundations and computational logic</li>
                <li>AI literacy and responsible innovation</li>
                <li>Project-based learning and presentation skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container values-grid">
          <div><strong>Practical</strong><span>Students learn by building and testing.</span></div>
          <div><strong>Professional</strong><span>Schools receive structured programmes and clear communication.</span></div>
          <div><strong>Relevant</strong><span>Lessons connect technology to Ugandan communities and real opportunities.</span></div>
          <div><strong>Future-ready</strong><span>Learners develop skills for study, work and entrepreneurship.</span></div>
        </div>
      </section>
      <CTA title="Let’s shape your next STEM programme." text="From a single demo day to a full school club, STEM Palace can design the right format." />
    </>
  );
}
