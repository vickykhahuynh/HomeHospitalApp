import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconMaster.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    union?: string;
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 637:277 */
export const IconMaster: FC<Props> = memo(function IconMaster(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.union || ''} ${classes.union}`}>
        {props.swap?.union || <UnionIcon className={classes.icon} />}
      </div>
    </div>
  );
});
