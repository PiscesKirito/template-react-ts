# 【个人用】React模板仓库

## 构建记录

### 1.[vite](https://cn.vitejs.dev/)

```shell
npm create vite@latest my-app --template react-swc-ts
```

### 2.[antd](https://ant-design.antgroup.com/index-cn)

```shell
npm install antd --save
```

### 3.[react-router](https://reactrouter.com/en/main)

```shell
npm install react-router-dom localforage match-sorter sort-by
```

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
```

```tsx
// src/router/index.tsx
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

```

