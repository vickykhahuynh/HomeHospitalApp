import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
// import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';
// import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
// import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
// import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
// import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
// import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
// import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import classes from './MedicalAcute.module.css';
import { RadioIcon } from './RadioIcon.js';

import { CheckboxNeutral } from '../../PatientSocial/CheckboxNeutral/CheckboxNeutral';
import { RadioActiveFlagged } from '../../PatientSocial/RadioActiveFlagged/RadioActiveFlagged';
import { RadioNeutralNo } from '../../PatientSocial/RadioNeutralNo/RadioNeutralNo';
import { RadioNeutralNoFlag } from '../../PatientSocial/RadioNeutralNoFlag/RadioNeutralNoFlag';
import { RadioNeutralYes } from '../../PatientSocial/RadioNeutralYes/RadioNeutralYes';
import { RadioNeutralYesFlag } from '../../PatientSocial/RadioNeutralYesFlag/RadioNeutralYesFlag';
import { YesNoQ } from '../../PatientSocial/YesNoQ/YesNoQ';
import { MCQ } from '../../PatientSocial/MCQ/MCQ';

interface Props {
  className?: string;
}
/* @figmaId 689:6561 */
export const MedicalAcute: FC<Props> = memo(function MedicalAcute(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.acuteAndModifiableConditions}>Acute and Modifiable Conditions</div>
      <div className={classes.frame28}>
        <YesNoQ
          className={classes.yesNoQ}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag, radioNeutralNo2: classes.radioNeutralNo }}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                    <div className={classes.textBlock}>Acute delirium</div>
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
                
                  
                    <div className={classes.textBlock2}>
                      Hypoxemia with oxygen saturation &lt; 90% or PO2 &lt; 60 mm Hg uncorrected with &lt; 6 liters per
                      minute oxygen supplementation by nasal cannula
                    </div>
                  
                
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
                
                  
                    <div className={classes.textBlock3}>
                      Bronchodilator (nebulizer) treatments required every 2 hours or more frequently
                    </div>
                  
                
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
                
                  
                    <div className={classes.textBlock4}>Septic shock</div>
                  
                
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
                
                  
                    <div className={classes.textBlock5}>
                      Requirement for monitoring more frequent than every 2 hours
                    </div>
                  
                
              </div>
            )
          }}
        />
        <MCQ
          className={classes.mCQ2}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "Computed tomography",
              "Magnetic resonance imaging",
              "Endoscopic procedure",
              "Blood transfusion",
              "Cardiac stress test",
              "Surgery",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Require any of the following procedures:"
            ),
          }}
        />
      </div>
    </div>
  );
});
