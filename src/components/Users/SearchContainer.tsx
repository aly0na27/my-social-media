import React from "react";
import {Form, Formik} from "formik";
import Input from "formik-antd/es/input";
import FormItem from "formik-antd/es/form-item";
import Cascader from "formik-antd/es/cascader";
import {useDispatch, useSelector} from "react-redux";
import {getPageSelected, getPageSize} from "../../redux/users-selectors";
import {getUsers, UsersActions} from "../../redux/users_reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";


type ValuesType = {
    term: string
    category: Array<string>
}

interface Option {
    value: string
    label: string
}

export const SearchContainer: React.FC = () => {

    const dispatch: ThunkDispatch<any, any, any> = useDispatch()

    const filter = useSelector((state: AppStateType) => state.usersPage.filter)
    const pageSize = useSelector(getPageSize)
    let pageSelected = useSelector(getPageSelected)


    const initialValues: ValuesType = {
        term: filter.term,
        category: [filter.isFriend === null ? 'all' : (filter.isFriend ? 'friends' : 'notFriends')]
    }

    const options: Option[] = [
        {
            value: 'all',
            label: 'All'
        },
        {
            value: 'friends',
            label: 'Friends',
        },
        {
            value: 'notFriends',
            label: 'Not friends'
        }
    ]
    return (
        <div>
            <Formik enableReinitialize={true} initialValues={initialValues}
                    onSubmit={(values: ValuesType) => {

                        dispatch(UsersActions.changeSelectedPage(1))
                        dispatch(getUsers(pageSize, pageSelected = 1, values.term, values.category.length ?
                            (values.category[0] === 'all' ? null : values.category[0] === 'friends') : null))


            }}>
                <Form>
                    <FormItem name={"term"}>
                        <Input name={"term"} placeholder={"term"}></Input>
                    </FormItem>
                    <FormItem name={"category"}>
                        <Cascader name={"category"} defaultValue={['all']} options={options}/>
                    </FormItem>
                    <button type={"submit"}>
                        Search
                    </button>
                </Form>
            </Formik>
        </div>
    )
}