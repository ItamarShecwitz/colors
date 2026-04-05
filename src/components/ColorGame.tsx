import { useState, useEffect, useCallback } from 'react';
import chroma from 'chroma-js';
import { getColorsByLevel } from '../constants';

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
    
    // Generate a completely random color
    const randomHex = chroma.random().hex();
    setTargetColor(randomHex);

    // Find the closest color name from our dataset
    let closest = availableColors[0];
    let minDistance = chroma.distance(randomHex, availableColors[0].hex);

    availableColors.forEach(color => {
      const dist = chroma.distance(randomHex, color.hex);
      if (dist < minDistance) {
        minDistance = dist;
        closest = color;
      }
    });

    setCorrectOption(closest);

    // Pick 3 distractors
    const distractors: { name: string; hex: string }[] = [];
    const pool = availableColors.filter(c => c.name !== closest.name);
    
    while (distractors.length < 3 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      const picked = pool.splice(idx, 1)[0];
      distractors.push(picked);
    }

    // Shuffle options
    const allOptions = [closest, ...distractors].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
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
      setTimeout(generateQuestion, 1500);
    } else {
      setFeedback('wrong');
      setScore(s => ({ ...s, total: s.total + 1 }));
      setTimeout(generateQuestion, 2000);
    }
  };

  return (
    <div className="game-container animate-in">
      <div className="game-header">
        <div className="difficulty-selector">
          {[1, 2, 3, 4, 5].map(lvl => (
            <button 
              key={lvl} 
              className={difficulty === lvl ? 'active' : ''}
              onClick={() => {
                setDifficulty(lvl);
                setScore({ correct: 0, total: 0 });
              }}
            >
              Lvl {lvl}
            </button>
          ))}
        </div>
        <div className="score-display">
          <span>{score.correct} / {score.total}</span>
        </div>
      </div>

      <div className="game-main">
        <div 
          className="target-square" 
          style={{ backgroundColor: targetColor }}
          onClick={() => onSelectColor(targetColor)}
          title="Click to view in Dictionary"
        />
        
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
          {feedback === 'correct' ? 'Perfect' : `Actually ${correctOption?.name}`}
        </div>
      )}
    </div>
  );
}
