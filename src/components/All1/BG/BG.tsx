import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';

interface Props {
  className?: string;
  classes?: {
    checkboxNeutral?: string;
    checkboxNeutral2?: string;
    root?: string;
  };
  hide?: {
    checkboxNeutral?: boolean;
    loremIpsumDolorSitAmetConsecte?: boolean;
  };
}
/* @figmaId 638:1985 */
export const BG: FC<Props> = memo(function BG(props = {}) {
  return null;
});
