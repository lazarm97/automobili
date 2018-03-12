$(document).ready(function(){

    $('.slide-section').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1400, function(){
 
          window.location.hash = hash;
        });
      }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    $('#back-to-top').tooltip('show');

    $('#prikazijos').click(function(){
        $('.sakrij').slideToggle();
    });

    document.getElementById("taster").addEventListener("click", provera);
  });

  //regularni izrazi
  function provera(){

    var imePrezime,email,telefon,regImePrezime,regEmail,regTelefon,nizOk,nizGreske,rezultat;

    imePrezime = document.getElementById("tbImePrezime").value;
    email = document.getElementById("tbEmail").value;
    telefon = document.getElementById("tbTelefon").value;

    regImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,9})+$/;
    regEmail = /^[\w\d.-]+\@[a-z.]{2,12}[com|rs]$/;
    regTelefon = /^06[1|2|3|4|5|6|9][\d]{6,8}$/;

    nizGreske = new Array();
    nizOk = new Array();

    if(!regImePrezime.test(imePrezime))
	{
		nizGreske.push("Ime i prezime nije u dobrom formatu!");
	}
	else
	{
		nizOk.push("Ime i prezime: " + imePrezime);
    }
    
    if(!regEmail.test(email))
	{
		nizGreske.push("Email nije u dobrom formatu!");
	}
	else
	{
		nizOk.push("Email: " + email);
    }

    if(!regTelefon.test(telefon))
	{
		nizGreske.push("Telefon nije u dobrom formatu!");
	}
	else
	{
		nizOk.push("Telefon: " + telefon);
    }
    

    rezultat = "<ul>";
	if(nizGreske.length != 0)
	{
		for(var i = 0; i < nizGreske.length; i++)
		{
			rezultat += "<li style='color:#ff0000;'>" + nizGreske[i] + "</li>";
		}
	}
	else
	{
        rezultat += "<li>Podaci uspešno poslati!";
	}
	
    rezultat += "</ul>";
    
    document.getElementById("ispisGresaka").innerHTML = rezultat;

}
