import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Group66Icon } from './Group66Icon.js';
import classes from './RadioNeutralNo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group66?: ReactNode;
  };
  text?: {
    amount?: ReactNode;
  };
}
/* @figmaId 638:2068 */
export const RadioNeutralNo: FC<Props> = memo(function RadioNeutralNo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group66}>{props.swap?.group66 || <Group66Icon className={classes.icon} />}</div>
      {props.text?.amount != null ? props.text?.amount : <div className={classes.amount}>no</div>}
    </div>
  );
});
