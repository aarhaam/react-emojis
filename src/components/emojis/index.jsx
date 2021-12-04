import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import EmojisBox from '../emojisBox';
import Empty from '../empty';

import styles from './emojis.module.css';

import { filterEmojis } from '../../utils/filterEmojis';

const Emojis = ({emojisData, searchText}) => {

    const [filteredEmojis, setFilteredEmojis] = useState([]);

    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData,
            searchText
        }))
    }, [emojisData, searchText])

    if(filteredEmojis.length > 0){
        return (
            <div className={styles.emojisGrid}>
                {filteredEmojis.map((data, index) => (
                    <EmojisBox 
                        key={index} 
                        title={data.title} 
                        symbol={data.symbol}
                    />
                ))}
            </div>
        )
    } else {
        return (
            <Empty text="Oops! you keyword has not match for any emoji"/>
        )
    }
}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default Emojis