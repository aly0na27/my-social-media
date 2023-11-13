import {usersAPI} from "../api/usersAPI";
import {MyResponseType, ResultsCode} from "../api/api";
import {setFollow} from "./users_reducer";

jest.mock("../api/usersAPI")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: MyResponseType = {
    resultCode: ResultsCode.Success,
    messages: [],
    data: {}
}


test("test_forThunkUsersReducer", async () => {
    usersAPIMock.setFollow.mockReturnValue(Promise.resolve(result))

    const thunk = setFollow(1)


    const dispatchMock = jest.fn()

    // @ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})