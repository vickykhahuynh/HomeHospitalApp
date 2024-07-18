import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Mail.module.css';
import { MailIcon } from './MailIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 616:435 */
export const Mail: FC<Props> = memo(function Mail(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <MailIcon className={classes.icon2} />}</div>
    </div>
  );
});
