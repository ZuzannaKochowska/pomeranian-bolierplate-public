import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok8/router-data';
import { SubRoute2MetaData } from './SubRoute2/router-data';
import { Blok9MetaData } from './Blok9/router-data';
import { BlokPetleMetaData } from './Petle/router-data';
// import { Blok8MetaData as FormsMetaData } from './Forms/router-data';
// import { Blok8MetaData as BasicForms } from './BasicForms/router-data';
// import { blockRouterMetaData as blockRouterMetaData12052023 } from '../Exercises/HtmlCss/Exercise-example-12-05-2023/router-data';
import { SubRouteExampleMetaData as Redux } from './Redux/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Blok8MetaData,
  SubRoute2MetaData,
  Blok9MetaData,
  BlokPetleMetaData,
  // FormsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

// export const blockRouterMetaData12052023 = getParsedRouterDataList(blockRouterMetaData12052023)
