import { classListAdd, classListRemove } from "../utils/common.js"

export const initialView = (modal1, modal2) =>{
    const modalArray = [modal1, modal2]
    modalArray.forEach((modal) => {classListRemove(modal, 'SHOW')})
    modalArray.forEach((modal) => {classListAdd(modal, 'HIDDEN')})
}