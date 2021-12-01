let testFunction = () => {
    let banner = document.querySelector("#banner");

    let anotherDiv = document.createElement('div');

    anotherDiv.textContent = " - December 1"

    banner.appendChild(anotherDiv);
}

export default testFunction;