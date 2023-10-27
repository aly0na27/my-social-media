import styles from "./Users.module.css"
import React from "react";
import User from "./User/User";
import {Pagination, ConfigProvider} from "antd";

function Users(props) {
    let users = props.users.map((u) => {
        return (
            <User key={u.id} id={u.id} name={u.name} followed={u.followed} location={"u.location"}
                  followingInProgress={props.followingInProgress} photos={u.photos.small}
                  toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                  setUnfollow={props.setUnfollow} setFollow={props.setFollow}
            />
        )
    })

    const onChangePaginator = (page, pageSize) => {
        props.onChangePageUsers(page)
    }

    return (
        <div className={styles.wrapperUsers}>
            <ConfigProvider theme={{
                components: {
                    Pagination: {
                        colorBgContainer: 'var(--background-color)',
                        colorPrimary: 'var(--third-btn-color)',
                        colorPrimaryHover: 'var(--third-btn-hover)',
                        colorBorder: 'var(--third-btn-hover)',
                        colorBgTextActive: 'var(--background-color)',
                        colorText: 'var(--primary-text-color)',
                        // colorTextDisabled: 'var(--secondary-text-color)',
                        // colorTextPlaceholder: 'var(--primary-text-color)',
                        // controlOutline: 'var(--background-color)',
                        itemActiveBg: 'var(--background-color)',
                        fontFamily: 'Saira, sans-serif',
                        // itemInputBg: 'var(--foreground-color)',
                        itemLinkBg: 'var(--foreground-color)',
                        itemBg: 'var(--foreground-color)'
                    }
                }
            }}>
                <Pagination defaultCurrent={props.pageSelected} defaultPageSize={5} onChange={onChangePaginator} showSizeChanger={false} showQuickJumper={true} total={Math.ceil(props.totalUserCount/props.pageSize)}/>

            </ConfigProvider> {/*<Paginator onChangePageUsers={props.onChangePageUsers}*/}
            {/*           totalItemsCount={props.totalUserCount}*/}
            {/*           pageSize={props.pageSize}*/}
            {/*           pageSelected={props.pageSelected}*/}
            {/*           portionSize={5}*/}
            {/*/>*/}
            <div className={styles.wrapperUsers}>
                { users }
            </div>
        </div>
    )
}

export default Users