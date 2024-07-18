import { memo, SVGProps } from 'react';

const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.9999 3.99961L10.5899 5.40961L16.1699 10.9996H3.9999V12.9996H16.1699L10.5899 18.5896L11.9999 19.9996L19.9999 11.9996L11.9999 3.99961Z'
      fill='#79747E'
    />
  </svg>
);

const Memo = memo(ForwardIcon);
export { Memo as ForwardIcon };
