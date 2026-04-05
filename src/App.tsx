import { useState, useEffect, useMemo } from 'react'
import chroma from 'chroma-js'
import { COLOR_LEVELS, ALL_COLORS, getClosestColor } from './constants'
import { ColorGame } from './components/ColorGame'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dictionary' | 'learn' | 'game'>('dictionary')
  const [inputColor, setInputColor] = useState('#646cff')
  const [history, setHistory] = useState<string[]>([])
  const [harmonyMode, setHarmonyMode] = useState<'complementary' | 'analogous' | 'triadic' | 'neutral'>('complementary')

  const [selectedTier, setSelectedTier] = useState<number>(1)

  const colorData = useMemo(() => {
    try {
      if (!chroma.valid(inputColor)) return null
      
      const o = chroma(inputColor)
      const hex = o.hex()
      
      // Find the closest name from our dataset using high-precision OKLab
      const closestMatch = getClosestColor(hex, ALL_COLORS)
      if (!closestMatch) return null;
      
      return {
        hex: hex,
        rgb: o.css(),
        hsl: o.css('hsl'),
        name: closestMatch.name,
        contrast: chroma.contrast(o, 'white') > 4.5 ? '#ffffff' : '#000000',
        shades: chroma.scale([o.darken(2), o, o.brighten(2)]).colors(7),
        complementary: o.set('hsl.h', (o.get('hsl.h') + 180) % 360).hex()
      }
    } catch (e) {
      return null
    }
  }, [inputColor])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value)
  }

  const addToHistory = (color: string) => {
    if (!history.includes(color)) {
      setHistory(prev => [color, ...prev].slice(0, 10))
    }
  }

  const selectColor = (hex: string) => {
    setInputColor(hex)
    setActiveTab('dictionary')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (colorData && activeTab === 'dictionary') {
      const timer = setTimeout(() => addToHistory(colorData.hex), 1000)
      return () => clearTimeout(timer)
    }
  }, [colorData?.hex, activeTab])

  return (
    <div className="app-container">
      <div className="content-card">
        <nav className="tabs">
          <button 
            className={activeTab === 'dictionary' ? 'active' : ''} 
            onClick={() => setActiveTab('dictionary')}
          >
            Lexicon
          </button>
          <button 
            className={activeTab === 'learn' ? 'active' : ''} 
            onClick={() => setActiveTab('learn')}
          >
            Learn
          </button>
          <button 
            className={activeTab === 'game' ? 'active' : ''} 
            onClick={() => setActiveTab('game')}
          >
            Game
          </button>
        </nav>

        <header className="brand-header">
          <div className="logo-container">
            <svg viewBox="0 0 100 100" className="brand-logo">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E52B50" />
                  <stop offset="100%" stopColor="#FF8C00" />
                </linearGradient>
              </defs>
              {/* Four Iconic Architectural Lines representing a Prism Refraction */}
              <path d="M20 75 L50 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.1" />
              <path d="M50 20 L80 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.1" />
              <path d="M10 50 L50 20" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" opacity="0.6" />
              <path d="M50 20 L90 60" stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <h1 className="brand-name" style={{ textTransform: 'lowercase', letterSpacing: '0.5em' }}>itamars colors</h1>
          </div>
          <p className="brand-tagline">
            {activeTab === 'dictionary' ? 'The Curated Visual Vocabulary' : 
             activeTab === 'learn' ? 'Mastering the Perceptual Spectrum' : 
             'Testing Visual Intuition'}
          </p>
        </header>

        <main>
          {activeTab === 'dictionary' ? (
            <div className="dictionary-view animate-in">
              <section className="main-display">
                <div className="fashion-square">
                  <div 
                    className="square-inner" 
                    style={{ backgroundColor: colorData?.hex || '#242424' }}
                  >
                    <div className="square-label" style={{ color: colorData?.contrast || '#ffffff' }}>
                      {colorData?.name}
                    </div>
                  </div>
                </div>

                <div className="controls">
                  <div className="input-group">
                    <input 
                      type="color" 
                      value={colorData?.hex || '#000000'} 
                      onChange={handleInputChange} 
                      aria-label="Color picker"
                    />
                    <input 
                      type="text" 
                      value={inputColor} 
                      onChange={handleInputChange} 
                      placeholder="#000000"
                      aria-label="Color input"
                    />
                  </div>

                  {colorData && (
                    <div className="metadata">
                      <div className="meta-item">
                        <label>Hex</label>
                        <code>{colorData.hex.toUpperCase()}</code>
                      </div>
                      <div className="meta-item">
                        <label>RGB</label>
                        <code>{colorData.rgb}</code>
                      </div>
                      <div className="meta-item">
                        <label>HSL</label>
                        <code>{colorData.hsl}</code>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {colorData && (
                <section className="harmonies animate-in">
                  <h3 className="harmonies-title">Color Harmonies & Wardrobe</h3>
                  
                  <div className="harmony-layout">
                    <div className="color-wheel-container">
                      <svg viewBox="0 0 100 100" className="wheel-svg">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="0.5" />
                        
                        <g className="wheel-segments">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <path
                              key={i}
                              d={`M 50 50 L ${50 + 45 * Math.cos(i * 30 * Math.PI / 180)} ${50 + 45 * Math.sin(i * 30 * Math.PI / 180)} A 45 45 0 0 1 ${50 + 45 * Math.cos((i + 1) * 30 * Math.PI / 180)} ${50 + 45 * Math.sin((i + 1) * 30 * Math.PI / 180)} Z`}
                              fill={`hsl(${i * 30}, 70%, 60%)`}
                              opacity="0"
                              className="wheel-segment"
                              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                              onClick={() => setInputColor(chroma.hsl(i * 30, 0.7, 0.6).hex())}
                            />
                          ))}
                        </g>

                        {/* Base Color Indicator */}
                        <circle 
                          cx={50 + 40 * Math.cos(chroma(colorData.hex).get('hsl.h') * Math.PI / 180)} 
                          cy={50 + 40 * Math.sin(chroma(colorData.hex).get('hsl.h') * Math.PI / 180)} 
                          r="4" 
                          fill={colorData.hex} 
                          stroke="#fff" 
                          strokeWidth="2"
                          className="indicator-main"
                        />

                        {/* Dynamic Harmony Indicators */}
                        {harmonyMode === 'complementary' && (
                          <circle 
                            cx={50 + 40 * Math.cos((chroma(colorData.hex).get('hsl.h') + 180) * Math.PI / 180)} 
                            cy={50 + 40 * Math.sin((chroma(colorData.hex).get('hsl.h') + 180) * Math.PI / 180)} 
                            r="3" 
                            fill={colorData.complementary} 
                            stroke="#fff"
                            strokeWidth="1"
                            className="indicator-comp"
                          />
                        )}

                        {harmonyMode === 'analogous' && [30, -30].map(offset => (
                          <circle 
                            key={offset}
                            cx={50 + 40 * Math.cos((chroma(colorData.hex).get('hsl.h') + offset) * Math.PI / 180)} 
                            cy={50 + 40 * Math.sin((chroma(colorData.hex).get('hsl.h') + offset) * Math.PI / 180)} 
                            r="3" 
                            fill={chroma(colorData.hex).set('hsl.h', `+${offset}`).hex()} 
                            stroke="#fff"
                            strokeWidth="1"
                            className="indicator-dynamic"
                          />
                        ))}

                        {harmonyMode === 'triadic' && [120, -120].map(offset => (
                          <circle 
                            key={offset}
                            cx={50 + 40 * Math.cos((chroma(colorData.hex).get('hsl.h') + offset) * Math.PI / 180)} 
                            cy={50 + 40 * Math.sin((chroma(colorData.hex).get('hsl.h') + offset) * Math.PI / 180)} 
                            r="3" 
                            fill={chroma(colorData.hex).set('hsl.h', `+${offset}`).hex()} 
                            stroke="#fff"
                            strokeWidth="1"
                            className="indicator-dynamic"
                          />
                        ))}
                      </svg>
                    </div>

                    <div className="harmony-display-grid">
                      <div className="harmony-group">
                        <h4>Essential Pairings</h4>
                        <div className="outfit-previews">
                          <div 
                            className={`outfit-card ${harmonyMode === 'complementary' ? 'active' : ''}`}
                            onClick={() => setHarmonyMode('complementary')}
                          >
                            <div className="outfit-swatches">
                              <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                              <div className="swatch-accent" style={{ backgroundColor: colorData.complementary }} />
                            </div>
                            <span className="outfit-label">Complementary</span>
                          </div>
                          
                          <div 
                            className={`outfit-card ${harmonyMode === 'analogous' ? 'active' : ''}`}
                            onClick={() => setHarmonyMode('analogous')}
                          >
                            <div className="outfit-swatches">
                              <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                              <div className="swatch-accent" style={{ backgroundColor: chroma(colorData.hex).set('hsl.h', '+30').hex() }} />
                            </div>
                            <span className="outfit-label">Analogous</span>
                          </div>
                        </div>
                      </div>

                      <div className="harmony-group">
                        <h4>Wardrobe Classics</h4>
                        <div className="outfit-previews">
                          <div 
                            className={`outfit-card ${harmonyMode === 'triadic' ? 'active' : ''}`}
                            onClick={() => setHarmonyMode('triadic')}
                          >
                            <div className="outfit-swatches">
                              <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                              <div className="swatch-accent" style={{ backgroundColor: chroma(colorData.hex).set('hsl.h', '+120').hex() }} />
                              <div className="swatch-accent" style={{ backgroundColor: chroma(colorData.hex).set('hsl.h', '-120').hex() }} />
                            </div>
                            <span className="outfit-label">Triadic</span>
                          </div>

                          <div 
                            className={`outfit-card ${harmonyMode === 'neutral' ? 'active' : ''}`}
                            onClick={() => setHarmonyMode('neutral')}
                          >
                            <div className="outfit-swatches">
                              <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                              <div className="swatch-accent" style={{ backgroundColor: '#F5F5DC' }} />
                            </div>
                            <span className="outfit-label">Neutral Anchor</span>
                          </div>
                        </div>
                      </div>

                      <div className="harmony-group">
                        <h4>Tonal Scale</h4>
                        <div className="shades-list">
                          {colorData.shades.map((s, i) => (
                            <div 
                              key={i} 
                              className="shade-item" 
                              style={{ backgroundColor: s }} 
                              onClick={() => setInputColor(s)}
                              title={s}
                            />
                          ))}
                        </div>
                      </div>

                      {history.length > 0 && (
                        <div className="history harmony-group">
                          <h4>Recent Palettes</h4>
                          <div className="history-items">
                            {history.map((h, i) => (
                              <button 
                                key={i} 
                                className="history-dot" 
                                style={{ backgroundColor: h }} 
                                onClick={() => setInputColor(h)}
                                title={h}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )}
            </div>
          ) : activeTab === 'learn' ? (
            <div className="learn-view animate-in">
              <section className="tier-filter-section">
                <div className="filter-header">
                  <h3 className="filter-title">Explore by Tier</h3>
                </div>
                <div className="tier-selector-grid">
                  {COLOR_LEVELS.map(level => (
                    <button 
                      key={level.id} 
                      className={`tier-btn ${selectedTier === level.id ? 'active' : ''}`}
                      onClick={() => setSelectedTier(level.id)}
                    >
                      {level.id}
                    </button>
                  ))}
                </div>
              </section>

              {COLOR_LEVELS.filter(l => l.id === selectedTier).map(level => (
                <section key={level.id} className="level-block animate-in">
                  <div className="level-info">
                    <h2>{level.name}</h2>
                    <p>Tier {level.id} &mdash; {level.description}</p>
                  </div>
                  <div className="level-grid">
                    {level.colors.map(color => {
                      const shades = chroma.scale([chroma(color.hex).darken(1.5), color.hex, chroma(color.hex).brighten(1.5)]).colors(5);
                      return (
                        <button 
                          key={color.hex} 
                          className="color-chip"
                          onClick={() => selectColor(color.hex)}
                        >
                          <div className="chip-swatch">
                            <div className="chip-inner" style={{ backgroundColor: color.hex }} />
                          </div>
                          <div className="chip-meta">
                            <span className="chip-name">{color.name}</span>
                            <span className="chip-hex">{color.hex}</span>
                            <div className="chip-shades">
                              {shades.map((s, i) => (
                                <div key={i} className="chip-shade" style={{ backgroundColor: s }} />
                              ))}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <ColorGame onSelectColor={selectColor} />
          )}
        </main>

        <footer>
          {/* Footer removed as history moved to main view */}
        </footer>
      </div>
    </div>
  )
}

export default App
