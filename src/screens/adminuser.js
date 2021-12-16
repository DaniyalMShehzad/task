import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersauthentication } from '../config/firebasefunc';

export default function Adminuser() {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((e) => e)
    useEffect(() => {
        console.log(Object.values(state.useruid.userid));
        dispatch((dispatch) => usersauthentication(dispatch))
        setData(Object.values(state?.useruid?.userid))
        console.log(data);
    }, [])
    return (
        <>
            {/* {data?.map((e,i)=>{
            console.log(e.newobj);
        })} */}
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>type</th>
                        <th>Delete</th>
                    </tr>
                    {data?.map((e,i) => {
                        console.log(e);
                        // if(e.newobj.type.type==="admin"){
                        //     null
                        // }
                        // else{
                        return (
                            <>
                            <tr key={i}>
                                <td>{e.newobj.name}</td>
                                <td>{e.newobj.email}</td>
                                <td>{e.newobj.type.type}</td>
                                {/* <td>{e.newobj.name}</td> */}
                            </tr>
                            </>
                        )
                        // }
                    })}
                    <></>
                </table>
            </div>
        </>
    )
}
