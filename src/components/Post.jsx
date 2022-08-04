import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, published, content }) {

    const publishedDate = format(published, "d 'de' LLLL 'de' Y 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedSince = formatDistanceToNow(published, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.picture} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{cargo.role}</span>
                    </div>
                </div>
                <time title={publishedDate} dateTime={published.toISOString()}>
                    {publishedSince}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return (
                            <p>
                                {line.content}
                            </p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p>
                                <a href='#'>
                                    {line.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>

            <form className={styles.comments}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='deixe o seu comentário'
                />
                <footer>
                    <button>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}