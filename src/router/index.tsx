import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: []
	}
])

export default router
