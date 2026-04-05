import { useState, useEffect, useMemo } from 'react'
import chroma from 'chroma-js'
import { COLOR_LEVELS, ALL_COLORS, getClosestColor } from './constants'
import { ColorGame } from './components/ColorGame'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dictionary' | 'learn' | 'game'>('dictionary')
  const [inputColor, setInputColor] = useState('#646cff')
  const [history, setHistory] = useState<string[]>([])

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
                <linearGradient id="prismSide" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <linearGradient id="spectrumLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E52B50" />
                  <stop offset="33%" stopColor="#FFD700" />
                  <stop offset="66%" stopColor="#00FF00" />
                  <stop offset="100%" stopColor="#0000FF" />
                </linearGradient>
              </defs>
              {/* Refined 3D Prism Structure */}
              <path d="M50 15 L85 75 L15 75 Z" fill="url(#prismSide)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <path d="M50 15 L65 30 L65 90 L15 75 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              
              {/* Precision Light Beam Path */}
              <path d="M0 60 L35 55" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeDasharray="3 2" />
              
              {/* Refraction inside the glass */}
              <path d="M35 55 L55 52" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
              
              {/* Exiting Spectrum Fan */}
              <path d="M55 52 L100 35" stroke="#E52B50" strokeWidth="1.5" opacity="0.7" />
              <path d="M55 52 L100 48" stroke="#FFD700" strokeWidth="1.5" opacity="0.7" />
              <path d="M55 52 L100 62" stroke="#00FF00" strokeWidth="1.5" opacity="0.7" />
              <path d="M55 52 L100 75" stroke="#0000FF" strokeWidth="1.5" opacity="0.7" />
              
              {/* Prism Edges Glow */}
              <path d="M50 15 L15 75" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
            </svg>
            <h1 className="brand-name">ITAMARS</h1>
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
                        {/* Current Hue Indicator */}
                        <circle 
                          cx={50 + 40 * Math.cos(chroma(colorData.hex).get('hsl.h') * Math.PI / 180)} 
                          cy={50 + 40 * Math.sin(chroma(colorData.hex).get('hsl.h') * Math.PI / 180)} 
                          r="4" 
                          fill={colorData.hex} 
                          stroke="#fff" 
                          strokeWidth="2"
                        />
                        {/* Complementary Hue Indicator */}
                        <circle 
                          cx={50 + 40 * Math.cos((chroma(colorData.hex).get('hsl.h') + 180) * Math.PI / 180)} 
                          cy={50 + 40 * Math.sin((chroma(colorData.hex).get('hsl.h') + 180) * Math.PI / 180)} 
                          r="3" 
                          fill={colorData.complementary} 
                          opacity="0.6"
                        />
                      </svg>
                    </div>

                    <div className="harmony-display-grid">
                      <div className="harmony-group">
                        <h4>Essential Pairings</h4>
                        <div className="outfit-previews">
                          <div className="outfit-card" onClick={() => setInputColor(colorData.complementary)}>
                            <div className="outfit-swatches">
                              <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                              <div className="swatch-accent" style={{ backgroundColor: colorData.complementary }} />
                            </div>
                            <span className="outfit-label">Complementary</span>
                          </div>
                          
                          <div className="outfit-card" onClick={() => setInputColor(chroma(colorData.hex).set('hsl.h', '+30').hex())}>
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
                          {['#F5F5DC', '#36454F', '#FFFFFF'].map((neutral, i) => (
                            <div key={i} className="outfit-card" onClick={() => setInputColor(neutral)}>
                              <div className="outfit-swatches">
                                <div className="swatch-main" style={{ backgroundColor: colorData.hex }} />
                                <div className="swatch-accent" style={{ backgroundColor: neutral }} />
                              </div>
                              <span className="outfit-label">{['Beige', 'Charcoal', 'White'][i]} Anchor</span>
                            </div>
                          ))}
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
              {COLOR_LEVELS.map(level => (
                <section key={level.id} className="level-block">
                  <div className="level-info">
                    <h2>{level.name}</h2>
                    <p>Level {level.id} &mdash; {level.description}</p>
                  </div>
                  <div className="level-grid">
                    {level.colors.map(color => (
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
                        </div>
                      </button>
                    ))}
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
