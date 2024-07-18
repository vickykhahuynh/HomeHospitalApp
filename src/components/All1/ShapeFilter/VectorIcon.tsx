import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 12L20 4V0H0V4L8 12V20L12 16V12Z' fill='black' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
