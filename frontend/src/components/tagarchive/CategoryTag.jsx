import React from 'react';

const CategoryTag = (props) => {

    const { tagName } = props.name;
    
    return (
        <span className="px-4 py-2  text-base rounded-full text-red-600  bg-red-200 ">
            {tagName}
        </span>
    )
}

export default CategoryTag;
