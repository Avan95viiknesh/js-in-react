import React from 'react'

const Option = () => {

    const listItemOne = [{ name: 'javascript' }, { name: 'css' }];
    const listItemTwo = [{ name: 'react' }, { name: 'html' }];
    const list3 = [{ name: 'All' }, { name: 'None' }];
    const items = [...listItemOne, ...listItemTwo, ...list3];

 
    console.log(items);
 

  return (
    <div>
        <p className="heading">Please select an option</p>
      <select className="dropdown">
        {items.map((data) => {
          return <option className="options">{data.name}</option>;
        })}
      </select>
    </div>
  )
}

export default Option
