import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Registry from '~/pages/Registry';

const Routes = createAppContainer(createSwitchNavigator({ Registry }));

export default Routes;
