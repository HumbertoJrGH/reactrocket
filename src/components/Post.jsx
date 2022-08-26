import { format, formatDistanceToNow } from 'date-fns'
import { id } from 'date-fns/locale';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, published, content }) {
    const [comments, setComments] = useState([])

    const [newComment, setNewComment] = useState('')

    const publishedDate = format(published, "d 'de' LLLL 'de' Y 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedSince = formatDistanceToNow(published, {
        locale: ptBR,
        addSuffix: true
    })


    function deleteComment(comment) {
        console.log(`Deletar ${comment}`)
        setComments()
    }

    function handleNewComment(event) {
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity("")
        setNewComment(event.target.value)
    }
    
    function deleteComment(targetComment) {
        const newCommentList = comments.filter(comment => {
            return comment != targetComment
        })
        setComments(newCommentList)
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Preencha seu comentário")
    }

    const isNewCommentPermitted = newComment.length == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.picture} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDate} dateTime={published.toISOString()}>
                    {publishedSince}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, i) => {
                    if (line.type === 'paragraph') {
                        return (
                            <p key={i}>
                                {line.content}
                            </p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p key={i}>
                                <a href='#'>
                                    {line.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.comments}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='deixe o seu comentário'
                    onChange={handleNewCommentChange}
                    value={newComment}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button role="submit" disabled={isNewCommentPermitted}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(<Comment key={comment} content={comment} onDeleteComment={deleteComment} />)
                })}
            </div>
        </article>
    );
}