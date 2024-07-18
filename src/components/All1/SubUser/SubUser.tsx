import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SubUser.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle84?: string;
    root?: string;
  };
  text?: {
    _12APR2020?: ReactNode;
    loremIpsumDolorSitAmetConsecte?: ReactNode;
    loremIpsumDolorSitAmetConsecte2?: ReactNode;
  };
}
/* @figmaId 650:2367 */
export const SubUser: FC<Props> = memo(function SubUser(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle84 || ''} ${classes.rectangle84}`}></div>
      <div className={classes.frame13}>
        {props.text?._12APR2020 != null ? (
          props.text?._12APR2020
        ) : (
          <div className={classes._12APR2020}>12/APR/2020</div>
        )}
        {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
          props.text?.loremIpsumDolorSitAmetConsecte
        ) : (
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.
          </div>
        )}
        {props.text?.loremIpsumDolorSitAmetConsecte2 != null ? (
          props.text?.loremIpsumDolorSitAmetConsecte2
        ) : (
          <div className={classes.loremIpsumDolorSitAmetConsecte2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc,
            adipiscing vitae. Ultricies suspendisse vestibulum.
          </div>
        )}
      </div>
    </div>
  );
});
