import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="./src/img/profile.webp" />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.cargo}</span>
                    </div>
                </div>
                <time title='14 de Julho de 2022 às 22:50' dateTime='2022-07-14 22:50:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    <a href="#">Clique Aqui</a>
                </p>
                <p>
                    <a href="#">#aqui </a>
                    <a href="#">#ali </a>
                </p>
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