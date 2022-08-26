import React, { useState } from 'react'

export default function Create() {
    const [form_value, setFormValue] = useState({
        name: '',
        description: '',
        size: 0
    })

    const submit_data = (e) => {
        e.preventDefault();
        if (!form_value.name || !form_value.size || !form_value.description) {
            alert('all fields are required');
        } else {
            fetch(`http://localhost:5001/create`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form_value)
            }).then((data)=>{

                data.json().then((json_data)=>{
                    alert('data is save',json_data);
                    console.log("data is save",json_data)

                }).catch((error)=>{
                    alert("data is not save");

                })
            })
        }

    }
    const hanle_change = (name) => (event) => {
        console.log("name", name, "event", event, "event")
        if (name == 'size')
            setFormValue({ ...form_value, [name]: + event.target.value })
        else
            setFormValue({ ...form_value, [name]: event.target.value })



    }

    return (
        <div>
            <form onSubmit={submit_data}>
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput"
                        name='name' placeholder="Name"
                        onChange={hanle_change('name')}
                    />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Size</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2"
                        name='Size' placeholder="Size"
                        onChange={hanle_change('size')} />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2"
                        placeholder="Description"
                        onChange={hanle_change('description')}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
