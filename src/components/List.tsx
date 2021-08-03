import React from 'react';

interface Iprops{
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
  }


const List: React.FC<Iprops> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person,index) => {
            return (<li className="List" key={index}>
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt={person.name}></img>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
            </li>)
            
        })
    }

    return(<>
        <ul>
            {renderList()}
        </ul>
    </>)
}

export default List