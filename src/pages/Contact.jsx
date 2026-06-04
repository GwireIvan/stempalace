import PageHero from '../components/PageHero.jsx';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a STEM Palace programme"
        text="Share a few details and we will help you choose the best robotics, coding, AI or innovation experience for your learners."
        primaryLabel="WhatsApp Us"
        primaryHref="https://wa.me/256781514157"
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="+256..." />
            </label>
            <label>
              Programme interest
              <select name="interest" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Robotics Training</option>
                <option>Coding Classes</option>
                <option>Educational Visit</option>
                <option>Holiday STEM Bootcamp</option>
                <option>Teacher Training</option>
                <option>Company or NGO Workshop</option>
              </select>
            </label>
            <label className="full-span">
              Message
              <textarea name="message" rows="6" placeholder="Tell us about your school, learners, preferred dates or goals." />
            </label>
            <button className="btn btn-primary full-span" type="submit">Send Message</button>
          </form>
          <aside className="contact-card">
            <img className="contact-image" src="/images/learner-certification.jpg" alt="STEM learners celebrating programme completion" />
            <h2>Let’s talk</h2>
            <p>STEM Palace is based in Uganda and available for school visits, workshops, clubs and partner programmes.</p>
            <div className="contact-line"><strong>Location</strong><span>Plot 2090 Ndiwulira Road, Mbalwa Kiira, Kampala</span></div>
            <div className="contact-line"><strong>Contact</strong><span>0781514157 or 0709174397</span></div>
            <div className="contact-line"><strong>WhatsApp</strong><span>0781514157</span></div>
            <div className="contact-line"><strong>Email</strong><span>info.stempalace@gmail.com</span></div>
            <div className="social-links">
              <a href="https://www.youtube.com/@STEMPalace" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.instagram.com/stempalace/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@stempalace" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
