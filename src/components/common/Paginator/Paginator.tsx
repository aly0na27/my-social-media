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
                        // itemActiveBg: 'var(--background-color)',
                        fontFamily: 'Saira, sans-serif',
                        itemLinkBg: 'var(--foreground-color)',
                        itemBg: 'var(--foreground-color)'
                    }
                }
            }}>
                <Pagination rootClassName={"paginator"} defaultCurrent={pageSelected} defaultPageSize={5}
                            onChange={onChangePaginator}
                            showSizeChanger={false} showQuickJumper={true}
                            total={Math.ceil(totalUserCount / pageSize)}/>

            </ConfigProvider>
        </div>
    )

    // let pagesCount = Math.ceil(totalItemsCount / pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    //
    //
    // let portionCount = Math.ceil(pagesCount / portionSize)
    // let [portionNumber, setPortionNumber] = useState(Math.ceil(pageSelected / portionSize));
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // let rightPortionPageNumber = portionNumber * portionSize;
    //
    // return (
    //     <div>
    //         {
    //             portionNumber !== 1 ? <button onClick={() => {
    //                 setPortionNumber(portionNumber - 1)
    //             }}>Prev</button> : undefined
    //         }
    //         <div>
    //             {
    //                 pages
    //                     .filter(p => leftPortionPageNumber <= p && p <= rightPortionPageNumber)
    //                     .map((el) => {
    //                         return <span key={el}
    //                                      onClick={() => onChangePageUsers(el)}
    //                                      className={classNames({[styles.pageSelected]: pageSelected === el})}
    //                         > {el} </span>
    //                     })
    //             }
    //         </div>
    //         {
    //             portionNumber < portionCount ? <button onClick={() => {
    //                 setPortionNumber(portionNumber + 1)
    //             }}>Next</button> : undefined
    //         }
    //     </div>
    // )
}

export default Paginator;