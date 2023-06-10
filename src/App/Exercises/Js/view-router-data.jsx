import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataArraysJavaScript } from './Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaMethodsOnArraysJavaScript } from './Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as blockRouterMetaSklepacKreta } from './SklepacKreta/router-data';
import { blockRouterMetaData as blockRouterMetaMemoryGame } from './Memo_Game/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataArraysJavaScript,
  blockRouterMetaMethodsOnArraysJavaScript,
  blockRouterMetaSklepacKreta,
  blockRouterMetaMemoryGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
