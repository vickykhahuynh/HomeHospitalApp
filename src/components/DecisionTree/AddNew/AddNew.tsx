import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AddNew.module.css';

interface Props {
  className?: string;
}
/* @figmaId 901:79516 */
export const AddNew: FC<Props> = memo(function AddNew(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle105}></div>
      <div className={classes.frame14}>
        <div className={classes.line2}></div>
      </div>
      <div className={classes.addNew}>Add New</div>
      <div className={classes.rectangle106}></div>
      <div className={classes.rectangle107}></div>
    </div>
  );
});
