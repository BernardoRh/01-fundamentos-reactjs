import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BernardoRh.png',
      name: 'Bernardo R. Horbach',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋', 
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },

      {
        type: 'citacions',
        content: [
          {
            type: 'link',
            content: '#novoprojeto',
          },
          {
            type: 'link',
            content: '#nlw',
          },
          {
            type: 'link',
            content: '#rocketseat',
          },
        ]
      }
    ],
    publishedAt: new Date('2022-11-06 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Myke Brito',
      role: 'Educator @Rockeatseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋', 
      },

      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },

      {
        type: 'citacions',
        content: [
          {
            type: 'link',
            content: '#novoprojeto',
          },
          {
            type: 'link',
            content: '#nlw',
          },
          {
            type: 'link',
            content: '#rocketseat',
          },
        ]
      }
    ],
    publishedAt: new Date('2022-11-16 10:00:00'),
  }
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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App