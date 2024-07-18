import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MCQ } from '../MCQ/MCQ.js';
import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import classes from './Social.module.css';

interface Props {
  className?: string;
  hide?: {
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
    flagged?: boolean;
    radioNeutralYesFlag4?: boolean;
    radioNeutralNo4?: boolean;
    radioNeutralYes4?: boolean;
    radioNeutralNoFlag4?: boolean;
    radioNeutralYesFlag5?: boolean;
    radioNeutralNo5?: boolean;
    radioNeutralYes5?: boolean;
    radioNeutralNoFlag5?: boolean;
    flagged2?: boolean;
    radioNeutralNo6?: boolean;
    radioNeutralNoFlag6?: boolean;
    checkboxNeutral?: boolean;
  };
}
/* @figmaId 689:4679 */
export const Social: FC<Props> = memo(function Social(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.frame27}>
        <YesNoQ
          className={classes.yesNoQ}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag, radioNeutralNo2: classes.radioNeutralNo }}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                
                  
                    <div className={classes.textBlock}>Do you have plans to move in the next 5 days?</div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ2}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag2, radioNeutralNo2: classes.radioNeutralNo2 }}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                
                  
                    <div className={classes.textBlock2}>
                      Do you have plans to move to a Skilled Nursing Facility or Nursing Home in the next 30 days?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ3}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag3, radioNeutralNo2: classes.radioNeutralNo3 }}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                
                  
                    <div className={classes.textBlock3}>Are you planning to travel in the next 30 days?</div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ4}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                
                  
                    <div className={classes.textBlock4}>
                      If traveling in the next 30 days, will you be able to accept follow up phone calls from your
                      Recovery Care Coordinator?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ5}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag4, radioNeutralNo2: classes.radioNeutralNo4 }}
          hide={{
            // radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                
                  
                    <div className={classes.textBlock5}>
                      Are there any special instructions for getting into your home?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          text={{
            optionList: [
              "Wheelchair",
              "Cane",
              "Transfer Bench",
              "Bedside Commode",
            ],
            loremIpsumDolorSitAmetConsecte: "Do you use any durable medical equipment to help you in your home?"
          }}
        />
        <YesNoQ
          className={classes.yesNoQ6}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag5, radioNeutralNo2: classes.radioNeutralNo5 }}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte7}>
                
                  
                    <div className={classes.textBlock7}>
                      Do you or anyone in your home use or is involved in the selling of recreational/illicit drugs?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ6}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag5, radioNeutralNo2: classes.radioNeutralNo5 }}
          hide={{
            radioNoRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte7}>
                
                  
                    <div className={classes.textBlock7}>
                      Are you comfortable with health care professionals making multiple daily visits to your home? This
                      includes but is not limited to nurses, x-ray technicians, or EMTs.
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ8}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte9}>
                
                  
                    <div className={classes.textBlock9}>
                      If other people live in your home, are they comfortable with health care professionals making
                      multiple daily visits to your home?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ9}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte10}>
                
                  
                    <div className={classes.textBlock10}>
                      Do you have a working home telephone or mobile phone available 24/7 with which you could call the
                      Hospital at Home team in case of an emergency?
                    </div>
                  
                
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ10}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte11}>
                
                  
                    <div className={classes.textBlock11}>Does your home have:</div>
                  
                
                <ul className={classes.list12}>
                  
                    <div className={classes.textBlock12}>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label}>Electricity</span>
                      </p>
                    </div>
                  
                  
                    <div className={classes.textBlock13}>Running water</div>
                  
                  
                    <div className={classes.textBlock14}>Access to refrigeration</div>
                  
                </ul>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ11}
          classes={{ radioNeutralNo2: classes.radioNeutralNo6 }}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte12}>
                
                  
                    <div className={classes.textBlock15}>Do you live alone?</div>
                  
                
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ2}
          hide={{
            radioNoRejected: true,
          }}
          text={{
            optionList: [
              "Over 18-year-old",
              "Can support you daily activities",
              "Be able to answer medical calls",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "If you are not living alone, is the person living with you:"
            ),
          }}
        />
      </div>
    </div>
  );
});
