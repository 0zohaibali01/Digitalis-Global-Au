import { lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import DeferredSection from '../components/DeferredSection'
import { homepageMeta } from '../seo/meta'
import { buildFaqSchema, buildOrganizationSchema, buildProfessionalServiceSchema } from '../seo/schema'

const ValueProps = lazy(() => import('../components/sections/ValueProps'))
const ServicesGrid = lazy(() => import('../components/sections/ServicesGrid'))
const AustraliaMap = lazy(() => import('../components/sections/AustraliaMap'))
const CaseStudies = lazy(() => import('../components/sections/CaseStudies'))
const Process = lazy(() => import('../components/sections/Process'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const StatsBand = lazy(() => import('../components/sections/StatsBand'))
const FAQ = lazy(() => import('../components/sections/FAQ'))
const CTABand = lazy(() => import('../components/sections/CTABand'))

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
      <DeferredSection minHeight={680}><ValueProps /></DeferredSection>
      <DeferredSection minHeight={780}><ServicesGrid /></DeferredSection>
      <DeferredSection minHeight={560}><AustraliaMap /></DeferredSection>
      <DeferredSection minHeight={620}><CaseStudies /></DeferredSection>
      <DeferredSection minHeight={760}><Process /></DeferredSection>
      <DeferredSection minHeight={580}><Testimonials /></DeferredSection>
      <DeferredSection minHeight={500}><StatsBand /></DeferredSection>
      <DeferredSection minHeight={600}><FAQ /></DeferredSection>
      <DeferredSection minHeight={460}><CTABand /></DeferredSection>
    </>
  )
}
