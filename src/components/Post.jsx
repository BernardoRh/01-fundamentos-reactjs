import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';
import { Cpu } from 'phosphor-react';

export function Post({author, publishedAt, content}){

   const [comments, setComments] = useState([
      "Post muito bacana, hein?",
   ]);

   const [newCommentText, setNewCommentText] = useState('');

   const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
   });

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
   });

   function handleCreateNewComment() {
      event.preventDefault();
      

      setComments([...comments, newCommentText]);

      setNewCommentText('');
   }

   function newCommentChange() {
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
   }

   function deleteComment(commentToDelete) {
      const withouDeletedOne = comments.filter(comment => {
         return comment != commentToDelete;
      });

      setComments(withouDeletedOne);
   }

   function handleNewCommentInvalid() {
      event.target.setCustomValidity('Esse campo não pode estar em branco');
   }

   const isNewCommentEmpty = newCommentText == 0;

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
                     <p key={line.content}>
                        {line.content}
                     </p>
                  );
               } else if(line.type == 'link') {
                  return(
                     <p key={line.content}>
                        <a href='#'>
                           {line.content}
                        </a>
                     </p>
                  );
               } else if(line.type == 'citacions') {
                  return(
                     <p key={line.content}>
                        {
                           line.content.map(citation => {
                              if(citation.type == 'paragraph') {
                                 return (
                                    <p key={citation.content}>
                                       {citation.content + ' '}
                                    </p>
                                 );
                              } else if(citation.type == 'link') {
                                 return(
                                    <a href='#' key={citation.content}>
                                       {citation.content + ' '}
                                    </a>
                                 );
                              }
                           })
                        }
                     </p>
                  );
               }
            })}
         </div>

         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
               name='comment'
               placeholder='Deixe um comentário'
               value={newCommentText}
               onChange={newCommentChange}
               onInvalid={handleNewCommentInvalid}
               required
            />
            <footer>
               <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
            </footer>
         </form>

         <div className='styles.commentList'>
            {comments.map(comment => {
               return(
                  <Comment
                     content={comment}
                     key={comment}
                     onDeleteComment={deleteComment}
                  />
               );
            })}
         </div>
      </article>
   );
}