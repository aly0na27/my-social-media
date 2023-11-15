import {ConfigProvider, Pagination} from "antd";
import "./Paginator.css"
import * as React from "react";

type PropsType = {
    totalUserCount: number,
    pageSize: number,
    pageSelected: number,
    onChangePageUsers: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({totalUserCount, pageSize, pageSelected, onChangePageUsers}) => {
    const onChangePaginator = (pageNumber) => {
        onChangePageUsers(pageNumber)
    }

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
                            onChange={onChangePaginator}
                            showSizeChanger={false} showQuickJumper={true}
                            total={Math.ceil(totalUserCount / pageSize)}/>

            </ConfigProvider>
        </div>
    )
}

export default Paginator;