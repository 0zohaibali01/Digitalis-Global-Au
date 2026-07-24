import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import ValueProps from '../components/sections/ValueProps'
import ServicesGrid from '../components/sections/ServicesGrid'
import AustraliaMap from '../components/sections/AustraliaMap' // Replaces LocalProof
import CaseStudies from '../components/sections/CaseStudies'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import StatsBand from '../components/sections/StatsBand'
import FAQ from '../components/sections/FAQ'
import CTABand from '../components/sections/CTABand'
import { homepageMeta } from '../seo/meta'
import { buildFaqSchema, buildOrganizationSchema, buildProfessionalServiceSchema } from '../seo/schema'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{homepageMeta.title}</title>
        <meta name="description" content={homepageMeta.description} />
        <link rel="canonical" href={homepageMeta.canonical} />
        <meta name="theme-color" content="#103D4D" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={homepageMeta.title} />
        <meta property="og:description" content={homepageMeta.description} />
        <meta property="og:image" content={homepageMeta.ogImage} />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <script type="application/ld+json">{JSON.stringify(buildProfessionalServiceSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(buildOrganizationSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(buildFaqSchema())}</script>
      </Helmet>
      
      <Hero />
      <TrustBar />
      <ValueProps />
      <ServicesGrid />
      
      {/* Replaced LocalProof with AustraliaMap */}
      <AustraliaMap />
      
      <CaseStudies />
      <Process />
      <Testimonials />
      <StatsBand />
      <FAQ />
      <CTABand />
    </>
  )
}