import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './StatusOverdue.module.css';

interface Props {
  className?: string;
}
/* @figmaId 637:284 */
export const StatusOverdue: FC<Props> = memo(function StatusOverdue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle67}></div>
      <div className={classes.overdue}>Overdue</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon} />
      </div>
    </div>
  );
});
