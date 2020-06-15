import api from "../../api"
import { Model } from "../types"

export const FETCH_ALL = "FETCH_ALL"

export const fetchAll = (model: Model) => {
    return (dispatch: any) => {
        api.get(`/${model}`)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_ALL, payload: { model, data: response.data } })
        })
        .catch(err => {
                console.error(err)
            })

    }
}


export const ADD_ONE = "ADD_ONE"

export const addOne = (model: Model, data:any) => {
    return (dispatch: any) => {
        api.post(`/${model}`, data)
        .then(response => {
            console.log(response)
            dispatch({ type: ADD_ONE, payload: { model, data: response.data } })
        })
        .catch(err => {
            console.error(err)
        })
    }
}


export const DELETE_ONE = "DELETE_ONE"

export const deleteOne = (model: Model, id:number) => {
    return (dispatch: any) => {
        api.delete(`/${model}/${id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: DELETE_ONE, payload: { model, id } })
        })
        .catch(err => {
            console.error(err)
        })
    }
}