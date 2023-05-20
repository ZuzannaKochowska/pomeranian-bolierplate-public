import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData12052023 } from './Exercise-example-12-05-2023/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaData12052023,
  FloatsAndPositioning,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
