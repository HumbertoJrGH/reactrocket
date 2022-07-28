import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import style from './App.module.css';
import './styles/global.css';

import { Sidebar } from './components/Sidebar.jsx';

function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bernarde F. Castagno"
            cargo="Espadachim"
            content="Meu amor de toda a vida!adgadgadg"
          />
          <Post
            author="Alejandro Barrillo"
            cargo="Mercenário"
            content="Quem é esse loirinho nojento?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
