// dom1.html code
function change_dom_element(){
    let container = document.getElementsByTagName("h1")[0]
    let content = container.innerText;

    //Display h1 element content to h2 element
    let display_content = document.getElementsByTagName("h2")[0]
    display_content.innerHTML = content;

    alert(content)
}

//demo2.html
let container = document.getElementById("demo")

function dom_original(){
    //alert(container.innerHTML)
    container.innerText = "Change & delete h1 element content."
}

function dom_change(){
    container.innerHTML = "I Love My Parents"
}

function dom_delete(){
    container.innerHTML = ""
}

function dom_insert(){
    let content = document.getElementById("content_data").value;
    // alert(content)
    container.innerHTML = content;
    document.getElementById("content_data").value = ""
}



//demo3.html
function dom_attribute(){
    let h1_ref = document.getElementsByTagName("h1")[0]

    h1_ref.setAttribute('class','my_class_name')
    h1_ref.setAttribute('id','my_id_name')
    h1_ref.setAttribute('title','Welcome to Brand Wave Studio')
    h1_ref.setAttribute('lang','en')
    h1_ref.setAttribute('data-info','Special Heading')
}


//demo4.html
function current_attribute(){
    let container_ref = document.getElementById("demo")

    attribute = container_ref.attributes
    // console.log(attribute)
    for(i=0;i<attribute.length;i++){
        console.log(attribute[i])
        alert(attribute[i].name + " = " + attribute[i].value);
    }
}


//demo5.html
function change_attribute(apply_class){
    //alert(apply_class)
    let container_ref = document.getElementById("demo");

    if(apply_class == "text_primary"){
        //alert(apply_class)
        container_ref.setAttribute("class","text_primary")
    }else if(apply_class == "text_danger"){
       // alert(apply_class)
        container_ref.setAttribute("class","text_danger")
    }else if(apply_class == "text_success"){
       // alert(apply_class)
        container_ref.setAttribute("class","text_success")
    }else{
        container_ref.setAttribute("class","text_primary")
    }
}



