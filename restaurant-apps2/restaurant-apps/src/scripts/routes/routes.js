import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/detail/:id': Detail,
};

export default routes;
