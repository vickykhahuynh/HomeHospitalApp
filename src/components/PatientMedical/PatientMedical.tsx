import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
// import { CommentFrame } from './CommentFrame/CommentFrame.js';
import { CommentFrame } from '../PatientSocial/CommentFrame/CommentFrame.js';
import { MedicalAcute } from './MedicalAcute/MedicalAcute.js';
import { MedicalStable } from './MedicalStable/MedicalStable.js';
import classes from './PatientMedical.module.css';

interface Props {
  className?: string;
  hide?: {
    flagged?: boolean;
    radioNeutralYesFlag?: boolean;
    radioNeutralNo?: boolean;
    radioNeutralYes?: boolean;
    radioNeutralNoFlag?: boolean;
    flagged2?: boolean;
    radioNeutralYesFlag2?: boolean;
    radioNeutralNo2?: boolean;
    radioNeutralYes2?: boolean;
    radioNeutralNoFlag2?: boolean;
    radioNeutralYesFlag3?: boolean;
    radioNeutralNo3?: boolean;
    radioNeutralYes3?: boolean;
    radioNeutralNoFlag3?: boolean;
    radioNeutralYesFlag4?: boolean;
    radioNeutralNo4?: boolean;
    radioNeutralYes4?: boolean;
    radioNeutralNoFlag4?: boolean;
    radioNeutralYesFlag5?: boolean;
    radioNeutralNo5?: boolean;
    radioNeutralYes5?: boolean;
    radioNeutralNoFlag5?: boolean;
    flagged3?: boolean;
    radioNeutralYesFlag6?: boolean;
    radioNeutralNo6?: boolean;
    radioNeutralYes6?: boolean;
    radioNeutralNoFlag6?: boolean;
    radioNeutralYesFlag7?: boolean;
    radioNeutralNo7?: boolean;
    radioNeutralYes7?: boolean;
    radioNeutralNoFlag7?: boolean;
    radioNeutralYesFlag8?: boolean;
    radioNeutralNo8?: boolean;
    radioNeutralYes8?: boolean;
    radioNeutralNoFlag8?: boolean;
    radioNeutralYesFlag9?: boolean;
    radioNeutralNo9?: boolean;
    radioNeutralYes9?: boolean;
    radioNeutralNoFlag9?: boolean;
    flagged4?: boolean;
    radioNeutralYesFlag10?: boolean;
    radioNeutralNo10?: boolean;
    radioNeutralYes10?: boolean;
    radioNeutralNoFlag10?: boolean;
    radioNeutralYesFlag11?: boolean;
    radioNeutralNo11?: boolean;
    radioNeutralYes11?: boolean;
    radioNeutralNoFlag11?: boolean;
    radioNeutralYesFlag12?: boolean;
    radioNeutralNo12?: boolean;
    radioNeutralYes12?: boolean;
    radioNeutralNoFlag12?: boolean;
  };
  setCurrentView: (view: string) => void;
}
/* @figmaId 863:7629 */
export const PatientMedical: FC<Props> = memo(function PatientMedical(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle197}></div>
      <div className={classes.details}>
        <div className={classes.frame25}>
          <div className={classes.done}>DONE</div>
          <div className={classes.frame26}>
            {/* <div className={classes.socialConditions}>Social Conditions</div> */}
            <a href="#" className={classes.socialConditions} onClick={() => props.setCurrentView('showSocial')}>
              Social Conditions
            </a>
            <div className={classes.group92}>
              {/* <div className={classes.generalMedicalConditions}>General Medical Conditions</div> */}
              <a href="#" className={classes.generalMedicalConditions} onClick={() => props.setCurrentView('showGeneralMedical')}>
                General Medical Conditions
              </a>
              <div className={classes.rectangle103}></div>
            </div>
            <div className={classes.diagnosticConditions}>Diagnostic Conditions</div>
          </div>
        </div>
        <CommentFrame />
        <MedicalAcute />
        <MedicalStable />
      </div>
    </div>
  );
});
