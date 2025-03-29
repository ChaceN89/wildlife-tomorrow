import React from 'react'

export default function ColorBoxes() {
  const colors = [
    { name: "Primary", variable: "--color-primary" },
    { name: "Primary Alt", variable: "--color-primary-alt" },
    { name: "Secondary", variable: "--color-secondary" },
    { name: "Secondary Alt", variable: "--color-secondary-alt" },
    { name: "Accent", variable: "--color-accent" },
    { name: "Accent Alt", variable: "--color-accent-alt" },
    { name: "Tertiary", variable: "--color-tertiary" },
    { name: "Tertiary Alt", variable: "--color-tertiary-alt" },
    { name: "Neutral", variable: "--color-neutral" },
    { name: "Neutral Alt", variable: "--color-neutral-alt" },
  ];
  return (
    <div className="rounded-4xl p-4 m-2  bg-neutral border border-gray-300 shadow-md">
      <h1 className='w-full items-center flex justify-center text-3xl py-2 underline'>Site Theme</h1>
      <div className='grid grid-cols-2 gap-4 items-center justify-center'>
        {Array.from({ length: colors.length / 2 }).map((_, i) => (
          <div key={i} className="flex">
            <ColorBox
              name={colors[i * 2].name}
              variable={colors[i * 2].variable}
            />
            <ColorBox
              name={colors[i * 2 + 1].name}
              variable={colors[i * 2 + 1].variable}
            />
          </div>
        ))}
      </div>
    </div>
  )
}


function ColorBox({ name, variable }) {
  return (
    <div className="flex flex-col items-center m-2">
      <div
        className="h-32 w-32 rounded shadow-md border border-gray-300"
        style={{ backgroundColor: `var(${variable})` }}
      ></div>
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}
