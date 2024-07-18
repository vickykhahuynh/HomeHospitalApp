import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './StatusActive.module.css';

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
    active?: ReactNode;
  };
}
/* @figmaId 637:288 */
export const StatusActive: FC<Props> = memo(function StatusActive(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle67 || ''} ${classes.rectangle67}`}></div>
      {props.text?.active != null ? props.text?.active : <div className={classes.active}>Active</div>}
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon} />}</div>
    </div>
  );
});
