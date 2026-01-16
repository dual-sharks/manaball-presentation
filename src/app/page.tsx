'use client';

import { useState } from 'react';

function FlipCard({
  front,
  back
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card cursor-pointer h-[280px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front card">
          {front}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-xs text-zinc-500">Tap to see calculation</span>
          </div>
        </div>
        <div className="flip-card-back card">
          {back}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-xs text-zinc-500">Tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const yurikoCards = [
  { card: 'Bitterblossom', price: 28.33 },
  { card: 'Fallen Shinobi', price: 13.16 },
  { card: 'Sword of Forge and Frontier', price: 10.47 },
  { card: 'Toxic Deluge', price: 6.89 },
  { card: 'Baleful Mastery', price: 5.76 },
  { card: 'Kaito, Dancing Shadow', price: 5.12 },
  { card: 'Dig Through Time', price: 4.89 },
  { card: 'Satoru Umezawa', price: 4.45 },
  { card: 'Counterspell', price: 3.21 },
  { card: 'Silver-Fur Master', price: 2.98 },
  { card: 'Yuriko, the Tiger\'s Shadow', price: 2.87 },
  { card: 'Tetsuko Umezawa, Fugitive', price: 2.45 },
  { card: 'Thousand-Faced Shadow', price: 2.34 },
  { card: 'Prosperous Thief', price: 1.98 },
  { card: 'Moon-Circuit Hacker', price: 1.87 },
  { card: 'Covert Technician', price: 1.65 },
  { card: 'Brainstorm', price: 1.54 },
  { card: 'Ponder', price: 1.43 },
  { card: 'Dark Ritual', price: 1.32 },
  { card: 'Siren Stormtamer', price: 1.21 },
  { card: 'Spectral Sailor', price: 0.98 },
  { card: 'Slither Blade', price: 0.87 },
  { card: 'Ornithopter', price: 0.76 },
  { card: 'Hope of Ghirapur', price: 0.65 },
  { card: 'Network Disruptor', price: 0.54 },
  { card: 'Wingcrafter', price: 0.43 },
  { card: '+ 70 more cards...', price: 14.79 },
];

const bragoCards = [
  { card: 'Jeweled Lotus', price: 112.45 },
  { card: 'Ancient Tomb', price: 94.79 },
  { card: 'Mana Vault', price: 84.75 },
  { card: 'Mana Crypt', price: 78.32 },
  { card: 'Force of Will', price: 63.19 },
  { card: 'Smothering Tithe', price: 53.16 },
  { card: 'Rhystic Study', price: 52.05 },
  { card: 'Tundra', price: 48.90 },
  { card: 'Cyclonic Rift', price: 42.15 },
  { card: 'Fierce Guardianship', price: 38.76 },
  { card: 'Mana Drain', price: 35.21 },
  { card: 'Teferi\'s Protection', price: 32.45 },
  { card: 'Scroll Rack', price: 28.90 },
  { card: 'Enlightened Tutor', price: 26.78 },
  { card: 'Mystical Tutor', price: 24.56 },
  { card: 'Pact of Negation', price: 22.34 },
  { card: 'Flooded Strand', price: 21.12 },
  { card: 'Polluted Delta', price: 19.87 },
  { card: 'Misty Rainforest', price: 18.65 },
  { card: 'Scalding Tarn', price: 17.43 },
  { card: 'Arid Mesa', price: 16.21 },
  { card: 'Marsh Flats', price: 15.98 },
  { card: 'Prismatic Vista', price: 14.76 },
  { card: 'Hallowed Fountain', price: 12.54 },
  { card: 'Staff of Domination', price: 11.32 },
  { card: 'Rings of Brighthearth', price: 10.21 },
  { card: '+ 73 more cards...', price: 145.19 },
];

export default function Home() {
  const [expandedDeck, setExpandedDeck] = useState<'yuriko' | 'brago' | null>(null);

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
        <div className="flex items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-4">
          <div
            className={`card text-center flex-1 max-w-sm cursor-pointer transition-all hover:border-green-500/50 ${expandedDeck === 'yuriko' ? 'border-green-500' : ''}`}
            onClick={() => setExpandedDeck(expandedDeck === 'yuriko' ? null : 'yuriko')}
          >
            <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Your Deck</div>
            <img
              src="https://cards.scryfall.io/art_crop/front/3/b/3bd81ae6-e628-447a-a36b-597e63ede295.jpg"
              alt="Yuriko, the Tiger's Shadow"
              className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-green-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Yuriko Ninjutsu</h2>
            <div className="text-4xl font-bold text-green-400 mb-2">$122.90</div>
            <div className="text-sm text-zinc-400">Commander: Yuriko, the Tiger&apos;s Shadow</div>
            <div className="text-xs text-zinc-500 mt-3">Tap to see deck list</div>
          </div>

          <div className="text-4xl md:text-6xl font-bold text-zinc-600">VS</div>

          <div
            className={`card text-center flex-1 max-w-sm cursor-pointer transition-all hover:border-red-500/50 ${expandedDeck === 'brago' ? 'border-red-500' : ''}`}
            onClick={() => setExpandedDeck(expandedDeck === 'brago' ? null : 'brago')}
          >
            <div className="text-sm text-zinc-500 uppercase tracking-wide mb-2">Opponent</div>
            <img
              src="https://cards.scryfall.io/art_crop/front/0/a/0ac3fb08-741a-49e5-9fae-b26819677d24.jpg"
              alt="Brago, King Eternal"
              className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-red-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Brago Blink</h2>
            <div className="text-4xl font-bold text-red-400 mb-2">$1,238.05</div>
            <div className="text-sm text-zinc-400">Commander: Brago, King Eternal</div>
            <div className="text-xs text-zinc-500 mt-3">Tap to see deck list</div>
          </div>
        </div>

        {/* Expandable Deck List */}
        {expandedDeck && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`card ${expandedDeck === 'yuriko' ? 'border-green-500/50' : 'border-red-500/50'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-xl font-bold ${expandedDeck === 'yuriko' ? 'text-green-400' : 'text-red-400'}`}>
                  {expandedDeck === 'yuriko' ? 'Yuriko Ninjutsu' : 'Brago Blink'} - Card List
                </h3>
                <button
                  onClick={() => setExpandedDeck(null)}
                  className="text-zinc-500 hover:text-white text-sm"
                >
                  ✕ Close
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-zinc-900">
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 text-zinc-400 font-medium">Card Name</th>
                      <th className="text-right py-2 text-zinc-400 font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(expandedDeck === 'yuriko' ? yurikoCards : bragoCards)
                      .filter(item => !item.card.startsWith('+'))
                      .sort((a, b) => b.price - a.price)
                      .map((item, idx) => (
                      <tr key={idx} className="border-b border-zinc-800">
                        <td className="py-2 text-zinc-300">{item.card}</td>
                        <td className="py-2 text-right text-zinc-500">${item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-zinc-800">
                      <td className="py-2 text-zinc-500 italic">
                        + {expandedDeck === 'yuriko' ? '70' : '73'} more cards (lands, commons, etc.)
                      </td>
                      <td className="py-2 text-right text-zinc-500">
                        ${expandedDeck === 'yuriko' ? '14.79' : '145.19'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-700 flex justify-between font-bold">
                <span>Total</span>
                <span className={expandedDeck === 'yuriko' ? 'text-green-400' : 'text-red-400'}>
                  {expandedDeck === 'yuriko' ? '$122.90' : '$1,238.05'}
                </span>
              </div>
            </div>
          </div>
        )}

        {!expandedDeck && <div className="mb-16" />}

        {/* Result Banner */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-16 text-center">
          <div className="text-sm text-purple-300 uppercase tracking-wide mb-2">98 Game Simulation Result</div>
          <div className="text-6xl font-bold text-white mb-4">80 - 18</div>
          <div className="text-xl text-purple-200">
            <span className="text-green-400 font-bold">81.6%</span> win rate with a deck that costs{" "}
            <span className="text-yellow-400 font-bold">10x less</span>
          </div>
        </div>
      </section>

      {/* ManaBall Scores - Flip Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">ManaBall Scores</h2>
        <p className="text-zinc-500 text-center mb-12">Click any card to see how it&apos;s calculated</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Fight Rank */}
          <FlipCard
            front={
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-zinc-500 uppercase tracking-wide">Fight Rank</span>
                  <span className="text-2xl font-bold tier-s">S</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">81.6%</div>
                <p className="text-sm text-zinc-400">Win rate against tested opponents</p>
                <div className="mt-4 bg-zinc-800 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '81.6%' }}></div>
                </div>
              </>
            }
            back={
              <>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-4">How Fight Rank Works</div>
                <div className="bg-zinc-800 rounded-lg p-3 font-mono text-sm mb-4">
                  <div className="text-zinc-400">Fight Rank = Wins / Total Games</div>
                  <div className="text-zinc-300 mt-2">= 80 / 98</div>
                  <div className="text-purple-400 font-bold text-lg">= 81.6%</div>
                </div>
                <div className="text-xs text-zinc-400 space-y-1">
                  <div><span className="text-yellow-400">S+</span> = 85%+</div>
                  <div><span className="text-purple-400">S</span> = 75-84% ← You</div>
                  <div><span className="text-blue-400">A</span> = 65-74%</div>
                  <div><span className="text-green-400">B</span> = 55-64%</div>
                </div>
              </>
            }
          />

          {/* Efficiency Rank */}
          <FlipCard
            front={
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-zinc-500 uppercase tracking-wide">Efficiency Rank</span>
                  <span className="text-2xl font-bold tier-s-plus">S+</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">8.22x</div>
                <p className="text-sm text-zinc-400">Value per dollar vs opponent</p>
                <div className="mt-4 text-xs text-zinc-500">
                  For every $1 spent, you get 8.22x the winning power
                </div>
              </>
            }
            back={
              <>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-4">How Efficiency Works</div>
                <div className="bg-zinc-800 rounded-lg p-3 font-mono text-sm mb-4">
                  <div className="text-zinc-400 text-xs">Efficiency = (WinRate/100) × (Their$ / Your$)</div>
                  <div className="text-zinc-300 mt-2">= 0.816 × ($1,238 / $123)</div>
                  <div className="text-zinc-300">= 0.816 × 10.07</div>
                  <div className="text-yellow-400 font-bold text-lg">= 8.22x</div>
                </div>
                <div className="text-xs text-zinc-400">
                  <p>You&apos;re beating a deck that costs <span className="text-yellow-400">10x more</span>.</p>
                  <p className="mt-1">Every $1 you spend delivers <span className="text-yellow-400">8.22x</span> the value.</p>
                </div>
              </>
            }
          />

          {/* Lead Per Turn */}
          <FlipCard
            front={
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-zinc-500 uppercase tracking-wide">Lead Per Turn</span>
                  <span className="text-lg font-bold text-blue-400">Aggro/Tempo</span>
                </div>
                <div className="text-4xl font-bold text-white mb-2">3.6</div>
                <p className="text-sm text-zinc-400">Damage dealt per turn average</p>
                <div className="mt-4 text-xs text-zinc-500">
                  Wins by turn 11 on average
                </div>
              </>
            }
            back={
              <>
                <div className="text-sm text-zinc-500 uppercase tracking-wide mb-4">How LPT Works</div>
                <div className="bg-zinc-800 rounded-lg p-3 font-mono text-sm mb-4">
                  <div className="text-zinc-400">LPT = Starting Life / Avg Turns to Win</div>
                  <div className="text-zinc-300 mt-2">= 40 / 11.1</div>
                  <div className="text-blue-400 font-bold text-lg">= 3.6 dmg/turn</div>
                </div>
                <div className="text-xs text-zinc-400 space-y-1">
                  <div><span className="text-red-400">4.0+</span> = Hyper Aggro</div>
                  <div><span className="text-blue-400">3.0-3.9</span> = Aggro/Tempo ← You</div>
                  <div><span className="text-green-400">2.0-2.9</span> = Midrange</div>
                  <div><span className="text-zinc-400">1.0-1.9</span> = Control</div>
                </div>
              </>
            }
          />
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
          <p>Simulation Engine: MTG Forge 2.0.09 • 98 AI vs AI Games</p>
          <p className="mt-2">ManaBall Analytics v0.3.0</p>
        </div>
      </footer>
    </main>
  );
}
