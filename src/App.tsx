import { useEffect } from 'react';
import { Layout } from '@/components/PortfolioUI';
import { About, Home, LetsWorkTogether, PrivacyPolicy, Projects, Services, Skills } from '@/pages';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Vinith W | Digital Marketing Portfolio', description: 'Vinith W is a digital marketing professional focused on SEO, content marketing, social media growth, and WordPress website development.' },
  '/about': { title: 'About Vinith W | Digital Marketing Professional', description: 'A Visual Communication graduate building a career in digital marketing with practical training and hands-on project experience.' },
  '/services': { title: 'Digital Marketing Services | Vinith W', description: 'Practical digital marketing support through content, SEO, social media, and WordPress website development.' },
  '/projects': { title: 'Digital Marketing Projects | Vinith W', description: 'Practical website projects, SEO work, and an independent Instagram organic growth project by Vinith W.' },
  '/skills': { title: 'Skills & Certifications | Vinith W', description: 'Digital marketing skills, SEO knowledge, creative tools, Google and HubSpot certifications, and professional training.' },
  '/lets-work-together': { title: "Let's Work Together | Vinith W", description: 'Tell me about your project — digital marketing, SEO, social media, content, or WordPress website. Let\'s make it digital.' },
  '/privacy-policy': { title: 'Privacy Policy | Vinith W', description: 'Privacy Policy for the personal digital marketing portfolio website of Vinith W.' },
};

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const meta = pageMeta[path] || pageMeta['/'];
  const Page = path === '/about' ? About : path === '/services' ? Services : path === '/projects' ? Projects : path === '/skills' ? Skills : path === '/lets-work-together' ? LetsWorkTogether : path === '/privacy-policy' ? PrivacyPolicy : Home;

  useEffect(() => {
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
    window.scrollTo(0, 0);
  }, [meta.title, meta.description]);

  return path === '/lets-work-together' ? <Page /> : <Layout><Page /></Layout>;
}

export default App;
