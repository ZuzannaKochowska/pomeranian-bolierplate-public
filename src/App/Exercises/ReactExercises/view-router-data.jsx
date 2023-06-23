import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok8/router-data';
import { Blok8MetaData as FormsMetaData } from './Forms/router-data';
// import { Blok8MetaData as BasicFormsMetaData } from './BasicForms/router-data';
import { Blok8MetaData as BasicForms } from './BasicForms/router-data';
// import { blockRouterMetaData as blockRouterMetaData12052023 } from '../Exercises/HtmlCss/Exercise-example-12-05-2023/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8MetaData,
  FormsMetaData,
  // BasicFormsMetaData,
  BasicForms,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

// export const blockRouterMetaData12052023 = getParsedRouterDataList(blockRouterMetaData12052023)
