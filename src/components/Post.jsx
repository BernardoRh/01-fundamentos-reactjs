import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author, publishedAt, content}){

   const [comments, setComments] = useState([
      "Post muito bacana, hein?",
   ]);

   const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
   });

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
   });

   function handleCreateNewComment() {
      event.preventDefault();

      setComments([...comments, comments.length+1])
   }

   return(
      <article className={styles.post}>
         <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=100"
         />
         <header>
            <div className={styles.author}>
               <Avatar src={author.avatarUrl} />
               <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
               </div>
            </div>

            <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
               {publishedDateRelativeToNow}
            </time>
         </header>
         
         <div className={styles.content}>
            {content.map(line => {
               if(line.type == 'paragraph') {
                  return (
                     <p>
                        {line.content}
                     </p>
                  );
               } else if(line.type == 'link') {
                  return(
                     <p>
                        <a href='#'>
                           {line.content}
                        </a>
                     </p>
                  );
               } else if(line.type == 'citacions') {
                  return(
                     <p>{
                        line.content.map(citation => {
                           if(citation.type == 'paragraph') {
                              return (
                                 <>
                                    {citation.content + ' '}
                                 </>
                              );
                           } else if(citation.type == 'link') {
                              return(
                                 <a href='#'>
                                    {citation.content + ' '}
                                 </a>
                              );
                           }
                        })
                     }</p>
                  );
               }
            })}
         </div>

         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
               placeholder='Deixe um comentário'
            />
            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>

         <div className='styles.commentList'>
            {comments.map(comment => {
               return(<Comment content={comment} />);
            })}
         </div>
      </article>
   );
}