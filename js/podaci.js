$(document).ready(function(){
    
    $.ajax({
        type: 'GET',
        url: 'js/podacivozila.json',
        success(podaci){
                var ispis = "";
                $.each(podaci, function(index, podatak){
                    if(podatak.id <= 4){
                        ispis += '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 razdvoj text-center">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" id="'+ podatak.id +'" alt="'+ podatak.alt +'">'+
                                '</div>';       
                    }else{
                        ispis += '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 razdvoj sakrij text-center">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" id="'+ podatak.id +'" alt="'+ podatak.alt +'">'+
                                '</div>';
                    }
                });
                $('#nasavozila .row').html(ispis);
                },
                error(greska){
                    alert(greska.status);
                }
            });

     

    $.ajax({
        type: 'GET',
        url: 'js/podacivozila.json',
        success(podaci){
            $('.razdvoj img').click(function(){
                var ispis = "";
                var vrednostId = parseInt($(this).attr('id'));
                $.each(podaci, function(index, podatak){
                    if(vrednostId == podatak.id){
                        ispis += 
                            '<div class="row vidljivost">'+
                                '<div class="col-lg-6">'+
                                    '<img src="'+ podatak.putanja +'" class="img-responsive img-thumbnail" alt="'+ podatak.alt +'">'+
                                '</div>'+
                                '<div class="col-lg-6">'+
                                    '<h3>Marka:'+ podatak.marka +'</h3>'+
                                    '<h3>Model:'+podatak.model+'</h3>'+
                                    '<h3>Godina proizvodnje:'+podatak.godinaProizvodnje+'</h3>'+
                                    '<h3>Kilometraža:'+podatak.kilometraza+' km</h3>'+
                                    '<h3>Cena:'+podatak.cena+' &euro;</h3>'+
                                '</div>'+
                                '<span class="glyphicon glyphicon-remove" aria-hidden="true" id="izadji"></span>'+
                            '</div>';
                    }
                });

                $('#ispisiDinamicki').html(ispis);
                
                $('#izadji').click(function(){
                    $(".vidljivost").css("display","none");
                
                });
            });
            
            $('#izadji').click(function(){
                alert("usao");
                //$(".vidljivost").css("display","none");
            });
        },
        error(greska){
            alert(greska.status);
        }
        
    });

    $.ajax({
        type:'GET',
        url:'js/podaciuvoz.json',
        success(podaci){
            var ispis = "";
            $.each(podaci, function(index,podatak){
                ispis += 
                '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">'+
                    '<div class="thumbnail">'+
                        '<img class="img-responsive" src="'+ podatak.putanja +'" alt="'+ podatak.alt +'">'+
                    '<div class="caption">'+
                        '<h3 class="text-center">'+ podatak.drzava +'</h3>'+
                        '<p><a href="'+ podatak.link +'" class="btn btn-primary center-block" role="button">Sva vozila</a></p>'+
                    '</div>'+
                    '</div>'+
                '</div>';
            });
            $('#lokacije .row').html(ispis);
        },
        error(greska){
            alert(greska.status);
        }
    });

    $.ajax({
        type:'GET',
        url:'js/tabela.json',
        success(podaci){
            var ispis = '<div class="col-lg-12 col-xs-12">'+
            '<h1 class="text-center">Statistika prodaje</h1>'+
            '<div class="table-responsive">'+
                '<table class="table table-striped">'+
                    '<thead>'+
                        '<tr>'+
                            '<th>Marka</th>'+
                            '<th>2013</th>'+
                            '<th>2014</th>'+
                            '<th>2015</th>'+
                            '<th>2016</th>'+
                            '<th>2017</th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody>';
            $.each(podaci, function(index,podatak){
                ispis += '<tr>'+
                            '<td>'+ podatak.marka +'</td>'+
                            '<td>'+ podatak.g2013 +'</td>'+
                            '<td>'+ podatak.g2014 +'</td>'+
                            '<td>'+ podatak.g2015 +'</td>'+
                            '<td>'+ podatak.g2016 +'</td>'+
                            '<td>'+ podatak.g2017 +'</td>'+
                        '</tr>';
            });

            ispis +=        '</tbody>'+
                        '</table>'+
                    '</div>'+
                '</div>';
            $('#statistikaProdaje .row').html(ispis);
        },
        error(greska){
            alert(greska.status);
        }
    });
/* ODAVDE JE ZA KOMPLETNU PONUDU */

    
    

    /* ZA KOMPLETNU PONUDU */
});
