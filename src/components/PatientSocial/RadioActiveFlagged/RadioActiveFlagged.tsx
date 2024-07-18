import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './RadioActiveFlagged.module.css';
import { RadioIcon } from './RadioIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 638:2071 */
export const RadioActiveFlagged: FC<Props> = memo(function RadioActiveFlagged(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.radio}>
        <RadioIcon className={classes.icon} />
      </div>
      <div className={classes.amount}>yes</div>
    </div>
  );
});
