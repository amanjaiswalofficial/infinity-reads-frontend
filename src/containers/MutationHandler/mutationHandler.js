import React, {useState, useEffect} from 'react'
import { useMutation } from '@apollo/client';

import MutationDialog from 'components/MutationComponent/mutationDialog'
import MutationMessage from "components/MutationComponent/mutationMessage"

const MutationHandler = ({type, 
                          mutation, 
                          handleSuccess,
                          values,
                          mutationType="dialog"}) => {


    const [mutationVisibility, setMutationVisibility] = useState(true)
    const [postMutation, { 
                        data, 
                        loading, 
                        error} ] = useMutation(mutation)

    useEffect(() => {
        postMutation({variables: values}).catch((err) => {console.log(err)})
    }, [postMutation, values])

    const closeMutation = (data=null) => {
        handleSuccess(data)
        setMutationVisibility(false)
    }

    const getMutation = () => {
        switch(mutationType){
            case "dialog":
                return (
                    <MutationDialog
                        action={type} 
                        visibleState={mutationVisibility}
                        data={data}
                        loading={loading}
                        error={error}
                        handleClose={closeMutation}
                        />
                )
            case "message":
                return (
                    <MutationMessage
                        action={type}
                        visibleState={mutationVisibility}
                        data={data}
                        loading={loading}
                        error={error}
                        handleClose={closeMutation}/>
                )
            default:
                return null
        }
    }

    return (
        <div>
            {
                loading || error || data  ? 
                getMutation() 
                : 
                null
            }
        </div>
    )
}

export default MutationHandler
