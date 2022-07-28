import style from './Post.module.css';

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="./src/img/profile.webp" />
                    <div className={style.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.cargo}</span>
                    </div>
                </div>
                <time title='14 de Julho de 2022 às 22:50' dateTime='2022-07-14 22:50:00'>Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>
                    <a href="#">Clique Aqui</a>
                </p>
                <p>
                    <a href="#">#aqui </a>
                    <a href="#">#ali </a>
                </p>
            </div>

            <form className={style.comments}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='deixe o seu comentário'
                />
                <footer>
                    <button>Comentar</button>
                </footer>
            </form>
        </article>
    );
}