import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../../PatientSocial/CheckboxNeutral/CheckboxNeutral';
import { RadioActiveFlagged } from '../../PatientSocial/RadioActiveFlagged/RadioActiveFlagged';
import { RadioNeutralNo } from '../../PatientSocial/RadioNeutralNo/RadioNeutralNo';
import { RadioNeutralNoFlag } from '../../PatientSocial/RadioNeutralNoFlag/RadioNeutralNoFlag';
import { RadioNeutralYes } from '../../PatientSocial/RadioNeutralYes/RadioNeutralYes';
import { RadioNeutralYesFlag } from '../../PatientSocial/RadioNeutralYesFlag/RadioNeutralYesFlag';
// import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import { YesNoQ } from '../../PatientSocial/YesNoQ/YesNoQ';
import classes from './MedicalStable.module.css';
import { MCQ } from '../../PatientSocial/MCQ/MCQ';

interface Props {
  className?: string;
}
/* @figmaId 689:6610 */
export const MedicalStable: FC<Props> = memo(function MedicalStable(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.stableChronicConditions}>Stable/ Chronic Conditions</div>
      <div className={classes.frame29}>
        <YesNoQ
          className={classes.yesNoQ}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag, radioNeutralNo2: classes.radioNeutralNo }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                
                   
                    <div className={classes.textBlock}>COPD with unstable severe cardiac comorbidities</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ2}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag2, radioNeutralNo2: classes.radioNeutralNo2 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                 
                   
                    <div className={classes.textBlock2}>Arterial blood gas measurements required</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ3}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag3, radioNeutralNo2: classes.radioNeutralNo3 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                 
                   
                    <div className={classes.textBlock3}>Required cardiac monitoring or intensive care</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ4}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag4, radioNeutralNo2: classes.radioNeutralNo4 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                 
                   
                    <div className={classes.textBlock4}>Need for mechanical ventilation</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ5}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag5, radioNeutralNo2: classes.radioNeutralNo5 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                 
                   
                    <div className={classes.textBlock5}>On methadone requiring daily pickup of medication</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ6}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag6, radioNeutralNo2: classes.radioNeutralNo6 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte6}>
                 
                   
                    <div className={classes.textBlock6}>Active drug abuse</div>
                   
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ7}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag7, radioNeutralNo2: classes.radioNeutralNo7 }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte7}>
                 
                   
                    <div className={classes.textBlock7}>Active drug abuse</div>
                   
                
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ2}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "Active nonmelanoma",
              "Prostate cancer",
              "End-stage renal disease",
              "Acute myocardial infarction",
              "Acute cerebral vascular accident",
              "Acute hemorrhage",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Secondary condition"
            ),
          }}
        />
        <MCQ
          className={classes.mCQ2}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "AIDS",
              "Neutropenia",
              "Organ transplant with immunosuppressive therapy",
              "Chemotherapy or cytotoxic drug use",
              "Multiple myeloma",
              "Lymphoma",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Severe immunosuppression (not auto reject, need to be discussed with the medical team)"
            ),
          }}
        />
      </div>
    </div>
  );
});
