export const updateObjectInArray = (item, id, objPropName, newObjProps) => {
    return item.map((u) => {
        if (u[objPropName] === id) {
            return {
                ...u,
                ...newObjProps
            }
        }
        return u;
    })
}