export function useBoardgameService(version) {
    const list = async() => {
        return fetch(`/api/${version}/boardgames`)
            .then(response => response.json())
            .then(({data}) => {
                return data
            })
    }

    const show = async(id) => {
        return fetch(`/api/${version}/boardgames/${id}`)
            .then(response => response.json())
            .then(({data}) => {
                return data
            })
    }

    return {
        list,
        show
    }
}