const button1 = document.querySelector('.postBtn')
const button2 = document.querySelector('.getBtn')

const getData = url => {
	return new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)
}

const postData = (url, product) => {
	return new Promise((resolve, reject) =>
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(product),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)
}

button1.addEventListener('click', async () => {
	try {
		await postData('http://localhost:3000/page1', {
			name: 'Иван',
			age: 35
		}).then(response => {
			console.log(response, 'данные успешно добавлены')
		})
	} catch (error) {
		console.error(error)
	}
})

button2.addEventListener('click', async () => {
	try {
		const products = await getData('http://localhost:3000/data')
		console.log(products)
	} catch (err) {
		console.error(err)
	}
})
