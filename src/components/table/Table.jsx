import Item from "../item/Item";
import { useState, useEffect } from "react";
import API from '../../utils/api';
import { sorting } from '../../utils/sorting'
import { filterContent} from '../../utils/filter';

const Table = () => {
    const [input, setInput] = useState('')
    const [sortType, setSortType] = useState('title')
    const [filterType, setFilterType] = useState('title');
    const [filterParam,setFilterParam] = useState('');
    let [contents, setContents] = useState(null)
    const [filtered, setFiltered] = useState(contents);
    useEffect(() => {
        API.get('contents').then((res) => {
            setContents(sorting(res.data, sortType));
        });
    }, []);
    function sortItems(param) {
        setSortType(param)
        setContents(sorting(contents, param))
    }
    function setTitleDisabled() {
        return filterType === 'title' ? true : false
    }
    function setCountDisabled() {
        return filterType !== 'title' ? true : false
    }
    function showFilter(value) {
        setInput(value);
        setFiltered(filterContent(contents, filterType, filterParam, value))
    }
    if (contents === null) return (
        <main>
            LOADING...
        </main>
    )
    else
        return (
            <main className='main'>
                <div className='filter'>
                    <select name="first" value={filterType} id="" onChange={(el) => setFilterType(el.target.value)}>
                        <option value="title" >Название</option>
                        <option value="count" >Количество</option>
                        <option value="distance" >Дистанция</option>
                    </select>
                    <select name="second" id="" onChange={(el) => setFilterParam(el.target.value)}>
                        <option value="=" disabled={setTitleDisabled()}>равно</option>
                        <option value="include" disabled={setCountDisabled()}>содержит</option>
                        <option value=">" disabled={setTitleDisabled()}>больше</option>
                        <option value="<" disabled={setTitleDisabled()}>меньше</option>
                    </select>
                    <input type="text" value={input} onChange={(el) => showFilter(el.target.value)} />
                </div>
                <ul className='names'>
                    <li className='names__item' onClick={() => sortItems('title')}>Название</li>
                    <li className='names__item'>Дата</li>
                    <li className='names__item' onClick={() => sortItems('count')}>Количество</li>
                    <li className='names__item' onClick={() => sortItems('distance')}>Дистанция</li>
                </ul>
                <div className='content'>
                    {input=== ''?contents.map((el, index) => <Item id={index} title={el.title} date={el.date} count={el.count} distance={el.distance} />)
                        : filtered.map((el, index) => <Item id={index} title={el.title} date={el.date} count={el.count} distance={el.distance} />)}
                </div>
            </main>
        )
}
export default Table;