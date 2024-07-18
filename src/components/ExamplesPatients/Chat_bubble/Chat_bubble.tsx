import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Chat_bubble.module.css';
import { Chat_bubbleIcon } from './Chat_bubbleIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 616:700 */
export const Chat_bubble: FC<Props> = memo(function Chat_bubble(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Chat_bubbleIcon className={classes.icon2} />}</div>
    </div>
  );
});
