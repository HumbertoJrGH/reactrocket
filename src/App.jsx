import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import style from './App.module.css';
import './styles/global.css';

import { Sidebar } from './components/Sidebar.jsx';

const posts = [
  {
    id: 1,
    author: {
      name: "Bernarde",
      picture: "./src/img/profile.webp",
      role: "Guarda"
    },
    published: new Date("2022-08-01 18:03:53"),
    content: [
      {type: "paragraph", content: "Vincenzo, onde está você?"},
      {type: "paragraph", content: "Passei a noite toda cozinhando um pato com vinho."},
      {type: "link", content: "clique"}
    ],
  },
  {
    id: 2,
    author: {
      name: "Alejandro",
      picture: "./src/img/profile.webp",
      role: "Guarda"
    },
    published: new Date("2022-08-01 19:13:15"),
    content: [
      {type: "paragraph", content: "Vincenzo, onde está você?"},
      {type: "paragraph", content: "Passei a noite toda cozinhando um pato com vinho."},
      {type: "link", content: "clique"}
    ],
  },
  {
    id: 3,
    author: {
      name: "Martin",
      picture: "./src/img/profile.webp",
      role: "Guarda"
    },
    published: new Date("2022-08-01 20:47:17"),
    content: [
      {type: "paragraph", content: "Vincenzo, onde está você?"},
      {type: "paragraph", content: "Passei a noite toda cozinhando um pato com vinho."},
      {type: "link", content: "clique"}
    ],
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                published={post.published}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
