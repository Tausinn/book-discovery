const textInput = document.querySelector("#text-input");
const searchBtn = document.querySelector("#search-btn");
const resultContainer = document.querySelector(".result-container");

const fetchBooks = async () => {
    const query = textInput.value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error("Not found");
        const data = await response.json();
        resultContainer.innerHTML = "";

        data.items.forEach((item) => {
            const book = document.createElement("div");
            const seeBtn = document.createElement
            ("button");
            seeBtn.innerText = "See More";
            seeBtn.classList.add("see-btn");
            book.classList.add("book")
            book.innerHTML = `<h3>${item.volumeInfo.title}</h3>`;

            resultContainer.appendChild(book);
            book.appendChild(seeBtn)
        });

        resultContainer.scrollIntoView({behavior: "smooth"});

        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}

searchBtn.addEventListener("click", fetchBooks);
