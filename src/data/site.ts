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
    next: 'A useful next step would be to evaluate record completeness, duplicate handling and reconciliation time in a station pilot. In addition, making the platform take into account different payment methods and user feedback could improve its effectiveness. These are proposed evaluation priorities, not completed results.',
    flow: ['SMS notifications', 'Android gateway', 'FastAPI + PostgreSQL', 'React dashboard'],
  },
  {
    slug: 'football-adaptability', title: 'Football Player Adaptability Predictor', category: 'Machine learning', dates: 'September 2025 — June 2026', status: 'Academic project · completed',
    summary: 'Investigating how players might adapt when moving between Europe’s top five leagues.',
    contribution: 'I built the pipeline, engineered features and evaluated position-specific models.',
    technologies: ['Python', 'pandas', 'scikit-learn'],
    problem: 'Performance in one league does not directly explain how a player will perform in another. I investigated whether performance statistics, playing time and team context could support a more structured comparison across Europe’s top five leagues.',
    role: 'My work covered the end-to-end machine-learning pipeline, feature engineering, supervised models and visualisation of model performance and feature importance.',
    solution: 'I combined Kaggle player statistics with match and team Elo data, aggregated player records by season and league, and engineered per-90 and position-specific composite features. Separate defender, midfielder and forward datasets each contained 150 players. The pipeline compared five classifiers using an 80/20 split, with stratified cross-validation and cross-league evaluation. A frontend lets visitors select a player and compare model outputs across leagues.',
    decisions: ['I used position-specific scoring because defensive, midfield and attacking contributions need different measures. Performance tiers were derived from the project’s adaptability score, so the classifiers evaluate that constructed target rather than observed transfer success.', 'I compared Random Forest, Gradient Boosting, XGBoost, Decision Trees and Naïve Bayes. An ablation study compared composite features with raw per-90 statistics: the added features helped midfielders most, while defenders saw no improvement.'],
    result: 'Random Forest achieved accuracy / F1 scores of 0.80 / 0.79 for defenders, 0.77 / 0.75 for midfielders and 0.83 / 0.83 for forwards. Gradient Boosting reached 0.80 / 0.79 for midfielders. Each held-out test set contained only 30 players: one prediction changes accuracy by about 3.3 percentage points. These are academic performance-tier classification results, not evidence of successful real-world transfers. Missing physical and tactical information, and an unavailable original player-data source, limit generalisation and reproducibility.',
    next: 'I would extend the data pipeline with a maintained source, add physical and tactical context, and evaluate on later seasons and observed transfers. A stronger evaluation would keep players and future information separated across training and test data, and test whether the outputs add value beyond the score used to create the target tiers.',
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
  {
    slug: 'london-airbnb', title: 'London Airbnb Pricing', category: 'Business analytics', dates: 'January — June 2026', status: 'Group academic project · completed',
    summary: 'Exploring how property features and neighbourhood context can inform nightly prices in London.',
    contribution: 'I collaborated on data preparation and developed the Random Forest and Linear Regression models.',
    technologies: ['Python', 'pandas', 'scikit-learn'],
    problem: 'How accurately can we estimate London Airbnb listing prices, and which features matter most? Our group investigated this question as a pricing-support problem for hosts, rather than treating nearby listings as the only reference point.',
    role: 'This was a group project. I collaborated on cleaning and integrating the datasets, then developed and evaluated Random Forest and Linear Regression models. The report identifies my work as Student 2. The wider feature-engineering work and other model families belong to the group and are not solely my work.',
    solution: 'The group enriched Inside Airbnb listings with crime, transport, station footfall, nearby amenities and deprivation indicators. Cleaning reduced 96,871 raw listings to 57,977 records with 92 columns. Prices above the raw 95th percentile were filtered out, leaving a target range of £8–£500. I used the same reproducible 80/20 split for my two models, explored a log-transformed target for Linear Regression and used GridSearchCV for Random Forest tuning.',
    decisions: ['Linear Regression provided an interpretable baseline. Random Forest could capture non-linear relationships between property capacity, room type and location.', 'I compared error in pounds alongside R² and percentage error. The tuned forest had a slightly higher R², but the base forest had lower MAE, so extra tuning did not improve every measure.'],
    result: 'My base Random Forest achieved £36.741 MAE, compared with £44.610 for Linear Regression: a reduction of about 17.6%. The tuned forest achieved £37.023 MAE and 0.704 R². Train/test gaps indicated overfitting, and errors grew for more expensive properties. These models estimate advertised nightly prices, not occupancy, realised revenue or an optimal price. Seasonality, interior quality and event demand are not fully captured.',
    next: 'Future evaluation could use later listing snapshots, inspect errors across neighbourhoods and property types, and incorporate seasonality. Pricing guidance would also need occupancy and booking evidence before making claims about revenue.',
    flow: ['Listings + local data', 'Cleaning + features', 'Regression models', 'Error analysis'],
  },
];
