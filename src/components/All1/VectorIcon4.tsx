import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.9652 10.9652L18.2753 3.65507V0H0V3.65507L7.31014 10.9652V18.2753L10.9652 14.6203V10.9652Z'
      fill='#8B83BA'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
