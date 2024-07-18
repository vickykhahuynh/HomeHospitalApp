import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Stars.module.css';
import { StarsIcon } from './StarsIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 616:361 */
export const Stars: FC<Props> = memo(function Stars(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <StarsIcon className={classes.icon2} />}</div>
    </div>
  );
});
