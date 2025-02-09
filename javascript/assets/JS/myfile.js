// dom1.html code
function change_dom_element(){
    let container = document.getElementsByTagName("h1")[0]
    let content = container.innerText;

    //Display h1 element content to h2 element
    let display_content = document.getElementsByTagName("h2")[0]
    display_content.innerHTML = content;

    alert(content)
}

