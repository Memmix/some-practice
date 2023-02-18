const filterBtn = document.querySelector('.filter')
const initialComments = document.querySelector('.initinal-comments')
const modifiedComments = document.querySelector('.modified-comments')
const URL = "http://localhost:3000/USERS"

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
}

filterBtn.addEventListener('click', async () => {
    let data = await getData(URL)
    data.forEach(el => {
        initialComments.insertAdjacentHTML(`beforeend`, `
        <div class="comment">
            <h4>${el.name}</h4>
            <p>${el.comment}</p>
        </div>`
        )
        if (el.comment.length >= 20) el.comment = el.comment.slice(0, 20) + '...'
        modifiedComments.insertAdjacentHTML(`beforeend`, `
            <div class="comment">
                <h4>${el.name}</h4>
                <p>${el.comment}</p>
            </div>`
        )
    })
})
