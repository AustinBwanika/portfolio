export const profile = {
  name: 'Austin Bwanika',
  email: 'austinbwanika@gmail.com',
  github: 'https://github.com/AustinBwanika',
  linkedin: 'https://www.linkedin.com/in/austin-bwanika-513371255',
  // Only set after reviewing a redacted, publication-ready CV.
  publicCv: null as string | null,
};
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export interface Project {
  slug: string; title: string; category: string; dates: string; status: string;
  summary: string; contribution: string; technologies: string[];
  problem: string; role: string; solution: string; decisions: string[];
  result: string; next: string; flow: string[]; link?: { label: string; href: string }; businessLink?: { label: string; href: string };
}
export const projects: Project[] = [
  {
    slug: 'pumpsync', title: 'PumpSync', category: 'Full-stack engineering', dates: 'July 2026 — present', status: 'In development',
    summary: 'Making digital payments easier to record and reconcile at Ugandan petrol stations.',
    contribution: 'I’m building the Android SMS gateway, backend and payment dashboard.',
    technologies: ['FastAPI', 'PostgreSQL', 'Kotlin', 'React', 'Python', 'TypeScript'],
    problem: 'Petrol stations receiving digital payments need a dependable way to match incoming payments with station activity. Manual records introduce errors and make daily reconciliation harder. PumpSync is being developed for station managers and their business and branch teams.',
    role: 'I designed and developed the multi-tenant backend, Android SMS gateway, authentication and analytics dashboard.',
    solution: 'A Kotlin Android gateway collects SMS payment notifications, with offline storage, automatic retries and duplicate detection. A FastAPI backend centralises the records in PostgreSQL across businesses and branches. A React and TypeScript dashboard provides payment tracking, pump-level summaries, unassigned payments and Excel exports.',
    decisions: ['Unreliable connectivity makes delivery and duplication important concerns. The gateway uses offline storage, retries and duplicate detection to address them.', 'In the future, the plan is to share the platform with other businesses, so the backend separates business and branch data. Clerk authentication, role-based access and audit logging support controlled access and accountability.'],
    result: 'Development is ongoing. The implemented components support recording and reconciliation, but no measured reduction in losses or independently verified operational results are available.',
    next: 'A useful next step would be to evaluate record completeness, duplicate handling and reconciliation time in a station pilot. In addition, making the platform take into account different payment methods and user feedback could improve its effectiveness. These are proposed evaluation priorities, not completed results. as well as making',
    flow: ['SMS notifications', 'Android gateway', 'FastAPI + PostgreSQL', 'React dashboard'],
  },
  {
    slug: 'football-adaptability', title: 'Football Player Adaptability Predictor', category: 'Machine learning', dates: 'September 2025 — June 2026', status: 'Academic project · completed',
    summary: 'Investigating how players might adapt when moving between Europe’s top five leagues.',
    contribution: 'I built the pipeline, engineered features and evaluated position-specific models.',
    technologies: ['Python', 'pandas', 'scikit-learn'],
    problem: 'Performance in one league does not directly explain how a player will perform in another. This project investigates player adaptability using physical, performance and playing-style data, with recruitment analysis as the intended application.',
    role: 'My work covered the end-to-end machine-learning pipeline, feature engineering, supervised models and visualisation of model performance and feature importance.',
    solution: 'The pipeline uses player data to engineer features and train position-specific supervised models. Cross-league performance visualisations and feature importance help explore patterns in the resulting predictions.',
    decisions: ['Position-specific models allow defender and midfielder performance tiers to be investigated separately.', 'Feature importance and cross-league visualisations help interpret the models alongside their classification scores.'],
    result: 'Project evaluation achieved 80% test accuracy and a 0.79 F1 score for classifying defender and midfielder performance tiers. These are project test results, not evidence that the model predicts successful real-world transfers. Dataset provenance, split design and leakage checks are not documented in the supplied material.',
    next: 'Further evaluation could test generalisation to later seasons and unseen transfers, with explicit checks for data leakage. These are possible next steps, not claims about the original evaluation.',
    flow: ['Player data', 'Feature engineering', 'Position-specific models', 'Evaluation + interpretation'],
    link: { label: 'View repository', href: 'https://github.com/AustinBwanika/football-player-adaptability-ml' },
  },
  {
    slug: 'inspire-talent', title: 'Inspire Talent Bookings', category: 'Client software', dates: 'December 2025 — present', status: 'Deployed · ongoing maintenance',
    summary: 'Bringing client bookings, availability and email confirmations into one scheduling flow.',
    contribution: 'I led delivery from requirements through development, deployment and maintenance.',
    technologies: ['Next.js', 'TypeScript', 'Google APIs', 'OAuth 2.0'],
    problem: 'Inspire Talent needed a booking platform for its clients, with appointment scheduling, availability management and automated email confirmations.',
    role: 'I led end-to-end delivery: gathering requirements, developing the application, deploying it to production and maintaining it.',
    solution: 'The Next.js and TypeScript platform integrates Google Calendar for scheduling and Gmail for notifications. OAuth 2.0 provides authenticated access to these services.',
    decisions: ['Integrating Google Calendar and Gmail connects booking availability and confirmation messages to the business’s scheduling workflow.', 'OAuth 2.0 supports authenticated API access.'],
    result: 'The platform was deployed to production and is under ongoing maintenance. Booking-volume, conversion and time-saving improvements have not been quantified.',
    next: 'Possible follow-up work would measure booking completion and review scheduling edge cases with the client. These are suggestions for evaluation, not a committed roadmap.',
    flow: ['Client booking', 'Next.js application', 'Google Calendar + Gmail', 'Scheduling + confirmation'],
    link: { label: 'Visit booking platform', href: 'https://inspiretalentsbookings.space/' },
    businessLink: { label: 'Visit client’s business website', href: 'https://talentconsults.com/' },
  },
];
