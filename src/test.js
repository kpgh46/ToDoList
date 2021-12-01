let testFunction = () => {
    let banner = document.querySelector("#banner");

    let anotherDiv = document.createElement('div');

    anotherDiv.textContent = " - November 30"

    banner.appendChild(anotherDiv);
}

export default testFunction;