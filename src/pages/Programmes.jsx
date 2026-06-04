import CTA from '../components/CTA.jsx';
import InfoCard from '../components/InfoCard.jsx';
import PageHero from '../components/PageHero.jsx';
import { programmes } from '../data/siteData.js';

export default function Programmes() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Robotics, coding and innovation programmes for every learning stage"
        text="Flexible options for schools, families, holiday learners, teachers and organisations that want practical STEM outcomes."
        secondaryLabel="See Curriculum"
        secondaryTo="/curriculum"
      />
      <section className="section">
        <div className="container card-grid">
          {programmes.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
      </section>
      <CTA title="Need a custom training plan?" text="We can tailor duration, learner level, devices, projects and delivery format to your goals." />
    </>
  );
}
