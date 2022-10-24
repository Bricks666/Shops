import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { browserRouter } from './routes';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<RouterProvider router={browserRouter} />
		</AuthContextProvider>
	</React.StrictMode>
);
