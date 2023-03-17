import { useEffect, useState } from 'react';
import Article from './components/Article';
import data from './components/data';

const getLocalstorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [article] = useState(data);

  const [theme, setheme] = useState(getLocalstorageTheme());

  const toggletheme = () => {
    if (theme === 'light-theme') {
      setheme('dark-theme');
    } else {
      setheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav className="nav">
        <div className="nav_Center">
          <h1>overated</h1>
          <button onClick={toggletheme} className="btn">
            toggle
          </button>
        </div>
      </nav>
      <div className="section">
        {article.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}

export default App;
