$(document).ready(function(){


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

    $.ajax({
        type: 'GET',
        url: 'js/podacivozila.json',
        success(podaci){
                var ispis = "";
                $.each(podaci, function(index, podatak){
                        ispis += 
                            '<div class="row">'+
                                '<div class="col-lg-4">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                                '</div>'+
                                '<div class="col-lg-8">'+
                                    '<h4>Marka:'+ podatak.marka +'</h4>'+
                                    '<h4>Model:'+podatak.model+'</h4>'+
                                    '<h4>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h4>'+
                                    '<h4>Kilometraža:'+podatak.kilometraza+' km</h4>'+
                                    '<h4>Cena:'+podatak.cena+' &euro;</h4>'+
                                '</div>'+
                            '</div>'+
                            '<hr>';
                });

                $('#sve').html(ispis);

        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type: 'GET',
        url: 'js/najnovije.json',
        success(podaci){
                var ispis = "";
                $.each(podaci, function(index, podatak){
                        ispis += 
                            '<div class="row">'+
                                '<div class="col-lg-4">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                                '</div>'+
                                '<div class="col-lg-8">'+
                                    '<h4>Marka:'+ podatak.marka +'</h4>'+
                                    '<h4>Model:'+podatak.model+'</h4>'+
                                    '<h4>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h4>'+
                                    '<h4>Kilometraža:'+podatak.kilometraza+' km</h4>'+
                                    '<h4>Cena:'+podatak.cena+' &euro;</h4>'+
                                '</div>'+
                            '</div>'+
                            '<hr>';
                });

                $('#najnovije').html(ispis);

        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type: 'GET',
        url: 'js/najprodavanije.json',
        success(podaci){
                var ispis = "";
                $.each(podaci, function(index, podatak){
                        ispis += 
                            '<div class="row">'+
                                '<div class="col-lg-4">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                                '</div>'+
                                '<div class="col-lg-8">'+
                                    '<h4>Marka:'+ podatak.marka +'</h4>'+
                                    '<h4>Model:'+podatak.model+'</h4>'+
                                    '<h4>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h4>'+
                                    '<h4>Kilometraža:'+podatak.kilometraza+' km</h4>'+
                                    '<h4>Cena:'+podatak.cena+' &euro;</h4>'+
                                '</div>'+
                            '</div>'+
                            '<hr>';
                });

                $('#najprodavanije').html(ispis);

        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type: 'GET',
        url: 'js/akcija.json',
        success(podaci){
                var ispis = "";
                $.each(podaci, function(index, podatak){
                        ispis += 
                            '<div class="row">'+
                                '<div class="col-lg-4">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                                '</div>'+
                                '<div class="col-lg-8">'+
                                    '<h4>Marka:'+ podatak.marka +'</h4>'+
                                    '<h4>Model:'+podatak.model+'</h4>'+
                                    '<h4>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h4>'+
                                    '<h4>Kilometraža:'+podatak.kilometraza+' km</h4>'+
                                    '<h4>Cena:'+podatak.cena+' &euro;</h4>'+
                                '</div>'+
                            '</div>'+
                            '<hr>';
                });

                $('#akcija').html(ispis);

        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type: 'GET',
        url: 'js/podaciuskoroprva.json',
        success(podaci){
                var ispis = '<div class="item active">';
                $.each(podaci, function(index, podatak){
                        ispis += 
                            '<div class="col-lg-3">'+
                                '<img src="'+ podatak.putanja +'" class="img-responsive" alt="'+ podatak.alt +'"/>'+
                            '</div>';
                });
                ispis+='</div>';
                $('#uskoro').html(ispis);
        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type: 'GET',
        url: 'js/podaciuskorodruga.json',
        success(podaci){
            var ispis = '<div class="item">';
            $.each(podaci, function(index, podatak){
                    ispis += 
                        '<div class="col-lg-3">'+
                            '<img src="'+ podatak.putanja +'" class="img-responsive" alt="'+ podatak.alt +'"/>'+
                        '</div>';
            });
            ispis+='</div>';
            $('#uskoro').append(ispis);
        },
        error(greska){
            alert(greska.status);
        }
        
    });

    var sortirajddl = [
    {value:"nazivR",naziv:"A-Z"},
    {value:"nazivO",naziv:"Z-A"},
    {value:"cenaRa",naziv:"Ceni rastuće"},
    {value:"cenaOp",naziv:"Ceni opadajuće"},
    {value:"kilRa",naziv:"Kilometraža rastuće"},
    {value:"kilOp",naziv:"Kilometraža opadajuće"}
    ];

    var ispis = "";

    for(var i in sortirajddl){
        ispis += "<option value=" + sortirajddl[i].value + ">" + sortirajddl[i].naziv + "</option>";
    }

    document.getElementById("sortirajddl").innerHTML += ispis;

});


    $('#sortirajddl').change(function(e){
        e.preventDefault();
        
        var vozilaId = $('#sortirajddl').val();

        if(vozilaId == 'nazivR'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeImeGore
            });
        }
        if(vozilaId == 'nazivO'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeImeDole
            });
        }
        if(vozilaId == 'cenaRa'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeCenaRa
            });
        }
        if(vozilaId == 'cenaOp'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeCenaOp
            });
        }
        if(vozilaId == 'kilRa'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeKilRa
            });
        }
        if(vozilaId == 'kilOp'){
            $.ajax({
                type: 'GET',
                url: 'js/podacivozila.json',
                success: sortirajProizvodeKilOp
            });
        }

    });

    function sortirajProizvodeKilRa(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.kilometraza > proizvodB.kilometraza) return 1;
			else if(proizvodA.kilometraza < proizvodB.kilometraza) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
    }

    function sortirajProizvodeKilOp(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.kilometraza < proizvodB.kilometraza) return 1;
			else if(proizvodA.kilometraza > proizvodB.kilometraza) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
    }

    function sortirajProizvodeCenaOp(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.cena < proizvodB.cena) return 1;
			else if(proizvodA.cena > proizvodB.cena) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
    }

    function sortirajProizvodeCenaRa(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.cena > proizvodB.cena) return 1;
			else if(proizvodA.cena < proizvodB.cena) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
    }

    function sortirajProizvodeImeGore(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.marka > proizvodB.marka) return 1;
			else if(proizvodA.marka < proizvodB.marka) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
    }
    
    function sortirajProizvodeImeDole(podaci) {
		
		podaci.sort(function(proizvodA, proizvodB){
			if(proizvodA.marka < proizvodB.marka) return 1;
			else if(proizvodA.marka > proizvodB.marka) return -1;
			else return 0;
		});

		var ispis = prikazProizvoda(podaci);

		$('#sve').html(ispis);
	}

	function prikazProizvoda(podaci){
		var ispis = "";
		$.each(podaci, function(index, podatak){
            ispis += 
                '<div class="row">'+
                    '<div class="col-lg-4">'+
                        '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                    '</div>'+
                    '<div class="col-lg-8">'+
                        '<h4>Marka:'+ podatak.marka +'</h4>'+
                        '<h4>Model:'+podatak.model+'</h4>'+
                        '<h4>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h4>'+
                        '<h4>Kilometraža:'+podatak.kilometraza+' km</h4>'+
                        '<h4>Cena:'+podatak.cena+' &euro;</h4>'+
                    '</div>'+
                '</div>'+
                '<hr>';
        });
		return ispis;
	}
