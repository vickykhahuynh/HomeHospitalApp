import React, { FC, memo, useState } from 'react';
import type { ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './YesNoQ.module.css';

interface Props {
  className?: string;
  classes?: {
    radioNeutralYesFlag?: string;
    radioNeutralNo2?: string;
    root?: string;
  };
  hide?: {
    radioYesRejected?: boolean;
    radioNoRejected?: boolean;
  };
  text?: {
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 638:2054 */
// export const YesNoQ: FC<Props> = memo(function YesNoQ(props = {}) {
//   return (
//     <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
//       <div className={classes.rectangle84}></div>
//       <div className={classes.frame13}>
//         {props.hide?.radioNeutralYesFlag === false && (
//           <RadioNeutralYesFlag className={props.classes?.radioNeutralYesFlag || ''} />
//         )}
//         {props.hide?.radioNeutralNo === false && <RadioNeutralNo className={props.classes?.radioNeutralNo2 || ''} />}
//         {!props.hide?.radioNeutralYes && <RadioNeutralYes className={classes.radioNeutralYes} />}
//         {!props.hide?.radioNeutralNoFlag && <RadioNeutralNoFlag className={classes.radioNeutralNoFlag} />}
//       </div>
//       {props.hide?.flagged && (
//         <div>
//           <div className={classes.rectangle195}></div>
//           <div className={classes.rectangle98}></div>
//           <div className={classes.frame30}>
//             <RadioActiveFlagged className={classes.radioActiveFlagged} />
//             <RadioNeutralNo className={classes.radioNeutralNo} />
//           </div>
//         </div>
//       )}
//       {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
//         props.text?.loremIpsumDolorSitAmetConsecte
//       ) : (
//         <div className={classes.loremIpsumDolorSitAmetConsecte}>
//           <ol className={classes.list}>
//             <li>
//               <div className={classes.textBlock}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc,
//                 adipiscing vitae. Ultricies suspendisse vestibulum.
//               </div>
//             </li>
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// });

export const YesNoQ: FC<Props> = memo(function YesNoQ(props) {
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
          {/* Rest of your component */}
          {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
            <div className={classes.frameQ} >{props.text?.loremIpsumDolorSitAmetConsecte}</div>
          ) : (
            <div className={classes.loremIpsumDolorSitAmetConsecte}>
              <div className={classes.textBlock}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc,
                adipiscing vitae. Ultricies suspendisse vestibulum.
              </div>
            </div>
          )}
        <div className={classes.frame13} >
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