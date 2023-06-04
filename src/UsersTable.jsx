import { useEffect, useState } from "react"
import "./usersTable.css"

const Header = ({columns, sorting}) => {
    return (
        <thead>
            <tr>
                {columns.map((column) =>(
                    <th key={column} className="users-table-cell">
                        {column}
                    </th>
                ))}
            </tr>

        </thead>
    )
}


const Content = ({entries,columns}) => {
    return(
        <tbody>
            {entries.map(entry => (
                <tr key={entry.id}>
                    {columns.map(column => (
                        <td key={column} className="users-table-cess">{entry[column]}</td>
                    ))}

                </tr>
            ))}
        </tbody>
    )
}

const UsersTable = () => {
const [users, setUsers] =useState([])
const [sorting,setSorting] = useState({column:"id", order:"asc"})
const columns =['id','name', 'age']

useEffect(() => {
    const url = 'http://localhost:3004/users'
    fetch(url).then(res => res.json()).then (users =>{
        setUsers(users)
    })
},[])

return (
    <div>
        Search bAR 
        <table className="users-table">
            <Header  colums={columns} sorting={sorting}/>
            <Content entries={users}  colums={columns}/>
        </table>
    </div>
)

}
export default UsersTable