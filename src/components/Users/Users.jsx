import React, {useEffect, useState} from 'react'
import {getUsers} from '../../utils/Api';

export default function Users() {
   const [theUsers, setTheUsers] = useState([])
    useEffect(() => {
        getUsers().then((usersFromApi) => {
          setTheUsers(usersFromApi);
      })
  },[])
    return (
        <div>
            Users
            <ul>
            {theUsers.map((theuser) => {
                return <li></li>
            })}
            </ul>
    </div>
  )
}
