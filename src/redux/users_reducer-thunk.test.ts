import {usersAPI} from "../api/usersAPI";
import {MyResponseType, ResultsCode} from "../api/api";
import {setUnfollow, UsersActions} from "./users_reducer";

jest.mock("../api/usersAPI")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()
beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
})

const result: MyResponseType = {
    resultCode: ResultsCode.Success,
    messages: [],
    data: {}
}


test("success follow thunk", async () => {
    usersAPIMock.setFollow.mockReturnValue(Promise.resolve(result))

    // await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UsersActions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UsersActions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UsersActions.toggleFollowingInProgress(false, 1))
})

test("success unfollow thunk", async () => {
    usersAPIMock.setUnfollow.mockReturnValue(Promise.resolve(result))

    const thunk = setUnfollow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UsersActions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UsersActions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UsersActions.toggleFollowingInProgress(false, 1))
})