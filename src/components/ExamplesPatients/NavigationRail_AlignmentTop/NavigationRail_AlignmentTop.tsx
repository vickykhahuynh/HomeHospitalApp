import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksNavItem_Selected2 } from '../BuildingBlocksNavItem_Selected2/BuildingBlocksNavItem_Selected2.js';
import { BuildingBlocksNavItem_Selected } from '../BuildingBlocksNavItem_Selected/BuildingBlocksNavItem_Selected.js';
import { Chat_bubble } from '../Chat_bubble/Chat_bubble.js';
import { FAB_StyleTertiaryStateEnabled } from '../FAB_StyleTertiaryStateEnabled/FAB_StyleTertiaryStateEnabled.js';
import { Gmail_groups } from '../Gmail_groups/Gmail_groups.js';
import { IconButton_StyleStandardStateE } from '../IconButton_StyleStandardStateE/IconButton_StyleStandardStateE.js';
import { Mail } from '../Mail/Mail.js';
import { Menu } from '../Menu/Menu.js';
import { Videocam } from '../Videocam/Videocam.js';
import { Icon2 } from './Icon2.js';
import { Icon3 } from './Icon3.js';
import { Icon4 } from './Icon4.js';
import { Icon5 } from './Icon5.js';
import { Icon } from './Icon.js';
import classes from './NavigationRail_AlignmentTop.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    icon2?: ReactNode;
    icon3?: ReactNode;
    icon4?: ReactNode;
  };
  hide?: {
    fABElevationOverride?: boolean;
  };
  text?: {
    label?: ReactNode;
    label2?: ReactNode;
    label3?: ReactNode;
    label4?: ReactNode;
  };
  currentNav?: string;
}
/* @figmaId 616:707 */
export const NavigationRail_AlignmentTop: FC<Props> = memo(function NavigationRail_AlignmentTop(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.menuFab}>
        <IconButton_StyleStandardStateE
          className={classes.menu}
          swap={{
            icon: (
              <Menu
                swap={{
                  icon: <Icon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
        {!props.hide?.fABElevationOverride && (
          <div className={classes.fABElevationOverride}>
            <FAB_StyleTertiaryStateEnabled className={classes.fAB} />
          </div>
        )}
      </div>
      <div className={classes.destinations}>
        {props.currentNav === 'navPatient' ? (
        <BuildingBlocksNavItem_Selected
          className={classes.navItem1}
          swap={{
            icon: props.swap?.icon || (
              <Mail
                swap={{
                  icon: <Icon2 className={classes.icon2} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label || <div className={classes.label}>Mail</div>,
          }}
        />) :(
          <BuildingBlocksNavItem_Selected2
          className={classes.navItem1}
          swap={{
            icon: props.swap?.icon || (
              <Mail
                swap={{
                  icon: <Icon2 className={classes.icon2} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label || <div className={classes.label}>Mail</div>,
          }}
        />
        )}
        {props.currentNav === 'navDecisionTree' ? (
        <BuildingBlocksNavItem_Selected
          className={classes.navItem2}
          swap={{
            icon: props.swap?.icon2 || (
              <Chat_bubble
                swap={{
                  icon: <Icon3 className={classes.icon3} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label2 || <div className={classes.label2}>Chat</div>,
          }}
        />) : (
          <BuildingBlocksNavItem_Selected2
          className={classes.navItem2}
          swap={{
            icon: props.swap?.icon2 || (
              <Chat_bubble
                swap={{
                  icon: <Icon3 className={classes.icon3} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label2 || <div className={classes.label2}>Chat</div>,
          }}
        />
        )}
        <BuildingBlocksNavItem_Selected2
          className={classes.navItem3}
          swap={{
            icon: props.swap?.icon3 || (
              <Gmail_groups
                swap={{
                  icon: <Icon4 className={classes.icon4} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label3 || <div className={classes.label3}>Spaces</div>,
          }}
        />
        <BuildingBlocksNavItem_Selected2
          className={classes.navItem4}
          swap={{
            icon: props.swap?.icon4 || (
              <Videocam
                swap={{
                  icon: <Icon5 className={classes.icon5} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label4 || <div className={classes.label4}>Meet</div>,
          }}
        />
      </div>
    </div>
  );
});
