import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import crudRoute from './routes/crudRoute';
import crudStore from './redux/crudStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={crudStore}>
<RouterProvider router={crudRoute} />
</Provider>
);

