let testFunction = () => {
    let banner = document.querySelector("#banner");

    let anotherDiv = document.createElement('div');

    anotherDiv.textContent = " - December 4"

    banner.appendChild(anotherDiv);
}

export default testFunction;