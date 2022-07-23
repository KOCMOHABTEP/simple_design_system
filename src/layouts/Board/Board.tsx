import BoardColumn from "@features/Board/BoardColumn/BoardColumn";

import BoardCard from "@features/Board/BoardCard/BoardCard";
import Icon from "@components/Icon/Icon";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
import styles from "./Board.module.scss";

const Board = () => {
    return (
        <>
            <div className={styles.breadcrumbs}>
                <div className={styles.breadcrumbsItem}>Доски</div>
                <div className={styles.breadcrumbsDivider}>/</div>
                <div className={styles.breadcrumbsItem}>AODZONE Community</div>
            </div>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <Icon
                        className={styles.headerTitleIcon}
                        name="media"
                        size={32}
                    />
                    <div className={styles.headerTitleName}>
                        AODZONE Community
                    </div>
                </div>
                <div className={styles.boardFilters}>
                    <div className={styles.boardFilterAdd}>
                        <Button text="Добавить задачу" />
                    </div>
                    <div className={styles.boardFilterSearch}>
                        <Input id="search_issue" label="Поиск задачи" />
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <BoardColumn name="Открыт" count={1}>
                    <BoardCard
                        id="AOD-1"
                        description="Тестирование компонента"
                    />
                </BoardColumn>
                <BoardColumn name="В работе" />
                <BoardColumn name="Выполнено" />
            </div>
        </>
    );
};

export default Board;
