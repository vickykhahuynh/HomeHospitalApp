import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { Group66Icon } from './Group66Icon.js';
import classes from './RadioNeutralNoFlag.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    amount?: ReactNode;
  };
}
/* @figmaId 638:2121 */
export const RadioNeutralNoFlag: FC<Props> = memo(function RadioNeutralNoFlag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <RadioNeutralNo
        className={classes.radioNeutralNo}
        swap={{
          group66: <Group66Icon className={classes.icon} />,
        }}
        text={{
          amount: props.text?.amount || <div className={classes.amount}>no</div>,
        }}
      />
    </div>
  );
});
