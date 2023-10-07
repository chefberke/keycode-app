function showKeyCodes(e) {
    const insert = document.getElementById('insert')
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for(let key in keyCodes) {
        const div = document.createElement('div')
        div.className = 'box'
        const small = document.createElement('small')

        const keyText = document.createTextNode(key)
        const valueText = document.createTextNode(keyCodes[key])

        small.appendChild(valueText)
        div.appendChild(keyText)
        div.appendChild(small)

        insert.appendChild(div)
    }



};













// eventListener
window.addEventListener('keydown', showKeyCodes);

