import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'

import { startGetMovies } from '../actions/moviesAction'

const MoviesForm = (props) => {

    const dispatch = useDispatch()

    const initialValues = {
        title : "",
        rating : ""
    }

    const onSubmit = (values,onSubmitProps) =>{
        dispatch(startGetMovies({...values, id : uuidv4()}))
        console.log("formdata-values", values)
        onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
        title : Yup.string().required("Required*"),
        rating : Yup.string().required("Required*")
    })
    
    return (
        <div>
            <h2> Add Movie </h2>
            <Formik initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { onSubmit } 
            >
            <Form>
                <Field className="form-control"
                    type="text"
                     name = "title"
                     placeholder="Enter a movie name" 
                /><br/>
                <ErrorMessage name="title" />
                <Field className="form-control" 
                    type="text" 
                    name = "rating"
                    placeholder="IMDB ranking" 
                /><br/>
                <ErrorMessage name="ratingg" />
                <input className="btn btn-success" type="submit" value = "add" />
            </Form>
            </Formik>
        </div>
    )
}

export default MoviesForm
