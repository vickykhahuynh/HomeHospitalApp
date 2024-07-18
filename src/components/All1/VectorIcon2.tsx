import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.51443 1.54496C6.08865 1.00265 5.17946 0.143998 4.60524 0.731499L0.394288 4.66324C0.155029 4.8892 0.155029 5.29594 0.394288 5.5219L4.60524 9.49883C5.17946 10.0411 6.08865 9.18248 5.51443 8.64018L1.78199 5.11517L5.51443 1.54496Z'
      fill='#6E6893'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
