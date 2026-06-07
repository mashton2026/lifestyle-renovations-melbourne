import './App.css';

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a href="/" className="logo">
          <img
            src="/images/logo/lr-icon.png"
            alt="Lifestyle Renovations Melbourne"
            className="logo-icon"
          />

          <span>
            Lifestyle Renovations
            <small>Melbourne</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#residential">Residential</a>
          <a href="#commercial">Commercial</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>

          <a href="#contact" className="nav-cta">
            Request a Quote
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Melbourne Renovation Specialists</p>

          <h1 className="hero-title">
            Elegant Renovations
            <br />
            Built With Precision
          </h1>

          <p className="hero-description">
            Premium residential and commercial renovations delivered with
            craftsmanship, care and almost 30 years of building experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-card residential-card" id="residential">
          <div>
            <p className="section-label">Residential</p>
            <h2>Luxury Home Renovations</h2>
            <p>
              Bathrooms, kitchens, joinery, extensions and home improvements
              finished with detail, practicality and timeless appeal.
            </p>
          </div>
        </div>

        <div className="split-card commercial-card" id="commercial">
          <div>
            <p className="section-label">Commercial</p>
            <h2>Architectural Commercial Fit-Outs</h2>
            <p>
              Commercial interiors, studios, retail spaces and custom fit-outs
              designed to feel refined, functional and memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-header">
          <p className="section-label">Featured Projects</p>
          <h2>Recent Transformations</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <img
              src="/images/commercial/commercial-bathroom-fitout.jpg"
              alt="Commercial bathroom fit-out"
            />
            <h3>Luxury Bathroom Fit-Out</h3>
            <p>
              Premium stone finishes, feature mirrors, architectural lighting and
              carefully detailed craftsmanship.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/images/commercial/commercial-reception-desk.jpg"
              alt="Commercial reception area"
            />
            <h3>Commercial Reception Transformation</h3>
            <p>
              Bespoke reception joinery, feature lighting and refined finishes
              designed to create a strong first impression.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/images/commercial/pilates-reformer-studio.jpg"
              alt="Pilates studio fit-out"
            />
            <h3>Pilates Studio Commercial Fit-Out</h3>
            <p>
              Complete studio transformation featuring premium flooring,
              architectural lighting and custom commercial detailing.
            </p>
          </div>

        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-header">
          <p className="section-label">Featured Commercial Project</p>

          <h2>Luxury Hair Salon Fit-Out</h2>

          <p>
            A complete commercial interior transformation featuring black feature
            tiling, timber-look flooring, illuminated styling mirrors, wash
            stations and refined finishing details.
          </p>
        </div>

        <div className="showcase-grid">
          <div className="showcase-large">
            <img
              src="/images/commercial/hair-salon-finished-fitout-wide.jpg"
              alt="Completed hair salon commercial fit-out"
            />
          </div>

          <div className="showcase-small">
            <img
              src="/images/commercial/hair-salon-illuminated-mirrors.jpg"
              alt="Hair salon illuminated mirrors"
            />

            <img
              src="/images/commercial/hair-salon-wash-basin-detail.jpg"
              alt="Hair salon wash basin detail"
            />
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-image">
          <img
            src="/images/commercial/commercial-showroom.jpg"
            alt="Commercial showroom fit-out"
          />
        </div>

        <div className="testimonial-content">
          <p className="section-label">Client Testimonial</p>

          <blockquote>
            George is trustworthy, reliable, and someone you can genuinely
            count on — qualities that are invaluable when choosing a builder.
          </blockquote>

          <p>
            I would thoroughly recommend George. He takes great pride in his
            workmanship and is not satisfied until the client is completely happy
            with the finished result.
          </p>

          <p>
            George doesn’t work to a one-size-fits-all template. He listens
            carefully, adapts to his clients’ needs, offers practical advice, and
            can suggest alternative ideas and finishes.
          </p>

          <p>
            He communicates well, understands what the client wants, completes
            the job properly, and doesn’t leave loose ends behind.
          </p>

          <strong>— Tim Piper</strong>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="/images/about/george-koustoulidis-portrait.png"
            alt="George Koustoulidis"
          />
        </div>

        <div className="about-content">
          <p className="section-label">About Lifestyle Renovations</p>

          <h2>
            Meet George
          </h2>

          <p>
            At Lifestyle Renovations Melbourne, we believe exceptional spaces are
            created through experience, craftsmanship and attention to detail.
            Led by George Koustoulidis, a Victorian Registered Builder with almost
            three decades of industry experience, we deliver premium residential
            renovations and commercial fit-outs that combine quality construction
            with lasting value. From concept to completion, every project reflects
            our commitment to excellence, integrity and superior workmanship.
          </p>

          <p>
            With almost 30 years of hands-on experience in the building industry,
            George Koustoulidis has built a reputation for delivering exceptional
            workmanship, practical solutions and quality results across both
            residential and commercial projects.
          </p>

          <p>
            Beginning his career as a qualified Fibrous Plasterer and later
            achieving Certificate III qualifications in both Carpentry and Wall &
            Ceiling Lining, George has developed extensive knowledge across
            multiple building disciplines. This broad trade background, combined
            with decades of on-site experience, provides clients with practical
            solutions, efficient project delivery and a consistently high standard
            of craftsmanship.
          </p>

          <p>
            As a Registered Commercial Builder (Limited) in Victoria, George
            brings a strong understanding of construction standards, compliance
            requirements, project management and quality control to every project.
            Through Lifestyle Renovations Melbourne and LRM Commercial, he
            specialises in high-quality renovations, commercial fit-outs,
            interior transformations, wall and ceiling systems, carpentry and
            bespoke building solutions tailored to each client's needs.
          </p>

          <p>
            Clients value George's honesty, reliability and professional
            approach. Whether renovating a family home or delivering a commercial
            fit-out, his focus remains the same — exceptional workmanship, clear
            communication and results built to stand the test of time.
          </p>

        </div>
      </section>

      <section className="credentials-section">
        <div className="credential-item">
          <strong>Almost 30 Years</strong>
          <span>Industry Experience</span>
        </div>

        <div className="credential-item">
          <strong>Victorian Registered</strong>
          <span>Commercial Builder</span>
        </div>

        <div className="credential-item">
          <strong>Certificate III</strong>
          <span>Carpentry</span>
        </div>

        <div className="credential-item">
          <strong>Residential &</strong>
          <span>Commercial Fit-Outs</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-header">
          <p className="section-label">Our Services</p>
          <h2>Renovations Built Around Quality & Craftsmanship</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Bathroom Renovations</h3>
            <p>
              Luxury bathrooms, ensuites, shower upgrades and complete bathroom
              transformations designed for comfort, function and lasting style.
            </p>
          </div>

          <div className="service-card">
            <h3>Kitchen Renovations</h3>
            <p>
              Functional, beautifully crafted kitchens with thoughtful layouts,
              premium finishes, smart storage and everyday practicality.
            </p>
          </div>

          <div className="service-card">
            <h3>Home Renovations & Extensions</h3>
            <p>
              Interior redesigns, laundries, decking, carports, extensions and
              complete home improvements managed with care and precision.
            </p>
          </div>

          <div className="service-card">
            <h3>Commercial Fit-Outs</h3>
            <p>
              Commercial interiors, studios, retail spaces and professional
              fit-outs built with strong attention to detail and finish.
            </p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-intro">
          <p className="section-label">Why Choose Us</p>

          <h2>
            Experience, Design Thinking & Reliable Craftsmanship
          </h2>

          <p>
            Renovations should feel exciting, not overwhelming. With decades of
            hands-on building experience, Lifestyle Renovations Melbourne helps
            clients make confident decisions from the first conversation through
            to the final finish.
          </p>
        </div>

        <div className="why-grid">
          <div>
            <h3>Practical Design Solutions</h3>
            <p>
              We help improve layout, flow, storage and function while creating
              spaces that feel refined, balanced and visually considered.
            </p>
          </div>

          <div>
            <h3>End-to-End Project Care</h3>
            <p>
              From consultation to completion, each stage is carefully managed
              so clients feel informed, supported and confident throughout the
              renovation process.
            </p>
          </div>

          <div>
            <h3>Honest Advice</h3>
            <p>
              Clear communication matters. If a project is not the right fit,
              we say so upfront and provide practical guidance where possible.
            </p>
          </div>
        </div>

      </section>

      <section className="contact-section" id="contact">
        <div className="contact-content">
          <p className="section-label">Request a Quote</p>

          <h2>Ready To Discuss Your Renovation?</h2>

          <p>
            Whether you are planning a bathroom renovation, kitchen upgrade,
            home improvement or commercial fit-out, Lifestyle Renovations
            Melbourne can help bring your project to life.
          </p>

          <div className="contact-details">
            <p>
              <strong>Phone:</strong> +61 424 663 378
            </p>

            <p>
              <strong>Email:</strong> george@lifestylealterations.com.au
            </p>

            <p>
              <strong>Location:</strong> Melbourne, Victoria
            </p>

            <p>
              <strong>Facebook:</strong>{' '}
              <a
                href="https://www.facebook.com/share/18fjKvjQ2E/"
                target="_blank"
                rel="noreferrer"
              >
                View Business Page
              </a>
            </p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />

          <input
            type="text"
            placeholder="Suburb / Project Location"
          />

          <textarea placeholder="Tell us about your project"></textarea>

          <button type="submit">Request a Quote</button>
        </form>
      </section>
      <footer className="footer">
        <div>
          <strong>Lifestyle Renovations Melbourne</strong>
          <p>Premium residential renovations and commercial fit-outs.</p>
        </div>

        <div className="footer-links">
          <a href="#residential">Residential</a>
          <a href="#commercial">Commercial</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-small">
          © 2026 Lifestyle Renovations Melbourne. All rights reserved.
        </p>
      </footer>

      <a href="#" className="back-to-top">
        ↑
      </a>
    </div>
  );
}

export default App;