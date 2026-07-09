import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Fragment, useEffect } from 'react';
import { useTheme } from './Provider/ThemeProvider';

function App() {
  const { isLightMode } = useTheme();

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('lightTheme');
    } else {
      document.documentElement.classList.remove('lightTheme');
    }
  }, [isLightMode]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
