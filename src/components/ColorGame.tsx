import { useState, useEffect, useCallback } from 'react';
import chroma from 'chroma-js';
import { getColorsByLevel, getClosestColor } from '../constants';

interface ColorGameProps {
  initialDifficulty?: number;
  onSelectColor: (hex: string) => void;
}

export function ColorGame({ initialDifficulty = 1, onSelectColor }: ColorGameProps) {
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [targetColor, setTargetColor] = useState('#000000');
  const [options, setOptions] = useState<{ name: string; hex: string }[]>([]);
  const [correctOption, setCorrectOption] = useState<{ name: string; hex: string } | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const generateQuestion = useCallback(() => {
    const availableColors = getColorsByLevel(difficulty);
    
    // Pick 4 candidate colors from the current tier to act as our "range"
    const candidates: typeof availableColors = [];
    const pool = [...availableColors];
    while (candidates.length < 4 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      candidates.push(pool.splice(idx, 1)[0]);
    }

    // Pick one of these candidates as the "seed" for our target color
    const seed = candidates[Math.floor(Math.random() * candidates.length)];
    
    // Generate a color "near" the seed by jittering HSL values
    // This creates a "natural" variation that still belongs to that color's family
    const target = chroma(seed.hex)
      .set('hsl.h', (chroma(seed.hex).get('hsl.h') + (Math.random() * 20 - 10) + 360) % 360)
      .set('hsl.s', Math.max(0, Math.min(1, chroma(seed.hex).get('hsl.s') + (Math.random() * 0.2 - 0.1))))
      .set('hsl.l', Math.max(0, Math.min(1, chroma(seed.hex).get('hsl.l') + (Math.random() * 0.2 - 0.1))))
      .hex();

    setTargetColor(target);

    // Now, determine which of our 4 candidates is actually closest to this new jittered color
    // This ensures the "recognize the closest shade" rule is strictly followed via OKLab
    const closest = getClosestColor(target, candidates);

    setCorrectOption(closest);
    setOptions(candidates);
    setFeedback(null);
  }, [difficulty]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleOptionClick = (option: { name: string; hex: string }) => {
    if (feedback) return;

    if (option.name === correctOption?.name) {
      setFeedback('correct');
      setScore(s => ({ ...s, correct: s.correct + 1, total: s.total + 1 }));
      setTimeout(generateQuestion, 1200);
    } else {
      setFeedback('wrong');
      setScore(s => ({ ...s, total: s.total + 1 }));
      setTimeout(generateQuestion, 1800);
    }
  };

  return (
    <div className="game-container animate-in">
      <div className="game-header">
        <div className="difficulty-slider-container">
          <span className="difficulty-label">Select Difficulty Tier</span>
          <div className="tier-selector-grid">
            {Array.from({ length: 20 }, (_, i) => i + 1).map(lvl => (
              <button 
                key={lvl} 
                className={`tier-btn ${difficulty === lvl ? 'active' : ''}`}
                onClick={() => {
                  setDifficulty(lvl);
                  setScore({ correct: 0, total: 0 });
                }}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
        <div className="score-display">
          <span>{score.correct} / {score.total}</span>
        </div>
      </div>

      <div className="game-main">
        <div className="target-square-frame">
          <div 
            className="target-square" 
            style={{ backgroundColor: targetColor }}
            onClick={() => onSelectColor(targetColor)}
            title="Examine in Dictionary"
          />
        </div>
        
        <div className="options-grid">
          {options.map((opt, i) => (
            <button 
              key={i} 
              className={`option-btn ${feedback === 'correct' && opt.name === correctOption?.name ? 'correct' : ''} ${feedback === 'wrong' && opt.name === correctOption?.name ? 'correct-hint' : ''}`}
              onClick={() => handleOptionClick(opt)}
              disabled={!!feedback}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`feedback-overlay ${feedback}`}>
          {feedback === 'correct' ? 'Visionary' : `Indeed it was ${correctOption?.name}`}
        </div>
      )}
    </div>
  );
}
