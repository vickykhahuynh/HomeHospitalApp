import { memo, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.30558 4.84415L0.650513 0.275312H7.96065L4.30558 4.84415Z' fill='#6E6893' />
  </svg>
);

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
