import { Post } from './Post'

function App() {

  return (
    <div>
      <Post
        author="Bernardo R. Horbach"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloribus veniam. Quidem reiciendis voluptas totam similique doloribus quae, omnis aliquid cupiditate architecto quis nisi non sequi debitis sapiente id et."
      />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, doloribus veniam. Quidem reiciendis voluptas totam similique doloribus quae, omnis aliquid cupiditate architecto quis nisi non sequi debitis sapiente id et."
      />
    </div>
  );
}

export default App