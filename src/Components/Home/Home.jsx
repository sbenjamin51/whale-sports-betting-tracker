import './Home.css'

const cards = [
  {
    label: 'Weekly Profit',
    value: '+$186.40',
    detail: 'Up 8.6% from last week',
  },
  {
    label: 'Win Rate',
    value: '58.2%',
    detail: '48 wins from 82 settled bets',
  },
  {
    label: 'Best Book',
    value: 'FanDuel',
    detail: 'Highest closing line value this month',
  },
]

const Home = ({
  title = 'Dashboard',
  subtitle = 'A clean home base for tracking bets, bankroll movement, and performance over time.',
  statLabel = 'Active users',
  statValue = '1',
}) => {
  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__copy">
          <span className="home__eyebrow">Control Center</span>
          <h1 className="home__title">{title}</h1>
          <p className="home__subtitle">{subtitle}</p>
        </div>

        <aside className="home__highlight">
          <span className="home__highlight-label">{statLabel}</span>
          <strong className="home__highlight-value">{statValue}</strong>
          <p className="home__highlight-text">
            Keep your data organized now so your betting history becomes useful later.
          </p>
        </aside>
      </section>

      <section className="home__grid" aria-label="Performance overview">
        {cards.map((card) => (
          <article key={card.label} className="home__card">
            <span className="home__card-label">{card.label}</span>
            <strong className="home__card-value">{card.value}</strong>
            <p className="home__card-detail">{card.detail}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Home
