import { faqItems } from '../data/faq'

export const buildProfessionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digitalis Global',
  image: 'https://www.digitalisglobal.com/og-image-au.jpg',
  url: 'https://www.digitalisglobal.com/au',
  telephone: '+61-4XX-XXX-XXX',
  priceRange: '$$',
  areaServed: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Australia'],
  sameAs: [
    'https://www.facebook.com/digitalisglobal/',
    'https://www.instagram.com/digitalisglobal/',
    'https://www.linkedin.com/company/digitalisglobal/',
  ],
})

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digitalis Global',
  logo: 'https://www.digitalisglobal.com/logo.png',
  url: 'https://www.digitalisglobal.com',
  sameAs: [
    'https://www.facebook.com/digitalisglobal/',
    'https://www.instagram.com/digitalisglobal/',
    'https://www.linkedin.com/company/digitalisglobal/',
  ],
})

export const buildAboutPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Digitalis Global Australia',
  url: 'https://www.digitalisglobal.com/au/about',
  description: 'Digitalis Global is a digital growth partner for Australian businesses.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Digitalis Global',
    url: 'https://www.digitalisglobal.com/au',
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
  },
})

export const buildFaqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})
