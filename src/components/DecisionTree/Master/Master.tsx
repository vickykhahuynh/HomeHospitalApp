import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Master.module.css';

interface Props {
  className?: string;
  classes?: {
    line3?: string;
  };
  text?: {
    _5?: ReactNode;
    _25Mins?: ReactNode;
    _472024?: ReactNode;
    theHIVETeam?: ReactNode;
    theMasterDecisionTreeCurrently?: ReactNode;
    name?: ReactNode;
  };
}
/* @figmaId 901:79450 */
export const Master: FC<Props> = memo(function Master(props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle105}></div>
      <div className={classes.stats}>
        <div className={classes.percentageOfPatients}>
          {props.text?._5 != null ? props.text?._5 : <div className={classes._5}>5%</div>}
          <div className={classes.percentageOfPatients2}>Percentage of Patients Eligible</div>
        </div>
        <div className={classes.averageTime}>
          {props.text?._25Mins != null ? props.text?._25Mins : <div className={classes._25Mins}>25 mins</div>}
          <div className={classes.averageTime2}>Average Time</div>
        </div>
        <div className={classes.createdBy}>
          {props.text?._472024 != null ? props.text?._472024 : <div className={classes._472024}>04/07/2024</div>}
          <div className={classes.date}>Date</div>
        </div>
        <div className={classes.createdBy2}>
          {props.text?.theHIVETeam != null ? (
            props.text?.theHIVETeam
          ) : (
            <div className={classes.theHIVETeam}>The HIVE Team</div>
          )}
          <div className={classes.createdBy3}>Created by</div>
        </div>
        <div className={classes.details}>
          {props.text?.theMasterDecisionTreeCurrently != null ? (
            props.text?.theMasterDecisionTreeCurrently
          ) : (
            <div className={classes.theMasterDecisionTreeCurrently}>The master decision tree currently in use</div>
          )}
          <div className={classes.details2}>Details</div>
        </div>
        <div className={`${props.classes?.line3 || ''} ${classes.line3}`}></div>
      </div>
      <div className={classes.frame14}>
        <div className={classes.line2}></div>
      </div>
      {props.text?.name != null ? props.text?.name : <div className={classes.name}>Master</div>}
    </div>
  );
});
