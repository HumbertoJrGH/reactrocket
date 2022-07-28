import { PencilLine } from 'phosphor-react';
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <div className={style.sidebar}>
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" />
            <div className={style.profile}>
                <img className={style.avatar} src="./src/img/profile.webp" />

                <strong>Nome</strong>
                <span>cargo</span>

            </div>
            <footer>
                <a href="#">
                    <PencilLine size={32} />
                    Editar Perfil
                </a>
            </footer>
        </div>
    );
}