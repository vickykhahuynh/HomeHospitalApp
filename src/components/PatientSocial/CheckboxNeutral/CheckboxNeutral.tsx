import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckboxNeutral.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    amount?: ReactNode;
  };
}
/* @figmaId 640:1348 */
export const CheckboxNeutral: FC<Props> = memo(function CheckboxNeutral(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.checkboxNeutral}></div>
      {props.text?.amount != null ? props.text?.amount : <div className={classes.amount}>Lorem ipsum</div>}
    </div>
  );
});
