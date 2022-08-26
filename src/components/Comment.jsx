import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './avatar'
import styles from './Comment.module.css'

export function Comment(props) {

    function handleDelete() {
        props.onDeleteComment(props.content)
    }

    // Algo aqui comentário
    return (
        <div className={styles.comment}>
            <Avatar src="./src/img/profile.webp" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorTime}>
                            <b>Martin</b>
                            <time title='14 de Julho de 2022 às 22:50' dateTime='2022-07-14 22:50:00'>
                                Há cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDelete} title='Deletar Comentário'>
                            <Trash size={25} />
                        </button>
                    </header>
                    <p className=''>{props.content}</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir<span>10</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}