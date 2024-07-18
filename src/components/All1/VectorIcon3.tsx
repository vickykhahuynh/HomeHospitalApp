import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.568887 1.54496C-0.00533384 1.00265 0.90385 0.143997 1.47807 0.731499L5.68903 4.66324C5.92828 4.8892 5.92828 5.29594 5.68903 5.5219L1.47807 9.49883C0.90385 10.0411 -0.00533384 9.18249 0.568887 8.64018L4.30132 5.11517L0.568887 1.54496Z'
      fill='#6E6893'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
