import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Edit } from '../Edit/Edit.js';
import classes from './FAB_StyleTertiaryStateEnabled.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 616:386 */
export const FAB_StyleTertiaryStateEnabled: FC<Props> = memo(function FAB_StyleTertiaryStateEnabled(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.stateLayer}>
        <Edit
          swap={{
            icon: <Icon className={classes.icon} />,
          }}
        />
      </div>
    </div>
  );
});
