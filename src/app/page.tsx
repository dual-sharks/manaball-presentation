export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            <span className="gradient-text">ManaBall</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            AI-powered MTG deck analytics. Simulate matchups, measure efficiency,
            and find out if your deck is worth the investment.
          </p>
        </div>

        {/* Matchup Overview */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="card text-center">
            <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Your Deck</div>
            <h2 className="text-2xl font-bold text-white mb-2">Yuriko Ninjutsu</h2>
            <div className="text-4xl font-bold text-green-400 mb-2">$122.90</div>
            <div className="text-sm text-zinc-400">Commander: Yuriko, the Tiger&apos;s Shadow</div>
          </div>
          <div className="card text-center">
            <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Opponent</div>
            <h2 className="text-2xl font-bold text-white mb-2">Brago Blink</h2>
            <div className="text-4xl font-bold text-red-400 mb-2">$1,238.05</div>
            <div className="text-sm text-zinc-400">Commander: Brago, King Eternal</div>
          </div>
        </div>

        {/* Result Banner */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-16 text-center">
          <div className="text-sm text-purple-300 uppercase tracking-wide mb-2">100 Game Simulation Result</div>
          <div className="text-6xl font-bold text-white mb-4">80 - 20</div>
          <div className="text-xl text-purple-200">
            <span className="text-green-400 font-bold">81.6%</span> win rate with a deck that costs{" "}
            <span className="text-yellow-400 font-bold">10x less</span>
          </div>
        </div>
      </section>

      {/* ManaBall Scores */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">ManaBall Scores</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Fight Rank */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-500 uppercase tracking-wide">Fight Rank</span>
              <span className="text-2xl font-bold tier-s">S</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">81.6%</div>
            <p className="text-sm text-zinc-400">Win rate against tested opponents</p>
            <div className="mt-4 bg-zinc-800 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '81.6%' }}></div>
            </div>
          </div>

          {/* Efficiency Rank */}
          <div className="card border-yellow-500/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-500 uppercase tracking-wide">Efficiency Rank</span>
              <span className="text-2xl font-bold tier-s-plus">S+</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">8.22x</div>
            <p className="text-sm text-zinc-400">Value per dollar vs opponent</p>
            <div className="mt-4 text-xs text-zinc-500">
              For every $1 spent, you get 8.22x the winning power
            </div>
          </div>

          {/* Lead Per Turn */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-500 uppercase tracking-wide">Lead Per Turn</span>
              <span className="text-lg font-bold text-blue-400">Aggro/Tempo</span>
            </div>
            <div className="text-4xl font-bold text-white mb-2">3.6</div>
            <p className="text-sm text-zinc-400">Damage dealt per turn average</p>
            <div className="mt-4 text-xs text-zinc-500">
              Wins by turn 11 on average
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Explanation */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Efficiency Story</h2>

          <div className="card bg-gradient-to-br from-zinc-900 to-zinc-950">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">How Efficiency is Calculated</h3>
                <div className="bg-zinc-800 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-zinc-400">Efficiency = (Win Rate / 100) × (Opponent $ / Your $)</div>
                  <div className="text-zinc-300 mt-2">= 0.816 × ($1,238 / $123)</div>
                  <div className="text-zinc-300">= 0.816 × 10.07</div>
                  <div className="text-yellow-400 font-bold">= 8.22</div>
                </div>
                <p className="text-zinc-400 text-sm">
                  This means for every dollar you invest, you get <strong className="text-white">8.22x</strong> the
                  winning power compared to what your opponent gets per dollar.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-zinc-800 rounded-xl p-6">
                  <div className="text-6xl font-bold text-yellow-400 mb-2">8.22x</div>
                  <div className="text-zinc-400">Value Multiplier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Price Breakdown</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Your Deck */}
          <div className="card">
            <h3 className="text-xl font-bold text-green-400 mb-4">Yuriko Ninjutsu - $122.90</h3>
            <div className="space-y-2">
              {[
                { card: 'Bitterblossom', price: 28.33 },
                { card: 'Fallen Shinobi', price: 13.16 },
                { card: 'Sword of Forge and Frontier', price: 10.47 },
                { card: 'Toxic Deluge', price: 6.89 },
                { card: 'Baleful Mastery', price: 5.76 },
              ].map((item) => (
                <div key={item.card} className="flex justify-between text-sm">
                  <span className="text-zinc-300">{item.card}</span>
                  <span className="text-zinc-500">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-green-400">$122.90</span>
            </div>
          </div>

          {/* Opponent Deck */}
          <div className="card">
            <h3 className="text-xl font-bold text-red-400 mb-4">Brago Blink - $1,238.05</h3>
            <div className="space-y-2">
              {[
                { card: 'Ancient Tomb', price: 94.79 },
                { card: 'Mana Vault', price: 84.75 },
                { card: 'Force of Will', price: 63.19 },
                { card: 'Smothering Tithe', price: 53.16 },
                { card: 'Rhystic Study', price: 52.05 },
              ].map((item) => (
                <div key={item.card} className="flex justify-between text-sm">
                  <span className="text-zinc-300">{item.card}</span>
                  <span className="text-zinc-500">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-red-400">$1,238.05</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Explanation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Understanding the Tiers</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Fight Rank Tiers</h3>
            <div className="space-y-2">
              {[
                { tier: 'S+', range: '85%+', desc: 'Meta-defining', color: 'text-yellow-400' },
                { tier: 'S', range: '75-84%', desc: 'Top tier', color: 'text-purple-400', active: true },
                { tier: 'A', range: '65-74%', desc: 'Strong', color: 'text-blue-400' },
                { tier: 'B', range: '55-64%', desc: 'Above average', color: 'text-green-400' },
                { tier: 'C', range: '45-54%', desc: 'Average', color: 'text-zinc-400' },
              ].map((item) => (
                <div
                  key={item.tier}
                  className={`flex items-center justify-between p-2 rounded ${item.active ? 'bg-purple-900/30 border border-purple-500/50' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${item.color}`}>{item.tier}</span>
                    <span className="text-zinc-500 text-sm">{item.range}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Efficiency Rank Tiers</h3>
            <div className="space-y-2">
              {[
                { tier: 'S+', range: '5.0+', desc: 'Crushing expensive decks', color: 'text-yellow-400', active: true },
                { tier: 'S', range: '3.0-4.9', desc: 'Excellent value', color: 'text-purple-400' },
                { tier: 'A', range: '2.0-2.9', desc: 'Great value', color: 'text-blue-400' },
                { tier: 'B', range: '1.0-1.9', desc: 'Even value', color: 'text-green-400' },
                { tier: 'C', range: '<1.0', desc: 'Overpaying', color: 'text-zinc-400' },
              ].map((item) => (
                <div
                  key={item.tier}
                  className={`flex items-center justify-between p-2 rounded ${item.active ? 'bg-yellow-900/30 border border-yellow-500/50' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${item.color}`}>{item.tier}</span>
                    <span className="text-zinc-500 text-sm">{item.range}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <div className="text-zinc-500 text-sm">
          <p>Simulation Engine: MTG Forge 2.0.09 • 100 AI vs AI Games</p>
          <p className="mt-2">ManaBall Analytics v0.3.0</p>
        </div>
      </footer>
    </main>
  );
}
