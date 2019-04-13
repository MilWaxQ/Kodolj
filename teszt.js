    function jelszoEllenorzes() {
        var jelszo = document.getElementById("jelszoDoboz");
            if(jelszo.value== "asdfasz") {
                alert("Sikeres Belépés!")
                return true;
            }
            else {
                alert("Sikertelen Belépés!")
                return false;
            }
    }
    function logo() {
        document.getElementById("logo").style.opacity = 1;
    }
    function logoHover() {
        document.getElementById("logo").style.transform = "scale(1.5)";
        document.getElementById("logo").style.opacity = 0;
    }
    function logoRestore() {
        document.getElementById("logo").style.opacity = 1;
        document.getElementById("logo").style.transform = "scale(1)";
    }