import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckboxNeutral.module.css';

interface Props {
  className?: string;
  classes?: {
    checkboxNeutral?: string;
    root?: string;
  };
}
/* @figmaId 637:275 */
export const CheckboxNeutral: FC<Props> = memo(function CheckboxNeutral(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.checkboxNeutral || ''} ${classes.checkboxNeutral}`}></div>
    </div>
  );
});
