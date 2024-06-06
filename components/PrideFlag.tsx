import React from 'react';
import range from 'lodash/range';

const COLORS: Record<string, string[]> = {
  rainbow: [
    'hsl(0deg 0% 18%)',
    'hsl(30deg 60% 30%)',
    'hsl(0deg 90% 55%)',
    'hsl(30deg 95% 65%)',
    'hsl(55deg 90% 65%)',
    'hsl(100deg 65% 45%)',
    'hsl(220deg 80% 55%)',
    'hsl(265deg 80% 50%)',
  ],
  'rainbow-original': [
    'hsl(0deg 90% 55%)',
    'hsl(30deg 95% 65%)',
    'hsl(55deg 90% 65%)',
    'hsl(100deg 65% 45%)',
    'hsl(220deg 80% 55%)',
    'hsl(265deg 80% 50%)',
  ],
  trans: [
    'hsl(200deg 85% 70%)',
    'hsl(350deg 85% 85%)',
    'hsl(0deg 0% 100%)',
    'hsl(350deg 85% 85%)',
    'hsl(200deg 85% 70%)',
  ],
  pan: ['hsl(331deg 100% 55%)', 'hsl(50deg 100% 50%)', 'hsl(200deg 100% 55%)'],
};

function PrideFlag({
  variant = 'rainbow', // rainbow | rainbow-original | trans | pan
  width = 35,
  numOfColumns = 10,
  staggeredDelay = 100,
  billow = 1,
}) {
  const colors = COLORS[variant];

  const friendlyWidth = Math.round(width / numOfColumns) * numOfColumns;

  const firstColumnDelay = numOfColumns * staggeredDelay * -1;

  return (
    <div className="flag" style={{width: friendlyWidth}}>
      {range(numOfColumns).map(columnIndex => (
        <div
          key={columnIndex}
          className="column"
          style={
            {
              '--billow': columnIndex * billow + 'px',
              background: generateGradientString(colors),
              animationDelay:
                firstColumnDelay + columnIndex * staggeredDelay + 'ms',
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

function generateGradientString(colors: string[]) {
  const numOfColors = colors.length;
  const segmentHeight = 100 / numOfColors;

  const gradientStops = colors.map((color, index) => {
    const from = index * segmentHeight;
    const to = (index + 1) * segmentHeight;

    return `${color} ${from}% ${to}%`;
  });

  return `linear-gradient(to bottom, ${gradientStops.join(', ')})`;
}

export default PrideFlag;
