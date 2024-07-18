import React, { FC, memo, useState } from 'react';
import type { ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './Comments.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    title?: ReactNode;
  };
}
/* @figmaId 650:1635 */
export const Comments: FC<Props> = memo(function Comments(props = {}) {
  const [divClass, setDivClass] = useState(classes.qContent);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    {option === 'reject' ? setDivClass(`${classes.qContent} ${classes.qContentRed}`) : setDivClass(classes.qContent) }
  };

  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={divClass}>
        {/* {props.hide?.flagged && (
          <div>
            <div className={classes.rectangle195}></div>
            <div className={classes.rectangle98}></div>
            <div className={classes.frame31}>
              <RadioNeutralNo className={classes.radioNeutralNo2} />
              <RadioActiveFlagged className={classes.radioActiveFlagged} />
            </div>
          </div>
        )} */}
        
        <div className={classes.frame13}>
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            {props.text?.title != null ? (
              props.text.title
            ) : (
              "Title"
            )}
          </div>
          <div  className={classes.divComment}>
            <textarea
              className={classes.commentArea}
              placeholder="Click to insert text"
            />
          </div>
        </div>
        <div className={classes.frame19}>
          <label className={classes.radioOption}>Accept
            <input
              type="radio"
              // id="yes"
              // name="yesNoQ"
              checked={selectedOption === 'accept'}
              onChange={() => handleOptionChange('accept')}
              // className={props.classes?.radioNeutralYesFlag || ''}
            />
          </label>
          <label className={`${classes.radioOption} ${classes.radioOptionRed}`}>Reject
            <input
              type="radio"
              // id="no"
              // name="yesNoQ"
              checked={selectedOption === 'reject'}
              onChange={() => handleOptionChange('reject')}
              // className={props.classes?.radioNeutralYesFlag || ''}
            />
          </label>
        </div>
      </div>
    </div>
  );
});
