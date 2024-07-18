import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CommentFrame } from './CommentFrame/CommentFrame.js';
import classes from './PatientSocial.module.css';
import { Social } from './Social/Social.js';

interface Props {
  className?: string;
  hide?: {
    flagged?: boolean;
    radioNeutralYesFlag?: boolean;
    radioNeutralNo?: boolean;
    radioNeutralYes?: boolean;
    radioNeutralNoFlag?: boolean;
    radioNeutralYesFlag2?: boolean;
    radioNeutralNo2?: boolean;
    radioNeutralYes2?: boolean;
    radioNeutralNoFlag2?: boolean;
    radioNeutralYesFlag3?: boolean;
    radioNeutralNo3?: boolean;
    radioNeutralYes3?: boolean;
    radioNeutralNoFlag3?: boolean;
    flagged2?: boolean;
    radioNeutralYesFlag4?: boolean;
    radioNeutralNo4?: boolean;
    radioNeutralYes4?: boolean;
    radioNeutralNoFlag4?: boolean;
    radioNeutralYesFlag5?: boolean;
    radioNeutralNo5?: boolean;
    radioNeutralYes5?: boolean;
    radioNeutralNoFlag5?: boolean;
    flagged3?: boolean;
    radioNeutralNo6?: boolean;
    radioNeutralNoFlag6?: boolean;
    checkboxNeutral?: boolean;
  };
  setCurrentView: (view: string) => void;
}
/* @figmaId 863:5842 */
export const PatientSocial: FC<Props> = memo(function PatientSocial(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle197}></div>
      <div className={classes.details}>
        <div className={classes.frame25}>
          <div className={classes.done}>DONE</div>
          <div className={classes.frame26}>
            <div className={classes.group92}>
              {/* <div className={classes.socialConditions}>Social Conditions</div> */}
              <a href="#" className={classes.socialConditions} onClick={() => props.setCurrentView('showSocial')}>
                Social Conditions
              </a>
              <div className={classes.rectangle103}></div>
            </div>
            {/* <div className={classes.generalMedicalConditions}>General Medical Conditions</div> */}
            <a href="#" className={classes.generalMedicalConditions} onClick={() => props.setCurrentView('showGeneralMedical')}>
              General Medical Conditions
            </a>
            <div className={classes.diagnosticConditions}>Diagnostic Conditions</div>
          </div>
        </div>
        <CommentFrame />
        <Social />
      </div>
    </div>
  );
});
