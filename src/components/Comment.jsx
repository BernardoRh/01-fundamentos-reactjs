import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment({content}) {
   return(
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://github.com/BernardoRh.png"/>
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Bernardo R. Horbach</strong>
                     <time title='14 de Novembro as 12:45h' dateTime='2022-11-14 12:44:00'>Cerca de 1h atrás</time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={24}/>
                  </button>

               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir<span>20</span>
               </button>
            </footer>
         </div>
      </div>
   );
}