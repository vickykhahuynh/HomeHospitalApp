import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './StatusInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle67?: string;
    root?: string;
  };
  swap?: {
    ellipse2?: ReactNode;
  };
  text?: {
    inactive?: ReactNode;
  };
}
/* @figmaId 650:2389 */
export const StatusInactive: FC<Props> = memo(function StatusInactive(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle67 || ''} ${classes.rectangle67}`}></div>
      {props.text?.inactive != null ? props.text?.inactive : <div className={classes.inactive}>Inactive</div>}
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon} />}</div>
    </div>
  );
});
