import { ArrowUpRight, Check, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { ButtonLink, CtaBand, ListArrow, PageHero, ProjectCard, ProjectVisual, SectionIntro } from '@/components/PortfolioUI';

const websiteProjects = [
  { title: 'News Website', category: 'WordPress / Website Development', description: 'A practical news website project focused on structured articles and readable content presentation.', url: 'https://fancy-rice-8344.vijayvinith146.workers.dev/', variant: 'coral' as const },
  { title: 'Food Restaurant Website', category: 'WordPress / Website Development / Content', description: 'A practical restaurant website project designed to present food offerings, menu information and business content through a structured website.', url: 'https://winter-thunder-8929.vijayvinith146.workers.dev/', variant: 'yellow' as const },
  { title: 'Blog Website', category: 'WordPress / Content / SEO', description: 'A structured blog website project focused on readable content, article presentation and clean navigation.', url: 'https://steep-forest-5df1.vijayvinith146.workers.dev/', variant: 'blue' as const },
  { title: 'Business Website', category: 'WordPress / Website Development / SEO', description: 'A business website project created with WordPress and Elementor, focusing on page structure, content presentation, calls to action and basic SEO practices.', url: 'https://billowing-violet-eaa9.vijayvinith146.workers.dev/', variant: 'teal' as const },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero container">
        <div className="hero-copy">
          <span className="eyebrow-pill"><Sparkles size={14} /> Hello, I'm Vinith</span>
          <h1>Turning Ideas Into<br /><em>Digital Growth.</em></h1>
          <p>I'm Vinith W, a digital marketing professional focused on SEO, content marketing, social media growth, and WordPress website development.</p>
          <div className="hero-tags"><span>SEO</span><span>CONTENT</span><span>SOCIAL MEDIA</span><span>WORDPRESS</span></div>
          <div className="hero-actions">
            <ButtonLink href="/projects" variant="teal">View My Projects</ButtonLink>
            <ButtonLink href="/lets-work-together" variant="outline">Let's Connect</ButtonLink>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="hero-blob" /><div className="hero-blob-2" /><div className="hero-blob-3" />
          <div className="hero-blob-blue" /><div className="hero-blob-yellow" />
          <img src="/images/vinithpic.png" alt="Vinith W - Digital Marketing professional" loading="eager" />
          <div className="hero-card"><strong>10K<sup>+</sup></strong><span>Organic<br />Followers</span></div>
          <div className="hero-label">SEO &middot; Content &middot; Social</div>
          <div className="hero-float-card hero-float-1"><span>SEO</span></div>
          <div className="hero-float-card hero-float-2"><span>CONTENT</span></div>
          <div className="hero-float-card hero-float-3"><span>WEB</span></div>
          <Sparkles className="hero-spark" size={48} color="var(--yellow)" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <div className="section-wrap bg-peach-soft">
      <section className="intro-section container">
        <div className="intro-copy">
          <span className="eyebrow">A little about me</span>
          <h2>Digital Marketing With<br /><em>a Creative Mindset</em></h2>
          <p>I believe effective digital marketing is a combination of creativity, strategy, and consistency. My background in Visual Communication helps me understand how content communicates, while my digital marketing training helps me approach content with business and audience goals in mind.</p>
          <p>From growing an Instagram page organically to building WordPress websites and creating SEO-focused content, I enjoy turning ideas into practical digital experiences.</p>
          <ButtonLink href="/about" variant="outline">More About Me</ButtonLink>
        </div>
        <div className="intro-visual">
          <span className="intro-word">CREATIVE<span className="intro-plus">+</span></span>
          <span className="intro-word">STRATEGIC<span className="intro-plus">+</span></span>
          <span className="intro-word">DIGITAL</span>
        </div>
      </section>
      </div>

      {/* INSTAGRAM GROWTH */}
      <section className="growth-band">
        <div className="container growth-inner">
          <div>
            <span className="eyebrow">Independent project</span>
            <h2>0 &rarr; <em>10K+</em></h2>
            <p>Built an Instagram Community From Scratch</p>
            <p style={{ marginTop: 12 }}>Independently grew a meme-content Instagram page from 0 to 10,000+ organic followers without paid promotion. Through consistent content planning, audience engagement, and performance tracking, I learned how content quality, timing, and audience understanding contribute to social media growth.</p>
            <div className="growth-labels"><span>ORGANIC</span><span>SELF-DIRECTED</span><span>NO PAID PROMOTION</span></div>
            <ButtonLink href="/projects" variant="teal">View Project</ButtonLink>
          </div>
          <div>
            <div className="growth-arrow">
              <span className="from">0</span>
              <span className="arrow">&rarr;</span>
              <span className="to">10K<sup>+</sup></span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="section-wrap bg-blue-soft">
      <section className="section-pad container">
        <SectionIntro eyebrow="What I can do" title="Areas I Work In" description="Practical digital marketing support grounded in content, audience understanding, and consistent execution." />
        <div className="services-grid">
          {[
            ['01', 'Digital Marketing', 'Developing practical digital marketing strategies that connect content, audience needs, and business goals.', 'teal'],
            ['02', 'SEO & Content', 'Creating SEO-focused content and applying SEO fundamentals to improve online visibility.', 'blue'],
            ['03', 'Social Media', 'Planning content, creating social media creatives, and using audience insights to improve engagement and growth.', 'coral'],
            ['04', 'WordPress Websites', 'Building and structuring WordPress websites with clear layouts, relevant content, and SEO-friendly foundations.', 'yellow'],
          ].map(([num, title, desc, color]) => (
            <div className={`service-block ${color}`} key={num}>
              <div className="service-icon"><Sparkles size={24} /></div>
              <span className="num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}><ButtonLink href="/services" variant="outline">Explore My Services</ButtonLink></div>
      </section>
      </div>

      {/* FEATURED PROJECTS */}
      <section className="section-pad projects-preview">
        <div className="projects-preview-wrap">
          <SectionIntro eyebrow="Selected practical work" title="Featured Projects" description="A selection of practical website projects and an independent social media growth project." />
          <div className="project-grid">
            <ProjectCard key="ig" title="Instagram Organic Growth" category="Social Media / Organic Growth" description="Independently grew a meme-content Instagram page from 0 to 10,000+ organic followers without paid promotion." type="instagram" />
            <ProjectCard key="biz" title="Business Website" category="WordPress / Website Development" description="A practical business website project created using WordPress and Elementor, with attention to page structure and SEO foundations." type="browser" variant="teal" url="https://billowing-violet-eaa9.vijayvinith146.workers.dev/" />
            <ProjectCard key="food" title="Food Restaurant Website" category="WordPress / Website Development / Content" description="A practical restaurant website project designed to present food offerings and business information through a structured website." type="browser" variant="yellow" url="https://winter-thunder-8929.vijayvinith146.workers.dev/" />
            <ProjectCard key="news" title="News Website" category="WordPress / Website Development" description="A practical news website project focused on organizing articles and presenting news content through a structured WordPress layout." type="browser" variant="coral" url="https://fancy-rice-8344.vijayvinith146.workers.dev/" />
          </div>
          <div style={{ marginTop: 40 }}><ButtonLink href="/projects" variant="navy">View All Projects</ButtonLink></div>
        </div>
      </section>

      {/* CREATIVE APPROACH */}
      <div className="section-wrap bg-yellow-soft">
      <section className="section-pad container">
        <div className="approach-home">
          <div>
            <span className="eyebrow">My approach</span>
            <h2>Creativity Meets<br /><em>Strategy</em></h2>
            <p>My approach combines visual communication, content creation, and digital marketing fundamentals. I focus on understanding the audience, creating useful content, and building a strong digital foundation.</p>
          </div>
          <div className="approach-words">
            <div className="approach-word aw-teal"><span>01</span><b>CONTENT</b></div>
            <div className="approach-word aw-blue"><span>02</span><b>SEO</b></div>
            <div className="approach-word aw-coral"><span>03</span><b>SOCIAL</b></div>
            <div className="approach-word aw-yellow"><span>04</span><b>WEB</b></div>
          </div>
        </div>
      </section>
      </div>

      {/* CTA */}
      <CtaBand title="Have an Idea?<br />Let's Make It <em>Digital.</em>" description="I'm open to digital marketing opportunities, freelance projects, internships, and collaborations where I can contribute my skills in content, SEO, social media, and website development." buttonLabel="Let's Talk" href="/lets-work-together" />
    </>
  );
}

export function About() {
  return (
    <>
      <PageHero eyebrow="The person behind the work" title="About Me" description="A Visual Communication graduate building a career in digital marketing." />
      <div className="section-wrap bg-peach-teal">
      <section className="about-profile container">
        <div className="about-image">
          <img src="/images/vinithpic.png" alt="Vinith W - Digital Marketing professional" loading="lazy" />
          <span className="about-image-tag">Based in India<br /><b>Chennai / Bengaluru</b></span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">My background</span>
          <h2>From Visual Communication<br /><em>to Digital Marketing</em></h2>
          <p>I'm Vinith W, a Visual Communication graduate with a growing focus on digital marketing, SEO, content creation, and social media growth.</p>
          <p>My interest in digital marketing developed through practical learning and hands-on projects. During my training at the National Institute of Digital Marketing, Bengaluru, I worked on website development, SEO, content marketing, and social media-related projects.</p>
          <p>Alongside my training, I independently grew a meme-content Instagram page from 0 to 10,000+ organic followers. This experience helped me understand content planning, audience engagement, consistency, and the importance of adapting content based on performance.</p>
          <p>Today, I'm focused on building practical digital marketing experience and helping brands communicate more effectively through content, websites, and social media.</p>
        </div>
      </section>
      </div>
      <div className="section-wrap bg-green-soft">
      <section className="approach-detail container">
        <SectionIntro eyebrow="A considered process" title="How I Approach Digital Marketing" />
        <div className="numbered-grid">
          {[
            ['01', 'Understand the Audience', 'Identify what people need, search for, and engage with.'],
            ['02', 'Create Useful Content', 'Focus on content that informs, connects, or encourages action.'],
            ['03', 'Build a Strong Digital Foundation', 'Use clear website structure, relevant content, and SEO fundamentals.'],
            ['04', 'Learn From Performance', 'Review results, identify what works, and improve the strategy.'],
          ].map(([n, t, d]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>
      </div>
      <section className="journey-section">
        <div className="container">
          <SectionIntro eyebrow="A work in progress" title="My Learning Journey" />
          <div className="timeline">
            {[
              ['Visual Communication', 'Built a foundation in visual communication, design, and creative thinking.'],
              ['Digital Marketing Training', 'Completed practical digital marketing training at NIDM, Bengaluru.'],
              ['Website Development', 'Built and structured WordPress websites using Elementor.'],
              ['SEO & Content Marketing', 'Practiced keyword research, on-page SEO, and SEO-focused content creation.'],
              ['Social Media Growth', 'Independently grew an Instagram page to 10K+ organic followers.'],
              ['Current Focus', 'Building practical experience and developing a career in digital marketing.'],
            ].map(([t, d], i) => (
              <div className="timeline-item" key={t}>
                <span className="timeline-dot">0{i + 1}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-wrap bg-yellow-green">
      <section className="bring-section container">
        <SectionIntro eyebrow="In my toolkit" title="What I Bring" />
        <div className="pill-list">
          {['Creative communication', 'Content planning', 'SEO fundamentals', 'Social media understanding', 'Website structure and presentation', 'Willingness to learn', 'Practical execution'].map(item => (
            <span key={item}><Check size={16} />{item}</span>
          ))}
        </div>
      </section>
      </div>
      <CtaBand title="Let's <em>Connect</em>" description="I'm open to opportunities where I can apply my skills, contribute to meaningful projects, and continue developing as a digital marketing professional." buttonLabel="Contact Me" href="/lets-work-together" />
    </>
  );
}

type ServiceGroup = readonly [string, string, string, readonly string[]];
const services: readonly ServiceGroup[] = [
  ['01', 'Social Media Marketing', 'Supporting brands with content planning, social media creatives, posting consistency, and audience-focused content strategies.', ['Social media content planning', 'Content calendar creation', 'Instagram content strategy', 'Audience engagement', 'Social media performance review', 'Organic growth-focused content']],
  ['02', 'SEO & Content Marketing', 'Creating and optimizing content with a focus on search visibility, relevance, and audience needs.', ['Keyword research', 'SEO blog content', 'On-page SEO', 'Meta titles and descriptions', 'Content optimization', 'Internal linking', 'Basic off-page SEO understanding']],
  ['03', 'WordPress Website Development', 'Building and structuring clean, responsive WordPress websites with clear layouts, relevant content, and SEO-friendly foundations.', ['WordPress website setup', 'Elementor page building', 'Business website structure', 'Landing page creation', 'Website content placement', 'Basic website optimization']],
  ['04', 'Content Creation & Creative Design', 'Creating visual and written content that helps brands communicate their message clearly and consistently across digital platforms.', ['Social media graphics', 'Promotional creatives', 'Short-form video editing', 'Canva designs', 'Basic Photoshop design', 'Content ideas and captions', 'Brand-focused visual content']],
];

export function Services() {
  return (
    <>
      <PageHero eyebrow="What I can support with" title="Digital Marketing Services" description="Practical digital marketing support through content, SEO, social media, and website development." />
      <div className="section-wrap bg-peach-soft">
      <section className="service-detail-list container">
        <p className="lead-copy">I help businesses and personal brands build a stronger online presence through creative content, SEO-focused website improvements, social media support, and digital marketing fundamentals.</p>
        {services.map(([n, t, d, items]) => (
          <article className="service-detail" key={n}>
            <span className="num">{n}</span>
            <div><h2>{t}</h2><p>{d}</p></div>
            <ul>{items.map(item => <ListArrow key={item}>{item}</ListArrow>)}</ul>
          </article>
        ))}
      </section>
      </div>
      <section className="process-section">
        <div className="container">
          <SectionIntro eyebrow="A simple, focused process" title="How I Work" />
          <div className="process-grid">
            {[
              ['01 — Understand', 'Understand', 'Learn about the brand, audience, and goals.'],
              ['02 — Plan', 'Plan', 'Develop content ideas, page structure, or marketing direction.'],
              ['03 — Create', 'Create', 'Produce content, website sections, or SEO-focused material.'],
              ['04 — Review', 'Review', 'Check quality, relevance, and performance.'],
              ['05 — Improve', 'Improve', 'Make changes based on feedback and results.'],
            ].map(([n, , d]) => <div key={n}><span>{n}</span><h3>{d}</h3></div>)}
          </div>
        </div>
      </section>
      <CtaBand title="Have a Project<br />in <em>Mind?</em>" description="Let's discuss how I can contribute through digital marketing, content, SEO, social media, or website development." buttonLabel="Start a Conversation" href="/lets-work-together" />
    </>
  );
}

export function Projects() {
  return (
    <>
      <PageHero eyebrow="Selected practical work" title="My Projects" description="A collection of practical digital marketing, social media, SEO, website, and creative projects." />
      <div className="section-wrap bg-teal-soft">
      <section className="projects-page container">
        <p className="lead-copy">These projects reflect my hands-on learning, independent work, and practical application of digital marketing concepts.</p>

        {/* Featured: Instagram */}
        <article className="featured-case">
          <div className="featured-visual">
            <ProjectVisual type="instagram" />
            <div className="featured-badge">Centerpiece Project</div>
          </div>
          <div className="featured-copy">
            <span className="num-lg">01</span>
            <span className="eyebrow">Social Media Marketing / Organic Growth</span>
            <h2>Instagram Organic Growth</h2>
            <p>Independently grew a meme-content Instagram page from 0 to 10,000+ organic followers without paid promotion through consistent content, audience engagement and performance-based adjustments.</p>
            <div className="featured-stats">
              <div><strong>10K<sup>+</sup></strong><span>Organic followers</span></div>
              <div><strong>0</strong><span>Paid promotion</span></div>
            </div>
            <a className="text-link" href="https://www.instagram.com/vn_vinith" target="_blank" rel="noreferrer">View Instagram Profile <ArrowUpRight size={16} /></a>
          </div>
        </article>

        {/* Website projects */}
        <div className="case-list">
          {websiteProjects.map((project, index) => (
            <article className="case-study" key={project.title}>
              <div className="case-visual">
                <ProjectVisual type="browser" variant={project.variant} url={project.url.replace('https://', '')} />
              </div>
              <div className="case-copy">
                <span className="num-sm">0{index + 2}</span>
                <span className="eyebrow">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View Live Website <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>
      <CtaBand title="Like What You <em>See?</em>" description="Let's discuss how I can help build your online presence through content, SEO, social media, or website development." buttonLabel="Get In Touch" href="/lets-work-together" />
    </>
  );
}

const skillGroups: readonly [string, readonly string[]][] = [
  ['Digital Marketing', ['Digital Marketing', 'Social Media Marketing', 'Content Marketing & Strategy', 'Meta Ads', 'LinkedIn Marketing', 'Digital Marketing Strategy']],
  ['SEO', ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Keyword Research', 'SEO Analysis']],
  ['Web Development', ['WordPress', 'Elementor', 'Website Optimization']],
  ['Creative & Content', ['Canva', 'Adobe Photoshop', 'CapCut', 'Graphic Design', 'Video Editing', 'Content Creation', 'Social Media Creatives']],
];

export function Skills() {
  return (
    <>
      <PageHero eyebrow="The skills behind the work" title="Skills &amp; Certifications" description="A combination of digital marketing knowledge, creative skills, and practical training." />
      <div className="section-wrap bg-yellow-soft">
      <section className="skills-page container">
        <div className="skill-group-grid">
          {skillGroups.map(([title, items]) => (
            <div className="skill-group" key={title}>
              <span className="eyebrow">{title}</span>
              <ul>{items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="cert-section">
          <SectionIntro eyebrow="Learning & development" title="Certifications & Training" />
          <div className="cert-grid">
            <div className="cert-card">
              <span className="eyebrow">Google Certifications</span>
              {['Google Ads — Search', 'Google Ads — Display', 'Google Ads — Video', 'Google Ads — Measurement', 'Google Ads — Shopping', 'Google Analytics Individual Qualification (GAIQ)'].map(x => <p key={x}>{x}</p>)}
            </div>
            <div className="cert-card">
              <span className="eyebrow">HubSpot Certifications</span>
              {['HubSpot Inbound Marketing', 'HubSpot Email Marketing'].map(x => <p key={x}>{x}</p>)}
              <span className="eyebrow cert-spaced">Professional Training</span>
              <p>Dynamic Digital Marketing Program</p>
              <p>National Institute of Digital Marketing (NIDM), Bengaluru</p>
              <p>3-Month Executive Program</p>
              <p>Live Project &amp; Practical Internship Certificate</p>
            </div>
          </div>
        </div>
        <div className="education-row">
          <div>
            <span className="eyebrow">Education</span>
            <h2>Bachelor's Degree in<br /><em>Visual Communication</em></h2>
            <p>Hindustan College of Arts &amp; Science<br />Madras University<br />Completed April 2026</p>
          </div>
          <div>
            <span className="eyebrow">Languages</span>
            <div className="language-list"><span>English</span><span>Tamil</span></div>
          </div>
        </div>
        <div className="tools-section">
          <SectionIntro eyebrow="Tools I use" title="Built For The Work" />
          <div className="tool-grid">
            {['WordPress', 'Elementor', 'Canva', 'Adobe Photoshop', 'CapCut', 'Google Ads', 'Google Analytics', 'Meta Ads Manager'].map(x => <span key={x}>{x}</span>)}
          </div>
        </div>
      </section>
      </div>
      <CtaBand title="Let's Build<br /><em>Something Together</em>" description="I'm open to opportunities where I can apply my skills and contribute to meaningful digital marketing work." buttonLabel="Contact Me" href="/lets-work-together" />
    </>
  );
}

export function LetsWorkTogether() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    if (!form.checkValidity()) { setError('Please complete the required fields with valid details.'); return; }
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSent(true); form.reset(); }, 650);
  };
  return (
    <>
      <section className="landing-hero container">
        <div className="landing-hero-copy">
          <span className="eyebrow-pill"><Sparkles size={14} /> Let's Work Together</span>
          <h1>Have an Idea?<br /><em>Let's Make It Digital.</em></h1>
          <p>Looking for help with digital marketing, SEO, social media, content, or a WordPress website? Tell me about your project and let's talk.</p>
        </div>
        <div className="landing-hero-deco">
          <div className="landing-blob-1" /><div className="landing-blob-2" /><div className="landing-blob-3" />
          <div className="landing-float-1"><Sparkles size={20} color="var(--teal-dark)" /></div>
          <div className="landing-float-2"><span>GROWTH</span></div>
          <div className="landing-float-3"><span>SEO</span></div>
        </div>
      </section>

      <div className="section-wrap bg-peach-teal">
        <section className="contact-page container">
          <div className="contact-left">
            <span className="eyebrow-pill"><Sparkles size={14} /> Say Hello</span>
            <h2>Good work starts<br />with a <em>good conversation.</em></h2>
            <p>I'm open to digital marketing opportunities, freelance projects, internships, and collaborations where I can contribute my skills in content, SEO, social media, and website development.</p>
            <div className="contact-info">
              <a href="mailto:hevvinith@gmail.com"><span className="ci-icon"><Mail size={20} /></span>hevvinith@gmail.com</a>
              <a href="tel:+916374265569"><span className="ci-icon"><Phone size={20} /></span>+91 6374265569</a>
              <span><span className="ci-icon"><MapPin size={20} /></span>Chennai / Bengaluru, India</span>
              <a href="https://www.linkedin.com/in/vinith-w-a6b501428" target="_blank" rel="noreferrer"><span className="ci-icon"><Linkedin size={20} /></span>linkedin.com/in/vinith-w-a6b501428</a>
              <a href="https://www.instagram.com/vn_vinith" target="_blank" rel="noreferrer"><span className="ci-icon"><Instagram size={20} /></span>@vn_vinith &middot; 10K+ followers</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <span className="eyebrow">Tell me about your project</span>
            <h2>What are you working on?</h2>
            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
            <label>Company / Brand<input name="company" placeholder="Optional" /></label>
            <label>What do you need help with?
              <select name="need" required defaultValue="">
                <option value="" disabled>Select an option</option>
                {['Digital Marketing', 'Social Media Marketing', 'SEO & Content', 'WordPress Website', 'Content Creation', 'Internship / Job Opportunity', 'Other'].map(x => <option key={x}>{x}</option>)}
              </select>
            </label>
            <label>Tell me about your project<textarea name="message" required rows={5} placeholder="A few details about your goals, timeline, or idea..." /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            {sent ? (
              <div className="form-success">
                <div className="success-icon"><Check size={24} /></div>
                <strong>Thank you for reaching out!</strong>
                Your message has been received. I'll get back to you as soon as possible.
              </div>
            ) : (
              <button className="button button-teal" type="submit" disabled={loading}>
                {loading ? 'Preparing message...' : 'Send Message'}<ArrowUpRight size={17} />
              </button>
            )}
            <small>This contact form is ready for an email service to be connected. No message is sent until then.</small>
          </form>
        </section>
      </div>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How this website handles information you share." />
      <div className="section-wrap bg-blue-soft">
      <section className="privacy-page container">
        <span className="privacy-updated"><Sparkles size={14} /> Last Updated: 2026</span>

        <div className="privacy-section">
          <h2>Overview</h2>
          <p>This Privacy Policy explains what information is collected through this personal portfolio website and how it is used. This website is operated by Vinith W as a personal digital marketing portfolio.</p>
        </div>

        <div className="privacy-section">
          <h2>Information Collected Through the Contact Form</h2>
          <p>When you submit the contact form on this website, the following information may be collected:</p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Company or brand information (if provided)</li>
            <li>The type of service you are interested in</li>
            <li>Project details or message content you submit</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>How Information Is Used</h2>
          <p>Information submitted through the contact form is used solely to respond to your inquiry, discuss potential projects or opportunities, and communicate with you about your message. Your information is not sold, rented, or shared with third parties for marketing purposes.</p>
        </div>

        <div className="privacy-section">
          <h2>Cookies</h2>
          <p>This website does not currently use cookies for tracking, advertising, or analytics purposes. If cookies are added in the future, this policy will be updated accordingly.</p>
        </div>

        <div className="privacy-section">
          <h2>Analytics</h2>
          <p>This website does not currently use any analytics or tracking platform. If analytics are added in the future, this policy will be updated to reflect what data is collected and how it is used.</p>
        </div>

        <div className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>This website contains links to external websites, including social media profiles and live project websites. Those external websites have their own privacy policies and practices, which are not controlled by or affiliated with this website. This website is not responsible for the privacy practices of third-party sites.</p>
        </div>

        <div className="privacy-section">
          <h2>Data Security</h2>
          <p>Information submitted through the contact form is handled with reasonable care. However, no method of transmission over the internet is completely secure. This website does not store submitted form data in a database unless an email service or backend is explicitly connected.</p>
        </div>

        <div className="privacy-section">
          <h2>Data Retention</h2>
          <p>Since no backend or email service is currently connected, form submissions are processed on the frontend only. If a backend or email service is connected in the future, submitted information will be retained only as long as necessary to respond to and act on your inquiry.</p>
        </div>

        <div className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to ask questions about how your information is handled, request that your information be deleted, or choose not to submit information through the contact form. Since no database is currently in use, you can simply choose not to submit the form if you prefer not to share your information.</p>
        </div>

        <div className="privacy-section">
          <h2>External Links</h2>
          <p>This website links to external profiles on LinkedIn and Instagram, as well as live project websites. These links open in a new browser tab. This website is not responsible for the content or privacy practices of those external sites.</p>
        </div>

        <div className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>This Privacy Policy may be updated from time to time to reflect changes in how this website operates or to comply with legal requirements. Any changes will be posted on this page with an updated date.</p>
        </div>

        <div className="privacy-section">
          <h2>Contact</h2>
          <p>If you have any questions about this Privacy Policy or how your information is handled, you can contact me at:</p>
          <p><strong style={{ color: 'var(--navy)' }}>Email:</strong> hevvinith@gmail.com</p>
          <p><strong style={{ color: 'var(--navy)' }}>Phone:</strong> +91 6374265569</p>
          <p><strong style={{ color: 'var(--navy)' }}>Location:</strong> Chennai / Bengaluru, India</p>
        </div>
      </section>
      </div>
    </>
  );
}
