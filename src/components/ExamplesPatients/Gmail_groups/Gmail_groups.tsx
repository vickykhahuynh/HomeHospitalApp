import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Gmail_groups.module.css';
import { Gmail_groupsIcon } from './Gmail_groupsIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 616:702 */
export const Gmail_groups: FC<Props> = memo(function Gmail_groups(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Gmail_groupsIcon className={classes.icon2} />}</div>
    </div>
  );
});
