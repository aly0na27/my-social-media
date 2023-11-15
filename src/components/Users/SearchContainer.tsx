import React from "react";
import {Form, Formik} from "formik";
import Input from "formik-antd/es/input";
import FormItem from "formik-antd/es/form-item";
import Cascader from "formik-antd/es/cascader";

interface PropsType {
    getUsers: (pageSize: number, pageSelected: number, term?: string, friend?: boolean) => void
    pageSize: number
    pageSelected: number
    onChangePageUsers: (pageNumber: number) => void
    changeSelectedPage: (page: number) => void
    category: boolean | null
    term: string
}

type ValuesType = {
    term: string
    category: Array<string>
}

interface Option {
    value: string
    label: string
}

export const SearchContainer: React.FC<PropsType> = ({getUsers, term, category, changeSelectedPage, pageSelected, pageSize}) => {
    debugger
    const initialValues: ValuesType = {
        term: term,
        category: [category === null ? 'all' : (category ? 'friends' : 'notFriends')]
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
            <Formik initialValues={initialValues}
                    onSubmit={values => {
                        debugger

                        changeSelectedPage(1)
                        getUsers(pageSize, pageSelected = 1, values.term, values.category.length ?
                            (values.category[0] === 'all' ? null : values.category[0] === 'friends') : null)


            }}>
                <Form>
                    <FormItem name={"term"}>
                        <Input name={"term"}></Input>
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