import { services } from './services'

const details = {
  'seo-and-technical-seo': {
    headline: 'SEO that earns visibility, trust and qualified demand.',
    intro: 'Technical foundations, useful content and local search strategy working together to help Australian customers find you when it matters.',
    deliverables: ['Technical SEO audit and prioritised roadmap', 'Keyword and search-intent strategy for Australia', 'On-page optimisation and internal linking', 'Local SEO, Google Business Profile and reporting'],
    outcomes: ['A healthier, more crawlable website', 'Content mapped to real customer questions', 'A clear view of organic growth opportunities'],
    faqs: [['How long does SEO take in Australia?', 'Early improvements can appear within months, while competitive terms generally require a longer, consistent programme. We set expectations around your market, website and goals.'], ['Do you only work on Google?', 'Google is usually the priority for Australian search, but we also improve the wider technical and content foundation that supports discovery across search experiences.'], ['Can you work with our existing website?', 'Yes. We begin with an audit and can improve an existing site or work alongside a rebuild where the technical opportunity is greater.']],
  },
  'google-ads-and-ppc': {
    headline: 'Google Ads built around profitable intent, not empty clicks.',
    intro: 'We plan, launch and optimise paid search campaigns for Australian businesses that want clearer spend, stronger lead quality and accountable growth.',
    deliverables: ['Account audit and campaign architecture', 'Keyword, audience and negative-keyword strategy', 'Conversion tracking and landing-page alignment', 'Ongoing bid, creative and search-term optimisation'],
    outcomes: ['Budget directed to higher-intent searches', 'Reporting connected to leads and revenue', 'A testing plan that makes spend more effective over time'],
    faqs: [['What Google Ads budget do we need?', 'The right budget depends on your market, average customer value and competition. We will recommend a practical starting point after reviewing the opportunity.'], ['Do you set up conversion tracking?', 'Yes. Reliable conversion tracking is central to decisions about keywords, bids, creative and landing pages.'], ['Can you take over an existing Google Ads account?', 'Absolutely. We can audit an existing account, identify waste and build a focused optimisation plan.']],
  },
  'social-media-marketing': {
    headline: 'Social campaigns that turn attention into action.',
    intro: 'From acquisition to remarketing, we build social media campaigns that match your Australian audience, creative proposition and commercial goal.',
    deliverables: ['Channel and audience strategy', 'Meta and TikTok campaign management', 'Creative testing framework and messaging', 'Remarketing, reporting and optimisation'],
    outcomes: ['Clearer audience and creative learnings', 'Campaigns built for each stage of the journey', 'Spend managed against meaningful conversion actions'],
    faqs: [['Which social platforms should we advertise on?', 'The best platform depends on your audience, offer and buying cycle. We select channels based on evidence, not a one-size-fits-all media mix.'], ['Do you create social ad creative?', 'We can develop creative direction and assets as part of the campaign, then test and iterate based on performance.'], ['How do you measure social media results?', 'We agree on the actions that matter, set up tracking and report against those outcomes rather than surface-level engagement alone.']],
  },
  'web-development': {
    headline: 'Websites that make a strong first impression and a stronger case to act.',
    intro: 'We design and develop fast, accessible and search-ready websites for Australian businesses that need their digital home to do real commercial work.',
    deliverables: ['Discovery, site architecture and UX strategy', 'Custom responsive design and development', 'Performance, accessibility and technical SEO foundations', 'CMS training, launch support and documentation'],
    outcomes: ['A website shaped around your customer journey', 'A faster, easier experience across devices', 'A platform ready for ongoing marketing and growth'],
    faqs: [['Will we own the website?', 'Yes. You own the completed website and its codebase unless another arrangement is agreed in writing.'], ['Can you improve our current website?', 'Yes. We can recommend targeted improvements or a full rebuild depending on the technical, UX and commercial opportunity.'], ['Is SEO included in web development?', 'Every build includes search-ready technical foundations. Ongoing SEO strategy and content can be added where growth in organic search is a priority.']],
  },
  'e-commerce-development': {
    headline: 'E-commerce experiences made for easier buying and smarter growth.',
    intro: 'We build high-performing Shopify and WooCommerce stores that make it easier for Australian customers to find, trust and buy from your brand.',
    deliverables: ['Platform selection and store strategy', 'Conversion-focused UX and storefront design', 'Product, payment and third-party integrations', 'Technical SEO, analytics and launch support'],
    outcomes: ['A more intuitive path from product discovery to checkout', 'A store that can evolve with your catalogue and campaigns', 'Reliable data for marketing and conversion decisions'],
    faqs: [['Do you build on Shopify or WooCommerce?', 'We work with both. The recommendation depends on your operations, catalogue, integrations and plans for scale.'], ['Can you migrate an existing store?', 'Yes. We can plan and execute a migration while protecting critical product, customer and SEO considerations.'], ['Can you help improve conversion after launch?', 'Yes. We can support ongoing conversion optimisation, paid media, email and SEO once the store is live.']],
  },
  'branding-and-creative': {
    headline: 'A brand your customers can recognise and your team can use with confidence.',
    intro: 'We turn business insight into clear brand identities, messaging and creative systems that help Australian businesses show up consistently.',
    deliverables: ['Brand strategy and positioning workshops', 'Logo and visual identity systems', 'Messaging, tone of voice and key brand assets', 'Guidelines that make consistency practical'],
    outcomes: ['A more distinctive, relevant market position', 'A visual and verbal system built to scale', 'Clearer creative decisions across every touchpoint'],
    faqs: [['Do we need a full rebrand?', 'Not always. We assess whether a focused refresh or a complete identity system will best solve the business challenge.'], ['What do we receive at the end?', 'Deliverables are scoped to your needs and can include strategy, logo files, visual assets, messaging and practical brand guidelines.'], ['Can you apply our new brand to a website?', 'Yes. Our brand and web teams work together so the new identity carries through to the customer experience.']],
  },
  'content-marketing': {
    headline: 'Content that answers real questions and gives your brand a useful voice.',
    intro: 'We create content strategies and assets that meet Australian audiences at the right point in their search, research and buying journey.',
    deliverables: ['Content audit, gaps and editorial strategy', 'SEO briefs and search-intent mapping', 'Website copy, articles and campaign content', 'Content measurement and ongoing optimisation'],
    outcomes: ['A clearer point of view in your market', 'Content that supports organic discovery and conversion', 'A prioritised publishing plan your team can act on'],
    faqs: [['How is content marketing different from SEO?', 'SEO sets the technical and search strategy; content marketing creates the useful, persuasive material that fulfils search intent and builds trust.'], ['Can you write for technical industries?', 'Yes. We use discovery, subject-matter input and a structured review process to make complex topics clear and credible.'], ['Will we approve content before it is published?', 'Yes. We agree on workflow, brand voice and approvals before production begins.']],
  },
  'conversion-rate-optimisation': {
    headline: 'Get more value from the traffic you already earn.',
    intro: 'We use customer behaviour, friction analysis and focused experimentation to help Australian businesses turn more visits into valuable next steps.',
    deliverables: ['Analytics and conversion-path audit', 'UX friction and messaging analysis', 'Test hypotheses and prioritised experiments', 'Measurement, learnings and iteration plan'],
    outcomes: ['A clearer picture of what slows customers down', 'Better alignment between traffic source and landing experience', 'Improvement decisions based on evidence, not hunches'],
    faqs: [['Do we need high traffic for CRO?', 'More traffic makes testing faster, but lower-traffic sites can still benefit from analytics, UX review, customer research and high-confidence improvements.'], ['What can CRO improve?', 'Depending on your goals, we can focus on leads, purchases, enquiries, bookings, sign-ups or another meaningful action.'], ['Do you run A/B tests?', 'Where traffic and technical setup allow, we design and measure structured experiments. We also recommend practical improvements that do not need a formal test.']],
  },
}

export const servicePages = services.map((service) => ({ ...service, ...details[service.slug] }))
export const getServicePage = (slug) => servicePages.find((service) => service.slug === slug)
