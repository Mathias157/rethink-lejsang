
function show_post(number) {
    const top_container = document.querySelector(".top-container")
    const post_container = document.querySelector(".post_container")
    const post = document.getElementById(`post${number}`)
    const header = document.querySelector(".post_header")
    
    // Hide front and show post #
    document.body.style.backgroundColor = "var(--color1)"
    top_container.style.display =  'none'
    post_container.style.display = 'flex'
    post.style.display = 'flex'

    // Add history, so back button can be used
    history.pushState({page : "Home"},
        "Home",
        window.location.href
    )

    
    // Make back button another way to go back
    window.addEventListener('popstate', function() {
        go_back(number)
    })
    
    // Make header a button for going back
    header.addEventListener('click', function() {
        go_back(number)
    })

    // Scroll to top of the page
    window.scrollTo(0, 0);
}

function go_back(number) {
    const top_container = document.querySelector(".top-container")
    const post_container = document.querySelector(".post_container")
    const post = document.getElementById(`post${number}`)
    
    post_container.style.display = 'none'
    post.style.display = 'none'
    document.body.style.backgroundColor = "white"
    top_container.style.display =  'block'
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
}
