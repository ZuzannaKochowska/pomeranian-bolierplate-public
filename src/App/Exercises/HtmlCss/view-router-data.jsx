import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023 } from './Exercise-example-12-05-2023/router-data';
import { blockRouterMetaData as HTMLTable } from '../HtmlCss/HTMLTables/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';
import { blockRouterMetaData as standardTags } from './StandardTags/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as OwnAnimation } from './OwnAnimation/router-data';
import { blockRouterMetaData as ExerciseMultimedia } from './ExerciseMultimedia/router-data';
import { blockRouterMetaData as Zdjecia } from '../HtmlCss/Zdjecia/router-data';
import { blockRouterMetaData as BoxModel } from './BoxModel/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData12052023,
  FloatsAndPositioning,
  standardTags,
  CssAnimations,
  OwnAnimation,
  ExerciseMultimedia,
  Zdjecia,
  BoxModel,
  HTMLTable,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
