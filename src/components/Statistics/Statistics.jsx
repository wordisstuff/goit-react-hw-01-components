import css from './Statistics.module.css'
import random_rgba from './random_rgba'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
                return <li key={id} style={{ backgroundColor: `${random_rgba()}` }} className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            })}
        </ul>
    </section>;
};


