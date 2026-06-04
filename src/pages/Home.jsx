import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import InfoCard from '../components/InfoCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { audiences, programmes } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">STEM education in Uganda</p>
            <h1>Empowering Uganda’s Future Through STEM, Coding & Robotics</h1>
            <p className="hero-subtitle">
              STEM Palace helps schools, students, and organizations build practical technology skills
              through hands-on robotics, coding, AI, and engineering programmes.
            </p>
            <div className="button-row">
              <Link className="btn btn-primary" to="/contact">Book a Workshop</Link>
              <Link className="btn btn-secondary" to="/programmes">View Programmes</Link>
            </div>
            <div className="hero-stats">
              <span><strong>7+</strong> learning tracks</span>
              <span><strong>100%</strong> practical sessions</span>
              <span><strong>UG</strong> school-ready delivery</span>
            </div>
          </div>
          <div className="hero-visual hero-photo" aria-label="Students working on a robotics project">
            <img src="/images/school-robotics-team.jpg" alt="Ugandan students working together on a robotics project" />
            <div className="photo-caption">
              Hands-on robotics, coding and engineering sessions for schools and young innovators.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why STEM Palace"
            title="A practical, future-ready STEM partner for schools and communities"
            text="We combine strong teaching, modern tools and project-based learning so learners do more than watch technology. They build it."
          />
          <div className="feature-grid">
            <InfoCard icon="01" title="Hands-on learning" text="Every session is built around making, testing, debugging and presenting real projects." />
            <InfoCard icon="02" title="Curriculum alignment" text="Programmes can support school objectives while adding robotics, coding and innovation practice." />
            <InfoCard icon="03" title="Professional delivery" text="Clear schedules, polished materials and measurable learner outcomes for every engagement." />
          </div>
        </div>
      </section>

      <section className="section image-story-section">
        <div className="container story-grid">
          <figure className="story-image tall">
            <img src="/images/electronics-workshop-africa.jpg" alt="Learners building electronics projects with laptops and components" />
          </figure>
          <div>
            <p className="eyebrow">What learning looks like</p>
            <h2>Real tools, real teamwork, real projects</h2>
            <p>
              Learners do not just listen to technology lessons. They connect sensors,
              debug code, build prototypes, test ideas and present what they have made.
              That practical experience is what makes STEM Palace useful to schools,
              parents and partners.
            </p>
          </div>
          <figure className="story-image">
            <img src="/images/coding-electronics-lab.jpg" alt="Coding and electronics project on laptops" />
          </figure>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Featured programmes"
            title="Technology experiences that learners remember"
            text="Choose a focused workshop, ongoing club, holiday bootcamp or custom training plan for your school or organisation."
          />
          <div className="card-grid">
            {programmes.slice(0, 6).map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Who we serve</p>
            <h2>Built for the people investing in Uganda’s digital talent</h2>
            <p>
              STEM Palace supports institutions and families that want learners to gain confidence,
              creativity and practical technology fluency.
            </p>
          </div>
          <div className="audience-list">
            {audiences.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <CTA
        title="Bring a premium STEM experience to your school or organisation."
        text="Tell us your learners’ age group, goals and schedule. We will recommend the right robotics, coding or innovation programme."
        label="Contact Us"
      />
    </>
  );
}
