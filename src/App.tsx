import { useState, useEffect, useMemo } from 'react'
import namer from 'color-namer'
import chroma from 'chroma-js'
import { COLOR_LEVELS } from './constants'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dictionary' | 'learn'>('dictionary')
  const [inputColor, setInputColor] = useState('#646cff')
  const [history, setHistory] = useState<string[]>([])

  const colorData = useMemo(() => {
    try {
      if (!chroma.valid(inputColor)) return null
      
      const c = chroma(inputColor)
      const namerFn = typeof namer === 'function' ? namer : (namer as any).default
      const namesResult = (typeof namerFn === 'function' ? namerFn(c.hex()) : {}) as any
      
      const ntcNames = namesResult.ntc || []
      const basicNames = namesResult.basic || []
      
      return {
        hex: c.hex(),
        rgb: c.css(),
        hsl: c.css('hsl'),
        name: ntcNames[0]?.name || 'Unknown',
        basicName: basicNames[0]?.name || 'Unknown',
        contrast: chroma.contrast(c, 'white') > 4.5 ? '#ffffff' : '#000000',
        shades: chroma.scale([c.darken(2), c, c.brighten(2)]).colors(7),
        complementary: c.set('hsl.h', (c.get('hsl.h') + 180) % 360).hex()
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
  }

  useEffect(() => {
    if (colorData && activeTab === 'dictionary') {
      const timer = setTimeout(() => addToHistory(colorData.hex), 1000)
      return () => clearTimeout(timer)
    }
  }, [colorData?.hex, activeTab])

  return (
    <div className="app-container" style={{ backgroundColor: colorData?.hex || '#242424' }}>
      <div className="content-card" style={{ color: colorData?.contrast || '#ffffff' }}>
        <nav className="tabs">
          <button 
            className={activeTab === 'dictionary' ? 'active' : ''} 
            onClick={() => setActiveTab('dictionary')}
          >
            Dictionary
          </button>
          <button 
            className={activeTab === 'learn' ? 'active' : ''} 
            onClick={() => setActiveTab('learn')}
          >
            Learn
          </button>
        </nav>

        <header>
          <h1>Color Lexicon</h1>
          <p>{activeTab === 'dictionary' ? 'A dictionary for the spectrum' : 'Master the names of the spectrum'}</p>
        </header>

        <main>
          {activeTab === 'dictionary' ? (
            <div className="dictionary-view animate-in">
              <div className="input-group">
                <input 
                  type="text" 
                  value={inputColor} 
                  onChange={handleInputChange} 
                  placeholder="#000000"
                  aria-label="Color input"
                />
                <input 
                  type="color" 
                  value={colorData?.hex || '#000000'} 
                  onChange={handleInputChange} 
                  aria-label="Color picker"
                />
              </div>

              {colorData ? (
                <div className="color-info">
                  <section className="primary-name">
                    <h2 className="serif">{colorData.name}</h2>
                    <p className="subtitle">Primarily known as <strong>{colorData.basicName}</strong></p>
                  </section>

                  <section className="details">
                    <div className="detail-item">
                      <span>HEX</span>
                      <code>{colorData.hex.toUpperCase()}</code>
                    </div>
                    <div className="detail-item">
                      <span>RGB</span>
                      <code>{colorData.rgb}</code>
                    </div>
                    <div className="detail-item">
                      <span>HSL</span>
                      <code>{colorData.hsl}</code>
                    </div>
                  </section>

                  <section className="shades-container">
                    <h3>Scale</h3>
                    <div className="shades">
                      {colorData.shades.map((s, i) => (
                        <div 
                          key={i} 
                          className="shade-box" 
                          style={{ backgroundColor: s }} 
                          onClick={() => setInputColor(s)}
                          title={s}
                        />
                      ))}
                    </div>
                  </section>

                  <section className="complementary">
                    <h3>Complementary</h3>
                    <div 
                      className="complementary-box" 
                      style={{ backgroundColor: colorData.complementary }}
                      onClick={() => setInputColor(colorData.complementary)}
                    >
                      <span>{colorData.complementary.toUpperCase()}</span>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="error-state">
                  <p>Enter a valid color to begin your exploration.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="learn-view animate-in">
              {COLOR_LEVELS.map(level => (
                <section key={level.id} className="level-group">
                  <div className="level-header">
                    <h2>Level {level.id}: {level.name}</h2>
                    <p>{level.description}</p>
                  </div>
                  <div className="learning-grid">
                    {level.colors.map(color => (
                      <button 
                        key={color.hex} 
                        className="learning-card"
                        onClick={() => selectColor(color.hex)}
                        style={{ borderLeftColor: color.hex }}
                      >
                        <div className="swatch" style={{ backgroundColor: color.hex }} />
                        <div className="info">
                          <span className="name">{color.name}</span>
                          <span className="hex">{color.hex}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>

        <footer>
          {activeTab === 'dictionary' && history.length > 0 && (
            <div className="history">
              <h3>Recent Explorations</h3>
              <div className="history-list">
                {history.map((h, i) => (
                  <button 
                    key={i} 
                    className="history-item" 
                    style={{ backgroundColor: h }} 
                    onClick={() => setInputColor(h)}
                    aria-label={`Select color ${h}`}
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
