import { useState, useEffect, useCallback, useRef } from 'react';
import chroma from 'chroma-js';
import { getColorsByLevel, getClosestColor, getAllColorsUpToLevel } from '../constants';

interface ColorGameProps {
  initialDifficulty?: number;
  onSelectColor: (hex: string) => void;
}

type GameMode = 'practice' | 'timer';

export function ColorGame({ initialDifficulty = 1, onSelectColor }: ColorGameProps) {
  const [mode, setMode] = useState<GameMode>('practice');
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [targetColor, setTargetColor] = useState('#000000');
  const [options, setOptions] = useState<{ name: string; hex: string }[]>([]);
  const [correctOption, setCorrectOption] = useState<{ name: string; hex: string } | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [lastClickedOption, setLastClickedOption] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isJitterEnabled, setIsJitterEnabled] = useState(false);
  
  // Timer Mode State
  const [timeLeft, setTimeLeft] = useState(20);
  const [isGameOver, setIsGameOver] = useState(false);
  const timerRef = useRef<number | null>(null);
  const gameSectionRef = useRef<HTMLDivElement>(null);

  const generateQuestion = useCallback(() => {
    if (mode === 'timer' && score.total >= 10) {
      setIsGameOver(true);
      return;
    }

    // Timer mode: strictly this level. Practice mode: this level and below.
    const availableColors = mode === 'timer' 
      ? getColorsByLevel(difficulty) 
      : getAllColorsUpToLevel(difficulty);

    if (!availableColors || availableColors.length < 4) return;
    
    const candidates: typeof availableColors = [];
    const pool = [...availableColors];
    while (candidates.length < 4 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      candidates.push(pool.splice(idx, 1)[0]);
    }

    const seed = candidates[Math.floor(Math.random() * candidates.length)];
    
    let target: string;
    if (isJitterEnabled) {
      target = chroma(seed.hex)
        .set('hsl.h', (chroma(seed.hex).get('hsl.h') + (Math.random() * 40 - 20) + 360) % 360)
        .set('hsl.s', Math.max(0.1, Math.min(0.9, chroma(seed.hex).get('hsl.s') + (Math.random() * 0.4 - 0.2))))
        .set('hsl.l', Math.max(0.1, Math.min(0.9, chroma(seed.hex).get('hsl.l') + (Math.random() * 0.3 - 0.15))))
        .hex();
    } else {
      target = seed.hex;
    }

    setTargetColor(target);
    const closest = getClosestColor(target, candidates);
    setCorrectOption(closest || candidates[0]);
    setOptions(candidates);
    setFeedback(null);
    setLastClickedOption(null);
    setTimeLeft(20);
  }, [difficulty, mode, score.total, isJitterEnabled]);

  useEffect(() => {
    generateQuestion();
  }, [difficulty, mode, isJitterEnabled]);

  useEffect(() => {
    if (mode === 'timer' && !feedback && !isGameOver) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            handleOptionClick({ name: 'TIMEOUT', hex: '' });
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, feedback, isGameOver]);

  const handleOptionClick = (option: { name: string; hex: string }) => {
    if (feedback || isGameOver) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const isCorrect = option.name === correctOption?.name;
    setLastClickedOption(option.name);
    setFeedback(isCorrect ? 'correct' : 'wrong');
    setScore(s => ({ ...s, correct: isCorrect ? s.correct + 1 : s.correct, total: s.total + 1 }));

    if (mode === 'timer' && score.total + 1 >= 10) {
      setTimeout(() => setIsGameOver(true), 1500);
    } else {
      setTimeout(generateQuestion, 1500);
    }
  };

  const resetGame = () => {
    setScore({ correct: 0, total: 0 });
    setIsGameOver(false);
    setFeedback(null);
    setLastClickedOption(null);
    generateQuestion();
  };

  const scrollToGame = () => {
    setTimeout(() => {
      if (gameSectionRef.current) {
        gameSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="game-container animate-in">
      <div className="game-controls-top-row">
        <div className="game-modes">
          <button className={`mode-btn ${mode === 'practice' ? 'active' : ''}`} onClick={() => { setMode('practice'); resetGame(); }}>Practice</button>
          <button className={`mode-btn ${mode === 'timer' ? 'active' : ''}`} onClick={() => { setMode('timer'); resetGame(); }}>Timer</button>
        </div>

        <button 
          className={`jitter-toggle-btn ${!isJitterEnabled ? 'active' : ''}`}
          onClick={() => {
            setIsJitterEnabled(!isJitterEnabled);
            resetGame();
          }}
        >
          {isJitterEnabled ? 'Jitter: On' : 'Jitter: Off'}
        </button>
      </div>

      <div className="game-header">
        <div className="difficulty-slider-container">
          <span className="difficulty-label">Select Difficulty Level</span>
          <div className="level-selector-grid">
            {Array.from({ length: 20 }, (_, i) => i + 1).map(lvl => (
              <button 
                key={lvl} 
                className={`level-btn ${difficulty === lvl ? 'active' : ''}`}
                onClick={() => { 
                  setDifficulty(lvl); 
                  resetGame();
                  scrollToGame();
                }}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="game-main" ref={gameSectionRef}>
        <div className="game-stats-row">
          <div className="stat-box">
            <label>Level {difficulty}</label>
            <span>{score.correct} / {score.total}</span>
          </div>
          {mode === 'timer' && (
            <div className={`stat-box timer ${timeLeft < 5 ? 'urgent' : ''}`}>
              <label>Time</label>
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>

        <div className="target-square-frame">
          <div 
            className="target-square" 
            style={{ backgroundColor: targetColor }}
            onClick={() => onSelectColor(targetColor)}
          >
            {feedback && (
              <div className="reveal-name animate-in">
                {correctOption?.name}
              </div>
            )}
          </div>
        </div>
        
        <div className="options-grid">
          {options.map((opt, i) => {
            let statusClass = '';
            if (feedback) {
              if (opt.name === correctOption?.name) statusClass = 'correct';
              else if (opt.name === lastClickedOption) statusClass = 'wrong';
              else statusClass = 'faded';
            }
            
            return (
              <button 
                key={i} 
                className={`option-btn ${statusClass}`}
                onClick={() => handleOptionClick(opt)}
                disabled={!!feedback || isGameOver}
              >
                {opt.name}
              </button>
            );
          })}
        </div>
      </div>

      {isGameOver && (
        <div className="game-over-overlay animate-in">
          <h2>Session Complete</h2>
          <div className="final-score">{score.correct} / 10</div>
          <p>{score.correct >= 8 ? 'Master of the Spectrum' : 'Continue your studies'}</p>
          <button className="reset-btn" onClick={resetGame}>Try Again</button>
        </div>
      )}

      {feedback && !isGameOver && (
        <div className={`feedback-overlay ${feedback}`}>
          {feedback === 'correct' ? 'Visionary' : `Indeed it was ${correctOption?.name}`}
        </div>
      )}
    </div>
  );
}
