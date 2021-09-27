import Item from "../item/Item";
import { useState, useEffect } from "react";
import API from '../../utils/api';
import { sorting } from '../../utils/sorting'

const Table = () => {
    const [input,setInput] = useState('')
    const [sortType,setSortType] = useState('title')
    const [filterType,setFilterType] = useState('');
    console.log(sortType)
    const [contents, setContents] = useState(null)
    useEffect(() => {
        API.get('contents').then((res) => {
            setContents(sorting(res.data, sortType));
        });
    }, []);
    function sortItems (param) {
        setSortType(param)
        setContents(sorting(contents,param))
    }
    function setTitleDisabled () {
        return filterType === 'title'?true:false
    }
    function setCountDisabled () {
        return filterType !== 'title' ? true : false
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
                    <select name="first" id="">
                        <option value="title" onClick={() => setFilterType('title')}>Название</option>
                        <option value="count" onClick={() => setFilterType('count')}>Количество</option>
                        <option value="distance" onClick={() => setFilterType('distance')}>Дистанция</option>
                    </select>
                    <select name="second" id="">
                        <option value="=" disabled={setTitleDisabled()}>равно</option>
                        <option value="include" disabled={setCountDisabled()}>содержит</option>
                        <option value=">" disabled={setTitleDisabled()}>больше</option>
                        <option value="<" disabled={setTitleDisabled()}>меньше</option>
                    </select>
                    <input type="text" value={input} onChange={(el) => setInput(el.target.value)} />
                </div>
                <ul className='names'>
                    <li className='names__item' onClick={() => sortItems('title')}>Название</li>
                    <li className='names__item'>Дата</li>
                    <li className='names__item' onClick={() => sortItems('count')}>Количество</li>
                    <li className='names__item' onClick={() => sortItems('distance')}>Дистанция</li>
                </ul>
                <div className='content'>
                    {contents.map((el, index) => <Item id={index} title={el.title} date={el.date} count={el.count} distance={el.distance} />)}
                </div>
            </main>
        )
}
export default Table;