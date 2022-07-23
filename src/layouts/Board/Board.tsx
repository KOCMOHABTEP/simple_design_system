import BoardColumn from "@features/Board/BoardColumn/BoardColumn";

import BoardCard from "@features/Board/BoardCard/BoardCard";
import styles from "./Board.module.scss";

const Board = () => {
    return (
        <div className={styles.list}>
            <BoardColumn name="Открыт">
                <BoardCard id="AOD-1" description="Тестирование компонента" />
            </BoardColumn>
            <BoardColumn name="В работе" />
            <BoardColumn name="Выполнено" />
        </div>
    );
};

export default Board;
