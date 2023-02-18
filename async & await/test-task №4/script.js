const getData = async (url) => {
    const res = await fetch(url)
    const data = res.json()

    return data
}

const postData = async (url, obj) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    return res.json()
}

const URL = "http://localhost:3000/USERS"
const buttonPost = document.querySelector('.setBtn')
const buttonGet = document.querySelector('.getBtn')
const users = document.querySelector('.users')

buttonPost.addEventListener('click', async (e) => {
    e.preventDefault();

    const id = document.querySelector('input.id').value
    const name = document.querySelector('input.name').value
    const age = document.querySelector('input.age').value
    const gender = document.querySelector('input.gender').value

    let obj = {
        "id": id,
        "name": name,
        "age": age,
        "gender": gender
    }

    await postData(URL, obj)
})

buttonGet.addEventListener('click', async (e) => {
    e.preventDefault()

    const data = await getData(URL)

    data.forEach(el => {
        users.insertAdjacentHTML(`beforeend`, `
            <div class="user">
                <p class="id">${el.id}</p>
                <p class="name">${el.name}</p>
                <p class="age">${el.age}</p>
                <p class="gender">${el.gender}</p>
            </div>
        `)
    })
})
