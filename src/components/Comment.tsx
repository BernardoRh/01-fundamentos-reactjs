import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';


interface CommentProps {
   content: string,
   onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment() {
      onDeleteComment(content);
   }

   function handleLikeComment() {
      setLikeCount(likeCount+1);
   }

   return(
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://github.com/BernardoRh.png" alt=""/>
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Bernardo R. Horbach</strong>
                     <time title='14 de Novembro as 12:45h' dateTime='2022-11-14 12:44:00'>Cerca de 1h atrás</time>
                  </div>

                  <button onClick={handleDeleteComment} title="Deletar comentário">
                     <Trash size={24}/>
                  </button>

               </header>

               <p>{content}</p>
            </div>

            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir<span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   );
}