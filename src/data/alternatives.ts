import type { Alternative } from '../types';

// Alternative catalogue - add entries here.
// Each entry represents a European or open-source alternative to a US tech product.
//
// To add a new alternative:
// 1. Add the logo SVG to public/logos/<id>.svg
// 2. Add the entry below with all required fields
// 3. Run `npm run build` to verify

export const alternatives: Alternative[] = [
  {
    id: 'tuta',
    name: 'Tuta',
    description:
      'End-to-end encrypted email service built in Germany. Formerly known as Tutanota, Tuta offers secure email, calendar, and contacts with zero-knowledge encryption and post-quantum cryptography.',
    website: 'https://tuta.com',
    logo: '/logos/tuta.svg',
    country: 'de',
    category: 'email',
    replacesUS: ['Gmail', 'Outlook', 'Yahoo Mail'],
    isOpenSource: true,
    githubUrl: 'https://github.com/tutao/tutanota',
    pricing: 'freemium',
    tags: ['encryption', 'privacy', 'GDPR', 'zero-knowledge', 'ad-free', 'post-quantum'],
    foundedYear: 2011,
    headquartersCity: 'Hanover',
    license: 'GPL-3.0',
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description:
      'French AI company building frontier open-weight large language models and Le Chat, a fast privacy-focused assistant. Founded by former Google DeepMind and Meta researchers, Mistral champions European data sovereignty with GDPR-compliant infrastructure.',
    website: 'https://mistral.ai',
    logo: '/logos/mistral.svg',
    country: 'fr',
    category: 'ai-ml',
    replacesUS: ['ChatGPT', 'Google Gemini', 'GitHub Copilot'],
    isOpenSource: true,
    githubUrl: 'https://github.com/mistralai',
    pricing: 'freemium',
    tags: ['LLM', 'open-weight', 'privacy', 'GDPR', 'generative-AI', 'API', 'on-premise'],
    foundedYear: 2023,
    headquartersCity: 'Paris',
    license: 'Apache-2.0',
  },
  {
    id: 'euria',
    name: 'Euria',
    description:
      'Free, sovereign AI assistant by Swiss company Infomaniak, hosted entirely in Switzerland with renewable energy. Offers chat, voice input, image analysis, document processing, web search, and translation with an ephemeral mode that leaves no trace on servers.',
    website: 'https://euria.infomaniak.com',
    logo: '/logos/euria.svg',
    country: 'ch',
    category: 'ai-ml',
    replacesUS: ['ChatGPT', 'Google Gemini', 'Microsoft Copilot'],
    isOpenSource: true,
    githubUrl: 'https://github.com/Infomaniak/android-euria',
    pricing: 'freemium',
    tags: ['privacy', 'sovereign', 'GDPR', 'renewable-energy', 'Swiss-hosted', 'encryption'],
    foundedYear: 1994,
    headquartersCity: 'Geneva',
    license: 'GPL-3.0',
  },
  {
    id: 'startpage',
    name: 'Startpage',
    description:
      'Dutch privacy-first search engine that delivers Google search results without tracking, logging IP addresses, or storing personal data. Features an Anonymous View proxy for browsing search results with full anonymity, and has held the European Privacy Seal since 2011.',
    website: 'https://www.startpage.com',
    logo: '/logos/startpage.svg',
    country: 'nl',
    category: 'search-engine',
    replacesUS: ['Google Search', 'Bing'],
    isOpenSource: false,
    pricing: 'free',
    tags: ['privacy', 'no-tracking', 'GDPR', 'anonymous-search', 'proxy-browsing', 'no-logs'],
    foundedYear: 2006,
    headquartersCity: 'The Hague',
  },
  {
    id: 'lumo',
    name: 'Lumo by Proton',
    description:
      'Privacy-first AI assistant from the makers of Proton Mail. Lumo keeps every conversation confidential with zero-access encryption, never logs prompts or responses, and never uses your data to train models — a stark contrast to US-based AI chatbots.',
    website: 'https://lumo.proton.me',
    logo: '/logos/lumo.svg',
    country: 'ch',
    category: 'ai-ml',
    replacesUS: ['ChatGPT', 'Google Gemini', 'Microsoft Copilot'],
    isOpenSource: true,
    githubUrl: 'https://github.com/ProtonLumo',
    pricing: 'freemium',
    tags: ['AI', 'privacy', 'encryption', 'zero-knowledge', 'GDPR', 'no-logs', 'chatbot'],
    foundedYear: 2014,
    headquartersCity: 'Geneva',
    license: 'GPL-3.0',
  },
  {
    id: 'ecosia',
    name: 'Ecosia',
    description:
      'Berlin-based search engine that donates at least 80% of its profits to tree-planting projects worldwide, having funded over 200 million trees since 2009. A certified B Corp under steward-ownership, Ecosia runs on 100% renewable energy and offers a privacy-friendly alternative to US search giants.',
    website: 'https://www.ecosia.org',
    logo: '/logos/ecosia.svg',
    country: 'de',
    category: 'search-engine',
    replacesUS: ['Google Search', 'Bing'],
    isOpenSource: false,
    githubUrl: 'https://github.com/ecosia',
    pricing: 'free',
    tags: ['tree-planting', 'sustainability', 'climate', 'B-Corp', 'renewable-energy', 'privacy', 'GDPR', 'steward-ownership'],
    foundedYear: 2009,
    headquartersCity: 'Berlin',
  },
];
