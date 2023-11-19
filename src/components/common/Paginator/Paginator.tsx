import {ConfigProvider, Pagination} from "antd";
import "./Paginator.css"
import * as React from "react";
import {useSelector} from "react-redux";
import {getPageSelected, getPageSize, getTotalUserCount} from "../../../redux/users-selectors";

interface PropsType {
    onChangePageUsers: (pageNumber: number) => void
}
const Paginator: React.FC<PropsType> = ({onChangePageUsers}) => {

    const pageSelected = useSelector(getPageSelected)
    const totalUserCount = useSelector(getTotalUserCount)
    const pageSize = useSelector(getPageSize)

    // const onChangePaginator = (pageNumber) => {
    //     onChangePageUsers(pageNumber)
    // }

    return (
        <div>
            <ConfigProvider theme={{
                components: {
                    Pagination: {
                        colorBgContainer: 'var(--foreground-color)',
                        colorBgContainerDisabled: 'var(--foreground-color)',
                        colorPrimary: 'var(--third-btn-color)',
                        colorPrimaryHover: 'var(--third-btn-hover)',
                        colorBorder: 'var(--third-btn-hover)',
                        colorBgTextActive: 'var(--foreground-color)',
                        colorText: 'var(--primary-text-color)',
                        fontFamily: 'Saira, sans-serif',
                        itemLinkBg: 'var(--foreground-color)',
                        itemBg: 'var(--foreground-color)'
                    }
                }
            }}>
                <Pagination rootClassName={"paginator"} defaultCurrent={pageSelected} defaultPageSize={1}
                            onChange={onChangePageUsers}
                            showSizeChanger={false} showQuickJumper={true}
                            total={Math.ceil(totalUserCount / pageSize)}/>

            </ConfigProvider>
        </div>
    )
}

export default Paginator;