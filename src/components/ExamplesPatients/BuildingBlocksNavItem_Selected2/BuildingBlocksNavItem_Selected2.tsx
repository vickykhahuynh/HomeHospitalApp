import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Stars } from '../Stars/Stars.js';
import classes from './BuildingBlocksNavItem_Selected2.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 616:456 */
export const BuildingBlocksNavItem_Selected2: FC<Props> = memo(function BuildingBlocksNavItem_Selected2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.stateLayer}>
          {props.swap?.icon || (
            <Stars
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
    </div>
  );
});
