import classes from './item.module.scss';

const Item = ({title,date,count,distance}) => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.value}>{title}</span>
            <span className={classes.value}>{new Date(date).toLocaleDateString().split("/").join(".")}</span>
            <span className={classes.value}>{count}</span>
            <span className={classes.value}>{distance}</span>
        </div>
    )
}

export default Item;