// signIn = (...member) => {
//     console.log(member)
// }

// username = 'sultan'
// password = '123'
// umur = 30

// signIn(username, password, umur)

// import {user} from './app/member'
// import forum from './app/forum'

// console.log(user)
// console.log(forum)
let getMember = new Promise((resolve, reject)=> {
    if (true) {
        resolve('berhasil')
    }
    reject('gagal!')
}).then((msg) => {
    console.log('ini dalam then '+msg)
}).catch((msg) => {
    console.log('ini dalam catch ' + msg)
})

// console.log(getMember)