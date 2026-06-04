import CTA from '../components/CTA.jsx';
import InfoCard from '../components/InfoCard.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { curriculumPathway, curriculumTracks, ugandaCurriculumAlignment } from '../data/siteData.js';

export default function Curriculum() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="A Uganda-aligned STEM curriculum for practical competence"
        text="Our curriculum supports Uganda's learner-centred, competency-based direction by connecting robotics, coding, AI and engineering to school subjects, project work and real community problem-solving."
        secondaryLabel="Book a Visit"
        secondaryTo="/educational-visits"
      />
      <section className="section image-story-section">
        <div className="container story-grid">
          <figure className="story-image">
            <img src="/images/sensor-display-project.jpg" alt="Arduino sensor project displaying temperature and humidity" />
          </figure>
          <div>
            <p className="eyebrow">Evidence of learning</p>
            <h2>Curriculum that ends in prototypes, portfolios and presentations</h2>
            <p>
              Each pathway is designed around visible learner output: code files,
              electronics builds, robot mechanisms, design notes, test results and
              short presentations that support continuous assessment.
            </p>
          </div>
          <figure className="story-image tall">
            <img src="/images/robot-mechanism-closeup.jpg" alt="Close-up of a robot drivetrain and mechanical assembly" />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Uganda pathway"
            title="Structured from upper primary to advanced applied technology"
            text="The pathway is designed to complement Uganda's primary foundation, lower secondary competency-based curriculum, O Level subject choices and post-secondary innovation pathways."
          />
          <div className="curriculum-timeline">
            {curriculumPathway.map((stage) => (
              <article className="timeline-card" key={stage.level}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-icon">{stage.icon}</div>
                  <div>
                    <span>{stage.age}</span>
                    <h3>{stage.level}</h3>
                    <p>{stage.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Curriculum alignment"
            title="How STEM Palace supports Uganda's curriculum goals"
            text="This is not a separate school syllabus. It is an enrichment framework that helps schools deliver practical STEM experiences aligned to national curriculum priorities."
          />
          <div className="card-grid">
            {ugandaCurriculumAlignment.map((item, index) => (
              <InfoCard
                key={item.title}
                icon={String(index + 1).padStart(2, '0')}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="STEM Palace tracks"
            title="Practical learning tracks schools can adopt"
            text="Each track can be delivered as a short workshop, termly club, holiday bootcamp or extended school programme with learner portfolios and clear project outcomes."
          />
          <div className="track-grid">
            {curriculumTracks.map((track, index) => (
              <article className="track-card" key={track}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{track}</h3>
                <p>Clear milestones, practical projects and learner-friendly assessment points.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Choose a curriculum path that fits your learners." text="We can recommend a beginner, intermediate or advanced pathway after a short consultation." />
    </>
  );
}
