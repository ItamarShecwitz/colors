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
                <linearGradient id="prismLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E52B50" />
                  <stop offset="50%" stopColor="#00FF00" />
                  <stop offset="100%" stopColor="#0000FF" />
                </linearGradient>
              </defs>
              {/* The Glass Prism */}
              <path d="M50 20 L80 80 L20 80 Z" fill="rgba(255,255,255,0.05)" stroke="url(#prismLight)" strokeWidth="1.5" strokeLinejoin="round"/>
              {/* Incoming White Light */}
              <path d="M0 50 L35 50" stroke="#fff" strokeWidth="1" opacity="0.4" strokeDasharray="2 1"/>
              {/* Refracted Spectrum */}
              <path d="M65 50 L100 35" stroke="#E52B50" strokeWidth="2" opacity="0.8"/>
              <path d="M65 50 L100 50" stroke="#00FF00" strokeWidth="2" opacity="0.8"/>
              <path d="M65 50 L100 65" stroke="#0000FF" strokeWidth="2" opacity="0.8"/>
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
                <>
                  <section className="relationships animate-in">
                    <div className="shades-section">
                      <h3>Tonal Scale</h3>
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

                    <div className="complement-section">
                      <h3>Complementary</h3>
                      <div 
                        className="complement-box" 
                        onClick={() => setInputColor(colorData.complementary)}
                      >
                        <div 
                          className="complement-inner"
                          style={{ backgroundColor: colorData.complementary }}
                        >
                          <span style={{ color: chroma.contrast(colorData.complementary, 'white') > 4.5 ? '#fff' : '#000' }}>
                            {colorData.complementary.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="harmonies animate-in">
                    <h3>Wardrobe Harmonies</h3>
                    <div className="harmonies-grid">
                      <div className="harmony-type">
                        <label>Analogous (Natural)</label>
                        <div className="harmony-swatches">
                          {[chroma(colorData.hex).set('hsl.h', '-30').hex(), chroma(colorData.hex).set('hsl.h', '+30').hex()].map(c => (
                            <div key={c} className="harmony-swatch" style={{ backgroundColor: c }} onClick={() => setInputColor(c)} />
                          ))}
                        </div>
                      </div>
                      <div className="harmony-type">
                        <label>Triadic (Bold)</label>
                        <div className="harmony-swatches">
                          {[chroma(colorData.hex).set('hsl.h', '-120').hex(), chroma(colorData.hex).set('hsl.h', '+120').hex()].map(c => (
                            <div key={c} className="harmony-swatch" style={{ backgroundColor: c }} onClick={() => setInputColor(c)} />
                          ))}
                        </div>
                      </div>
                      <div className="harmony-type">
                        <label>Neutral Pairings</label>
                        <div className="harmony-swatches">
                          {['#F5F5DC', '#36454F', '#808080'].map(c => (
                            <div key={c} className="harmony-swatch" style={{ backgroundColor: c }} onClick={() => setInputColor(c)} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </>
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
          {activeTab === 'dictionary' && history.length > 0 && (
            <div className="history">
              <h3>Recent</h3>
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
        </footer>
      </div>
    </div>
  )
}

export default App
