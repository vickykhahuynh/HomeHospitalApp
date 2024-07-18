import { memo, SVGProps } from 'react';

const RadioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.96646 20C15.1088 20 19.2774 15.5228 19.2774 10C19.2774 4.47715 15.1088 0 9.96646 0C4.82415 0 0.655485 4.47715 0.655485 10C0.655485 15.5228 4.82415 20 9.96646 20ZM9.96646 13C11.5091 13 12.7597 11.6569 12.7597 10C12.7597 8.34315 11.5091 7 9.96646 7C8.42376 7 7.17316 8.34315 7.17316 10C7.17316 11.6569 8.42376 13 9.96646 13Z'
      fill='#D30000'
    />
  </svg>
);

const Memo = memo(RadioIcon);
export { Memo as RadioIcon };
