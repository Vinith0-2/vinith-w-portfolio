import { ArrowUpRight, ChevronRight, Instagram, Linkedin, Mail, Menu, Sparkles, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';

export const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/projects', 'Projects'],
  ['/skills', 'Skills'],
] as const;

export function ButtonLink({ href, children, variant = 'teal', className = '' }: { href: string; children: ReactNode; variant?: 'teal' | 'navy' | 'coral' | 'outline'; className?: string }) {
  return <a href={href} className={`button button-${variant} ${className}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children}<ArrowUpRight size={17} strokeWidth={2.2} /></a>;
}

export function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-intro"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = window.location.pathname;
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="logo" href="/" onClick={() => setOpen(false)}><span className="logo-mark">VW</span><span>VINITH W</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([href, label]) => <a key={href} href={href} className={path === href ? 'active' : ''}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/lets-work-together">Let's Work Together <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} className={path === href ? 'active' : ''}>{label}<ArrowUpRight size={16} /></a>)}
          <a className="mobile-cta" href="/lets-work-together" onClick={() => setOpen(false)}>Let's Work Together <ArrowUpRight size={16} /></a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo"><span className="logo-mark">VW</span><span>VINITH W</span></div>
            <p>Digital marketing professional focused on content, SEO, social media, and website development.</p>
          </div>
          <div className="footer-links">
            <span className="eyebrow">Explore</span>
            {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div className="footer-links">
            <span className="eyebrow">Connect</span>
            <a href="https://www.linkedin.com/in/vinith-w-a6b501428" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://www.instagram.com/vn_vinith" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
            <a href="mailto:hevvinith@gmail.com"><Mail size={16} /> Email</a>
            <a href="/privacy-policy" className="footer-privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Vinith W. All rights reserved.</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span>Chennai / Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero container">
      <span className="eyebrow-pill"><Sparkles size={14} /> {eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

type ProjectType = 'browser' | 'instagram';

export function ProjectVisual({ type, variant = 'teal', url }: { type: ProjectType; variant?: 'teal' | 'blue' | 'coral' | 'yellow'; url?: string }) {
  if (type === 'instagram') {
    return (
      <div className="project-visual ig-mock">
        <div className="ig-mock-top"><img className="ig-logo" src="/images/vn_vinith_logo.webp" alt="VN Vinith Instagram logo" /><span>@vn_vinith</span><span>&bull;&bull;&bull;</span></div>
        <div className="ig-mock-num">10K<span>+</span></div>
        <div className="ig-mock-cap">ORGANIC<br />COMMUNITY</div>
        <div className="ig-mock-ring" />
        <div className="ig-mock-ring2" />
      </div>
    );
  }
  return (
    <div className="project-visual browser-mock">
      <div className="browser-bar">
        <span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" />
        <span className="browser-url">{url || 'website'}</span>
      </div>
      <div className={`browser-body b-${variant}`}>
        <b>View Live<br /><em>Website</em></b>
        <small>WordPress &middot; Elementor &middot; SEO-friendly</small>
        <div className="browser-btn" />
      </div>
    </div>
  );
}

export function ProjectCard({ title, category, description, type, variant, url }: { title: string; category: string; description: string; type: ProjectType; variant?: 'teal' | 'blue' | 'coral' | 'yellow'; url?: string }) {
  return (
    <article className="project-card">
      <ProjectVisual type={type} variant={variant} url={url} />
      <div className="project-meta">
        <span className="eyebrow">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {type === 'browser' && url
          ? <a className="text-link" href={url} target="_blank" rel="noreferrer">View Live Website <ArrowUpRight size={16} /></a>
          : <a className="text-link" href="/projects">View Project <ArrowUpRight size={16} /></a>}
      </div>
    </article>
  );
}

export function CtaBand({ title, description, buttonLabel, href }: { title: string; description: string; buttonLabel: string; href: string }) {
  return (
    <section className="cta-band">
      <div>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,.8)' }}>Let's talk</span>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p style={{ color: 'rgba(255,255,255,.85)', maxWidth: 480, marginTop: 16 }}>{description}</p>
      </div>
      <a className="button button-navy" href={href}>{buttonLabel}<ArrowUpRight size={17} /></a>
    </section>
  );
}

export function ListArrow({ children }: { children: ReactNode }) {
  return <li><ChevronRight size={16} />{children}</li>;
}
