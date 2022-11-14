import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Bernardo R. Horbach"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloribus veniam. Quidem reiciendis voluptas totam similique doloribus quae, omnis aliquid cupiditate architecto quis nisi non sequi debitis sapiente id et."
          />
          <Post
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloribus veniam. Quidem reiciendis voluptas totam similique doloribus quae, omnis aliquid cupiditate architecto quis nisi non sequi debitis sapiente id et."
          />
        </main>
      </div>
    </div>
  );
}

export default App