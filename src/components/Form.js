import React from 'react'

export default function Form(props) {

    return (
        <div className ='d-flex justify-content-center'>
            {props.error ? Error() : null}
            <div>
            <form onSubmit ={props.onSubmit} className ='mt-5 mb-3 row d-flex justify-content-center'>
                <div className="col-md-5 col-5" >
                    <input type="text" 
                        className="form-control"  
                        placeholder ='City...'
                        autoComplete ='off'
                        name ='city' 
                    />

                </div>
                <div className="col-md-5 col-5">
                    <input type="text" 
                        className="form-control" 
                        placeholder ='country' 
                        autoComplete ='off'
                        name ='country'
                    />
                </div>
                <button type="submit" className="btn btn-warning for-group  col-md-2 offset-col-3 m-3">Meteo</button>
            </form>  
            </div>
        </div>
    )

    function Error(){
        return(
            <div className ='text-center alert alert-warning fade show mt-5' role="alert">
                <h6>Attention veuiller les champs ci-dessous</h6>
            </div>

        )
    }
}
