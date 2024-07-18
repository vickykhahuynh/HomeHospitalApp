import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Notifications.module.css';
import { NotificationsIcon } from './NotificationsIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 616:243 */
export const Notifications: FC<Props> = memo(function Notifications(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <NotificationsIcon className={classes.icon2} />}</div>
    </div>
  );
});
