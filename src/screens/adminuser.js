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
    console.log(Object.values(state.useruid.userid));
    useEffect(() => {
        setData(Object.values(state?.useruid?.userid))
        dispatch((dispatch) => usersauthentication(dispatch))
        console.log(data);
    }, [setData])
    return (
        <>
            {/* {data?.map((e,i)=>{
            console.log(e.newobj);
        })} */}
            <div className='adminUser'>
                <table className='adminUser2'>
                    <tr className='admintr'>
                        <th className='adminthead'>Name</th>
                        <th className='adminthead'>Email</th>
                        <th className='adminthead'>type</th>
                        {/* <th className='adminthead'>Delete</th> */}
                    </tr>
                    {data?.map((e,i) => {
                        console.log(e);
                        if(e.newobj.type.type!="admin"){
                            return (
                                <>
                                <tr className='admintrbody' key={i}>
                                    <td className='adminbody'>{e.newobj.name}</td>
                                    <td className='adminbody'>{e.newobj.email}</td>
                                    <td className='adminbody'>{e.newobj.type.type}</td>
                                    {/* <td>{e.newobj.name}</td> */}
                                </tr>
                                </>
                            )
                        }
                       
                    })}
                    <></>
                </table>
            </div>
        </>
    )
}
