import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ShapeMore.module.css';
import { ShapeMoreIcon } from './ShapeMoreIcon.js';

interface Props {
  className?: string;
  classes?: {
    shapeMore?: string;
    root?: string;
  };
  swap?: {
    shapeMore?: ReactNode;
  };
}
/* @figmaId 637:293 */
export const ShapeMore: FC<Props> = memo(function ShapeMore(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.shapeMore || ''} ${classes.shapeMore}`}>
        {props.swap?.shapeMore || <ShapeMoreIcon className={classes.icon} />}
      </div>
    </div>
  );
});
