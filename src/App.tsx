import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: "Bernardo R. Horbach",
      role: "Web Developer",
      avatarUrl: "https://github.com/BernardoRh.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋", 
      },

      {
        type: "paragraph",
        content: "Acabei de subir amais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    citation: [
      {
        type: "link",
        content: "#novoprojeto",
      },
      {
        type: "link",
        content: "#nlw",
      },
      {
        type: "link",
        content: "#rocketseat",
      },
    ],
    publishedAt: new Date('2022-11-06 20:00:00'),
    imageOfTheBackground: "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=100",
  },
  {
    id: 2,
    author: {
      name: "Myke Brito",
      role: "Educator @Rockeatseat",
      avatarUrl: "https://github.com/maykbrito.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋", 
      },

      {
        type: "paragraph",
        content: "Acabei de subir amais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    citation: [
      {
        type: 'link',
        content: "#novoprojeto",
      },
      {
        type: "link",
        content: "#nlw",
      },
      {
        type: "link",
        content: "#rocketseat",
      },
    ],
    publishedAt: new Date('2022-11-06 20:00:00'),
    imageOfTheBackground: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
]

const post = [
  
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                citation={post.citation}
                publishedAt={post.publishedAt}
                bgImgSrc={post.imageOfTheBackground}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App