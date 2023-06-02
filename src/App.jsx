import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routes from './routes.js';
import MainPage from './pages/MainPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import PricesPage from './pages/PricesPage.jsx';

const router = createBrowserRouter([
  {
    path: routes.priceRoute(),
    element: <PricesPage />,
  },
  {
    path: routes.portfolioRoute(),
    element: <PortfolioPage />,
  },
  {
    path: routes.contactsRoute(),
    element: <ContactsPage />,
  },
  {
    path: routes.mainRoute(),
    element: <MainPage />,
  },
]);

const app = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default app;
