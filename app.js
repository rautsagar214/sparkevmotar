const video = document.getElementById("video")

video.play()


function showContactForm(){
    const form = document.getElementById("container") 
    form.classList.add("show")
}

function showalert(){
    const form = document.getElementById("container") 
    form.classList.remove("show")
    alert("Our Team will Contact You..!!")
    window.location.reload()
}

function close_window() {
    const form = document.getElementById("container") 
     form.classList.remove("show")
      
    }
  
