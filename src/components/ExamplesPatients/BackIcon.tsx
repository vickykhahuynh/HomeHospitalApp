import { memo, SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.9999 10.9996H7.8299L13.4199 5.40961L11.9999 3.99961L3.9999 11.9996L11.9999 19.9996L13.4099 18.5896L7.8299 12.9996H19.9999V10.9996Z'
      fill='#79747E'
    />
  </svg>
);

const Memo = memo(BackIcon);
export { Memo as BackIcon };
