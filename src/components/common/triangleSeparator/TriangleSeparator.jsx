/**
 * @file TriangleSeparator.jsx
 * @module TriangleSeparator
 * @desc A customizable, interlocking triangle grid used as a visual separator between sections.
 *       Supports top and bottom alignment, background inheritance, flipping pattern, and random color assignment.
 *
 * @component
 * @prop {number} rows - Number of triangle rows to display (default: 4).
 * @prop {number} cols - Number of triangles per row (default: 80).
 * @prop {string} parentClass - Tailwind or custom classes for the outer wrapper.
 * @prop {string} triangleClass - Classes applied to each triangle element.
 * @prop {boolean} bottom - If true, renders grid starting from bottom using `flex-col-reverse`.
 * @prop {boolean} randomColors - If true, applies random colors to triangles.
 *
 * @usage
 * <TriangleSeparator 
 *   rows={5} 
 *   cols={60} 
 *   parentClass="bg-secondary h-12"
 *   triangleClass="bg-secondary-alt opacity-70"
 *   bottom={true}
 *   randomColors={true}
 * />
 * 
 * @author Chace Nielson
 * @created Mar 29, 2025
 * @updated Mar 29, 2025
 */

import React from 'react';
import './triangle-separator.css';

export default function TriangleSeparator({
  rows = 2,
  cols = 120,
  triangleClass = 'bg-primary-alt/50',
  bottom = false,
  randomColors = false
}) {

  const colorClasses = ['bg-primary', 'bg-accent', 'bg-tertiary', 'bg-secondary', 'bg-neutral', 'bg-neutral-alt', 'bg-primary-alt', 'bg-accent-alt', 'bg-tertiary-alt', 'bg-secondary-alt'];

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex] + " " + triangleClass;
  };

  const shouldFlip = (rowIndex, colIndex) => {
    if (rowIndex % 2 === 0) {
      return colIndex % 2 !== 0;
    } else {
      return colIndex % 2 === 0;
    }
  };

  return (
    <div className={`relative w-full `}>
      <div className={`absolute bottom-0 triangle-grid ${bottom && 'bottom-triangle-grid'}`}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`triangle-row ${rowIndex % 2 !== 0 ? 'triangle-row-offset' : ''}`}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div
                key={`triangle-${rowIndex}-${colIndex}`}
                className={`triangle ${randomColors ? getRandomColorClass() : triangleClass} 
                            ${shouldFlip(rowIndex, colIndex) ? 'flipped' : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
