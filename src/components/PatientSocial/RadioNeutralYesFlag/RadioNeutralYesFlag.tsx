import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import classes from './RadioNeutralYesFlag.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 638:2131 */
export const RadioNeutralYesFlag: FC<Props> = memo(function RadioNeutralYesFlag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <RadioNeutralNoFlag
        className={classes.radioNeutralNoFlag}
        text={{
          amount: <div className={classes.amount}>Yes</div>,
        }}
      />
    </div>
  );
});
