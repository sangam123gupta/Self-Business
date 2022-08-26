import React, { useEffect, useState } from "react";
import { data_geter } from "../auth_functions/index";
import { Link } from "react-router-dom";

const data_here = data_geter()
const List = () => {
    const [flag, setflag] = useState(2);

    const [time, settime] = useState({ time: 2 })
    const [id, setid] = useState(0)
    const [state, setstate] = useState([{}]);

    const delete_one_data = (id) => {
        console.log("data is deleted", id)
        fetch('http://localhost:5001/delete', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then((dta) => {
            console.log("delete", dta);
        }).catch((error) => {
            console.log("error", error);
        })
    }



    function idtake() {


        fetch('http://localhost:3005/event/' + id, {
            method: 'DELETE',
            data: { time: "time" },
            dataType: 'json',

        }).then((data) => {


            data.json().then((resp) => {



                alert(" data is  deleted", resp);
                console.log("state id is", id);
                console.log("time", time)

            })
        })


    }

    useEffect(() => {
        fetch('http://localhost:5001/list').then((data) => {
            data.json().then((resp) => {
                console.log("this is useeffect", resp);
                setstate(resp)
                console.log("is this data of state ", state[0].name, state[0].num)
            })
        })
    }, [])

    return (

        <div>


            {
                state ?

                    <table class="table table-bordered table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Size</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.name}</td>
                                            <td>{data.description}</td>
                                            <td>{data.size}</td>

                                            <td>

                                                <button onClick={() => delete_one_data(data._id)} class="btn btn-primary">Delete</button>






                                            </td>


                                        </tr>

                                    )
                                })
                            }


                        </tbody>
                    </table> : ""
            }
            {
                flag === 3 ?
                    (<div style={{ "textAlign": "center" }}>

                        <input type='text' placeholder='time in second' onChange={(e) => { settime({ time: e.target.value }) }} />
                        <br />
                        <button className='btn btn-danger'

                            onClick={() => idtake()}
                        >DELETE</button>
                    </div>) : ""
            }

        </div>
    )

}

export default List;