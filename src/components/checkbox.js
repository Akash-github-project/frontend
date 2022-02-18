import React from 'react'
import classNames from 'classnames';

export const Checkbox = ({extraClass = " ",toStore,click, whenClick}) => {

    let defaultClasses = "w-4 h-4 border border-pink-600 focus:border-blue-600";
    if(extraClass !== " "){
       defaultClasses +=` ${extraClass}`; 
    }
    if(toStore){
       defaultClasses += `${whenClick}`;
    }

    function handleChange(e){
        click(e.target.value);
    }
  return (
    <div className={classNames({[`${defaultClasses}`]:true,[` ${whenClick}`]:toStore,[` ${extraClass}`]:true})}  onKeyPress={handleChange} onClick={handleChange} tabIndex="0">

    </div>

  )
}
