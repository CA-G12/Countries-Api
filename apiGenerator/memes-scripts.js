let after = "";

let button = document.getElementById('button');
button.addEventListener('click', fetchMemes);

function fetchMemes() {
    if (document.getElementById("memes")) {
        document.getElementById("memes").remove();
    }

    let container = document.createElement("div");
    container.id = "memes";
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
        .then((response) => response.json())
        .then((body) => {
            after = body.data.after;
            for (let i = 0; i < body.data.children.length; i++) {
                if (body.data.children[i].data.post_hint === "image") {
                    if (body.data.children[i].data.url !== "https://i.redd.it/e1snafuqggf91.jpg"
                        && body.data.children[i].data.url !== "https://i.redd.it/t86wgg8rumf91.jpg") {
                        let div = document.createElement("div");
                        let image = document.createElement("img");
                        image.src = body.data.children[i].data.url_overridden_by_dest;
                        div.appendChild(image);
                        container.appendChild(div);

                    }

                }
            }
            document.body.appendChild(container);
        })
        .catch((err) => {
            console.log(err);
        });
}
