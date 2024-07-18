import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Account_circle } from './Account_circle/Account_circle.js';
import { AddNew } from './AddNew/AddNew.js';
import classes from './DecisionTree.module.css';
import { Icon } from './Icon.js';
import { IconButton_StyleStandardStateE } from './IconButton_StyleStandardStateE/IconButton_StyleStandardStateE.js';
import { Master } from './Master/Master.js';
import { Notifications } from './Notifications/Notifications.js';

interface Props {
  className?: string;
  setCurrentView: (view: string) => void;
}
/* @figmaId 901:148030 */
export const DecisionTree: FC<Props> = memo(function DecisionTree(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.topAppBar}>
        <div className={classes.leadingTrailingIcons}>
          <div className={classes.leadingIcon}>
            <div className={classes.container}>
              <div className={classes.stateLayer}>
                <Account_circle />
              </div>
            </div>
            <div className={classes.hExxxxxx}>HExxxxxx</div>
          </div>
          <div className={classes.trailingIcon}>
            <IconButton_StyleStandardStateE
              swap={{
                icon: (
                  <Notifications
                    swap={{
                      icon: <Icon className={classes.icon} />,
                    }}
                  />
                ),
              }}
            />
            <IconButton_StyleStandardStateE />
          </div>
        </div>
      </div>
      <div className={classes.decisionTrees}>Decision Trees</div>
      <div className={classes.divider}>
        <div className={classes.line1}></div>
      </div>
      <div className={classes.trees}>
        <div className={classes.frame36}>
          <Master 
            classes={{ line3: classes.line3 }}
            text={{name: <a href='#' onClick={() => props.setCurrentView('showTree')} className={classes.name2}>Master</a>}}
          />
          <Master
            classes={{ line3: classes.line32 }}
            text={{
              _5: <div className={classes._5}>4%</div>,
              _25Mins: <div className={classes._25Mins}>27 mins</div>,
              _472024: <div className={classes._472024}>08/07/2024</div>,
              theHIVETeam: <div className={classes.theHIVETeam}>heXXXXXX</div>,
              theMasterDecisionTreeCurrently: (
                <div className={classes.theMasterDecisionTreeCurrently}>Accurate asthma criteria changes</div>
              ),
              // name: <div className={classes.name}>Asthma Changes</div>,
              name: <a href='#' onClick={() => props.setCurrentView('showTree')} className={classes.name2}>Asthma Changes</a>
            }}
          />
          <Master
            classes={{ line3: classes.line33 }}
            text={{
              _5: <div className={classes._52}>2%</div>,
              _25Mins: <div className={classes._25Mins2}>35 mins</div>,
              _472024: <div className={classes._4720242}>10/07/2024</div>,
              theHIVETeam: <div className={classes.theHIVETeam2}>heXXXXXX</div>,
              theMasterDecisionTreeCurrently: (
                <div className={classes.theMasterDecisionTreeCurrently2}>More rigorous social criteria</div>
              ),
              name: <a href='#' onClick={() => props.setCurrentView('showTree')} className={classes.name2}>Social Criteria Edits</a>,
            }}
          />
          <AddNew />
        </div>
      </div>
    </div>
  );
});
