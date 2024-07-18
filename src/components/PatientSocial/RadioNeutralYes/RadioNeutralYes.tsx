import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import classes from './RadioNeutralYes.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 638:2132 */
export const RadioNeutralYes: FC<Props> = memo(function RadioNeutralYes(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <RadioNeutralNo
        className={classes.radioNeutralNo}
        text={{
          amount: <div className={classes.amount}>Yes</div>,
        }}
      />
    </div>
  );
});
