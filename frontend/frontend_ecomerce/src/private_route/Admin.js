import React from 'react'
import { Route } from 'react-router-dom'
import { get_jwt } from '../auth_functions'

export default function Admin({ componet:Component,...rest }) {

    <Route>
        {...rest }
        render = {
            props =>{

                get_jwt()!=undefined||null?<Component></Component>:<Redirect></Redirect>

            }
        }

    </Route>

}
