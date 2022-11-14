import styles from './Post.module.css'

export function Post(){
   return(
      <article className={styles.post}>
         <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=100"
         />
         <header>
            <div className={styles.author}>
               <img className={styles.avatar} src="https://github.com/BernardoRh.png" />
               <div className={styles.authorInfo}>
                  <strong>Bernardo R Horbach</strong>
                  <span>Web Developer</span>
               </div>
            </div>

            <time title='14 de Novembro as 12:45h' dateTime='2022-11-14 12:44:00'>Públicado há 1h</time>
         </header>
         
         <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

            <p>
               <a href="#">#novoprojeto</a>{' '}
               <a href="#">#nlw</a>{' '}
               <a href="#">#rocketseat</a>
            </p>
         </div>

         <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
               placeholder='Deixe um comentário'
            />
            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>
      </article>
   );
}