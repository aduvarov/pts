function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1
}

fetchWithAuth('s', 'post')
let method = 'post'
// fetchWithAuth('s', method) // error
fetchWithAuth('s', method as 'post')

const method2 = 'post'
fetchWithAuth('s', method2)

let a: 'asdf' = 'asdf'
// a = 'fdsa' // error
