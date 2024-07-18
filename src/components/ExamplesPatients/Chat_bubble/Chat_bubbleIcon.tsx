import { memo, SVGProps } from 'react';

const Chat_bubbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.19209e-07 20V2C-1.19209e-07 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 -1.19209e-07 2 -1.19209e-07H18C18.55 -1.19209e-07 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L-1.19209e-07 20ZM3.15 14H18V2H2V15.125L3.15 14Z'
      fill='#1D1B20'
    />
  </svg>
);

const Memo = memo(Chat_bubbleIcon);
export { Memo as Chat_bubbleIcon };
