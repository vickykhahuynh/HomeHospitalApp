import React, { FC, memo, useState } from 'react';
import type { ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './MCQ.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    radioYesRejected?: boolean;
    radioNoRejected?: boolean;
  };
  text?: {
    optionList?: ReactNode[];
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 640:1380 */
export const MCQ: FC<Props> = memo(function MCQ(props) {
  const yesRadioClass = props.hide?.radioYesRejected ? `${classes.radioOption} ${classes.radioOptionRed}` : classes.radioOption;
  const noRadioClass = props.hide?.radioNoRejected ? `${classes.radioOption} ${classes.radioOptionRed}` : classes.radioOption;
  const [divClass, setDivClass] = useState(classes.qContent);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    
    if (option === 'yes' && props.hide?.radioYesRejected) {
      setDivClass(`${classes.qContent} ${classes.qContentRed}`);
    } else if (option === 'no' && props.hide?.radioNoRejected) {
      setDivClass(`${classes.qContent} ${classes.qContentRed}`);
    } else {
      setDivClass(classes.qContent); // Default class if conditions are not met
    }
  };
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle84}></div>
      <div className={divClass}>
        <div className={classes.frame13}>
          <div className={classes.textBlock}>
            {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
              props.text?.loremIpsumDolorSitAmetConsecte
            ) : ("Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            )}
          </div>
          <div className={classes.checkBoxDiv}>
            {props.text?.optionList?.map((optionText, index) => (
              <div key={index} className={classes.checkboxNeutral}>
                <input
                  type="checkbox"
                  // id={`option_${index}`} // Provide a unique id for each checkbox
                  className={classes.checkbox} // Apply custom styling class if needed
                />
                <label>{optionText}</label>
              </div>
            ))}
          </div>
        </div>
      <div className={classes.frame18}>
        {/* <RadioNeutralYesFlag className={classes.radioNeutralYesFlag} />
        <RadioNeutralNo className={classes.radioNeutralNo} /> */}
        <label className={yesRadioClass}>Yes
          <input
            type="radio"
            // id="yes"
            // name="yesNoQ"
            checked={selectedOption === 'yes'}
            onChange={() => handleOptionChange('yes')}
            // className={props.classes?.radioNeutralYesFlag || ''}
          />
        </label>
        <label className={noRadioClass}>No
          <input
            type="radio"
            // id="no"
            // name="yesNoQ"
            checked={selectedOption === 'no'}
            onChange={() => handleOptionChange('no')}
            // className={props.classes?.radioNeutralYesFlag || ''}
          />
        </label>
      </div>
      </div>
    </div>
  );
});
