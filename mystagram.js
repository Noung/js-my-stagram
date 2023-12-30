function appendImageElem(keyword, index) {//ฟังก์ชันค้นภาพ
    const imgElem = document.createElement("img");
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imgElem);
}

// appendImageElem('dog', 1);
// appendImageElem('dog', 2);
// appendImageElem('dog', 3);

function searchPhoto(event) {
    //console.log(event.target);

    const searchWord = event.target.value;//เก็บค่าคำค้นไว้ใน searchWord
    console.log(searchWord);

    if (event.key === 'Enter' && !searchWord) {
        window.alert('กรุณาป้อนคำค้น');
        document.querySelector('input').classList.add("is-invalid");
    } else {
        document.getElementById("gallery").innerHTML = '';
        for (let i = 1; i <= 12; i++) {//จำนวนภาพที่แสดง
            appendImageElem(searchWord, i);
        }
    }

}

function searchImg() {//เริ่มทำงานก่อน ค้นภาพอะไรก็ได้มาแสดง 12 ภาพ
    for (let i = 1; i <= 12; i++) {//จำนวนภาพที่แสดง
        appendImageElem('', i);
    }
    const inputElem = document.querySelector("input");
    inputElem.addEventListener('keydown', searchPhoto);
}

searchImg();
