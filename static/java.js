function show_post(number) {
    const top_container = document.querySelector(".top-container")
    const post_container = document.querySelector(".post_container")
    const post = document.getElementById(`post${number}`)
    const header = document.querySelector(".post_header")

    
    document.body.style.backgroundColor = "var(--color1)"
    top_container.style.display =  'none'
    post_container.style.display = 'flex'
    post.style.display = 'flex'
    
    header.addEventListener('click', function() {
        post_container.style.display = 'none'
        post.style.display = 'none'
        document.body.style.backgroundColor = "white"
        top_container.style.display =  'block'
    })
}

