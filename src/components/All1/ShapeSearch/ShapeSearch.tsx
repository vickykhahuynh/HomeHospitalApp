import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ShapeSearch.module.css';
import { ShapeSearchIcon } from './ShapeSearchIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shapeSearch?: ReactNode;
  };
}
/* @figmaId 650:2375 */
export const ShapeSearch: FC<Props> = memo(function ShapeSearch(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.shapeSearch}>
        {props.swap?.shapeSearch || <ShapeSearchIcon className={classes.icon} />}
      </div>
    </div>
  );
});
