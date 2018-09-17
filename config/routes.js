import { createStackNavigator } from 'react-navigation'

import Home from '../app/routes/home'
import Quiz from '../app/routes/quiz'
import Results from '../app/routes/results'

export default Routes = createStackNavigator({
  Home: { screen: Home },
  Quiz: { screen: Quiz },
  Results: { screen: Results }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
}
)
