import type { SVGProps } from 'react'

// https://icones.js.org/collection/material-symbols?s=night&icon=material-symbols:nights-stay-rounded
export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M6 14q1.2 0 2.2.65t1.475 1.775l.25.575h.625q1.05 0 1.75.738T13 19.5q0 1.05-.725 1.775T10.5 22H6q-1.65 0-2.825-1.175T2 18q0-1.675 1.175-2.838T6 14m8.025-2.025q1.5 1.5 3.463 2.263t4.087.612q.275-.025.488.075t.362.3t.2.425t-.025.475q-.875 3.025-3.512 4.925T13.325 23q.8-.65 1.238-1.562T15 19.5q0-1.7-1.062-2.937t-2.713-1.488q-.8-1.425-2.187-2.25T6 12q-.8 0-1.562.2T3 12.8Q3.05 9.525 4.913 7T9.85 3.45q.25-.075.488-.025t.437.2t.313.363t.087.487q-.125 2.15.6 4.063t2.25 3.437"
      />
    </svg>
  )
}
