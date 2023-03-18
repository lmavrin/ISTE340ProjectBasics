import {ISTDepartmentConsumer} from './ISTDepartmentConsumer.js';

//Creating the about divs and adding the data to it
ISTDepartmentConsumer.getData('/about')
    .done(function (json) {
        //Appending the div according to the id
        $('#about').append(`<div class="container">
                                    <div class="text-center">
                                        <h2 class="section-heading text-uppercase">${json.title}</h2>
                                        <h3 class="section-subheading text-muted">${json.description}</h3>
                                        <h4 class="section-subheading text-info">"${json.quote}"</h4>
                                        <h4 class="section-subheading text-muted">${json.quoteAuthor}</h4>
                                    </div>
                                </div>
            
            `);});

//Creating the undergraduate divs and adding the data to it
ISTDepartmentConsumer.getData('/degrees/undergraduate')
    .done(function (json) {
        $.each(json.undergraduate, function (index, item) {
            //Appending the div according to the id
            $('#undergraduate').append(`
            <div class="col-md-4 text-center portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#" id="undergraduate-dialog-clicked-${index}">
                <h4 class="my-3">${item.title}</h4>
                <p>${item.description}</p>
                </a>
            </div>
            <div class="modal-body" id="undergraduate-dialog-${index}" title="${item.title}">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">${item.title}</h2>
                                    <p class="item-intro text-muted">${item.degreeName}</p>
                                    <p>${item.description}</p>
                                    <ul class="list-inline" id="list-${index}">
                                        
                                    </ul>
                                    
            </div>
        `);
            //Appending the div according to the id
            $.each(item.concentrations, function (num, element){
            $(`#list-${index}`).append(`
                <li>${element}</li>
            `)})
            //creating the settings for the on click dialog
            $(`#undergraduate-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#undergraduate-dialog-clicked-${index}` ).click(function() {
                $( `#undergraduate-dialog-${index}` ).dialog( "open" );
            });
        });



    });

//Creating the introduction divs and adding the data to it
ISTDepartmentConsumer.getData('/employment')
    .done(function (json) {
        //Appending the div according to the id
        $('#introduction').append(`
            <div class="col-md-4 text-center">
                <h4 class="my-3">${json.introduction.title}</h4>
                <p>${item.description}</p>
            </div>
        `);
    });

//Creating the minors divs and adding the data to it
ISTDepartmentConsumer.getData('/minors')
    .done(function (json) {
        $.each(json.UgMinors, function (index, item) {
            //Appending the div according to the id
            $('#minors').append(`
            <div class="col-lg-4 col-sm-6 mb-4">
            <a class="portfolio-link" data-toggle="modal" id="minors-dialog-clicked-${index}">
                <div class="portfolio-item">
                    
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading text-center">${item.title}</div>
                            <div class="portfolio-caption-subheading text-center">${item.name}</div>
                        </div>
                    
                </div></a>
                <div class="modal-body" id="minors-dialog-${index}" title="${item.title}">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">${item.title}</h2>
                                    <p class="item-intro text-muted">${item.description}</p>
                                    <div class="row" id="div-minors-${index}">
                                        
                                    </div>
                                    <p class="item-intro text-muted">${item.note}</p>
                                    
                </div>
            </div>`);
            //Appending the div according to the id
            $.each(item.courses, function (num, element){
                $(`#div-minors-${index}`).append(`
                <div class="col-lg-4 col-sm-6 mb-4">
                    <p>${element}</p>
                </div>
            `)})
            //editing the on click div
            $(`#minors-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#minors-dialog-clicked-${index}` ).click(function() {
                $( `#minors-dialog-${index}` ).dialog( "open" );
            });
        });
    });

//Creating the graduate divs and adding the data to it
ISTDepartmentConsumer.getData('/degrees/graduate')
    .done(function (json) {
        $.each(json.graduate, function (index, item) {
            //Appending the div according to the id
            $('#graduate').append(`
            <a class="portfolio-link" data-toggle="modal"  id="graduate-dialog-clicked-${index}">
            <div class="col-lg text-center bg-light m-1 ">
                
                <h4 class="my-3">${item.title}</h4>
                <p>${item.description}</p>
                
            </div></a>
            <div class="modal-body" id="graduate-dialog-${index}" title="${item.title}">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">${item.title}</h2>
                                    <p class="item-intro text-muted">${item.degreeName}</p>
                                    <p>${item.description}</p>
                                    <ul class="list-inline" id="list-${index}">
                                        
                                    </ul>   
            </div>`);
            //Appending the div according to the id
            $.each(item.concentrations, function (num, element){
                $(`#list-${index}`).append(`
                <li>${element}</li>
            `)})
            //editing the on click div
            $(`#graduate-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#graduate-dialog-clicked-${index}` ).click(function() {
                $( `#graduate-dialog-${index}` ).dialog( "open" );
            });
        });
    });

//Creating the employment divs and adding the data to it
ISTDepartmentConsumer.getData('/employment/introduction')
    .done(function (json) {
        //Appending the div according to the id
        $('#employment').append(`<h2 class="my-3 text-center">${json.introduction.title}</h2>
                                <div class="row" id="introductionContent"></div>
                                <div class="row" id="statistics"></div>`);
        //Appending the div according to the id
        $.each(json.introduction.content, function (index, item) {
            $('#introductionContent').append(`
            <div class="col-lg text-center bg-light m-1 ">
                <h4 class="my-3">${item.title}</h4>
                <p>${item.description}</p>
            </div>`);
        });
    });

//Creating the statistics divs and adding the data to it
ISTDepartmentConsumer.getData('/employment/degreeStatistics')
    .done(function (json) {
        //Appending the div according to the id
        $.each(json.degreeStatistics.statistics, function (index, item) {
            $('#statistics').append(`
            <div class="col-lg text-center bg-light m-1 ">
                <h5 class="my-3">${item.value}</h5>
                <h6>${item.description}</h6>
            </div>`);
        });
    });

//Creating the employment divs and adding the data to it
ISTDepartmentConsumer.getData('/employment/employers')
    .done(function (json) {
        //Appending the div according to the id
        $('#employment').append(`<h3 class="my-3 text-center">${json.employers.title}</h3>
                                 <div class="row" id="employerNames"></div>`);
        //Appending the div according to the id
        $.each(json.employers.employerNames, function (index, item) {
            $('#employerNames').append(`
            <div class="col-lg text-center bg-light m-1 ">
                <p>${item}</p>
                
            </div>`);
        });
    });
//Creating the employment divs for careers and adding the data to it
ISTDepartmentConsumer.getData('/employment/careers')
    .done(function (json) {
        //Appending the div according to the id
        $('#employment').append(`<h3 class="my-3 text-center">${json.careers.title}</h3>
                                 <div class="row" id="careerNames"></div>
                                 <div class="row" id="dataTables"></div>`);
        //Appending the div according to the id
        $.each(json.careers.careerNames, function (index, item) {
            $('#careerNames').append(`
                
            <div class="col-lg text-center bg-light m-1 ">
                <p>${item}</p>
                
            </div>`);
        });

    });

//Creating the people divs and adding the data to it
ISTDepartmentConsumer.getData('/people')
    .done(function (json) {
        //Appending the div according to the id
        $('#people').append(`<h2 class="my-3 text-center">${json.title}</h2>
                             <h5 class="my-3 text-center">${json.subTitle}</h5>
                             <div class="row justify-content-center">
                                 <button class="m-2 " id="faculty">Faculty</button>
                                 <button class="m-2" id="staff">Staff</button>
                             </div>
                             <div class="row justify-content-center bg-light" id="facultyDiv">
                                
                             </div>
                             <div class="row justify-content-center bg-light" id="staffDiv">
                               
                             </div>`);
        $.each(json.faculty, function (index, item) {
            //Appending the div according to the id
            $('#facultyDiv').append(`<div class="col-lg-4 ">
                                         <div class="bg-dark text-center"><a class="portfolio-link" data-toggle="modal"  id="faculty-dialog-clicked-${index}">
                                             
                                             <p class="text-white">${item.name}</p>
                                             <p class="text-white">${item.title}</p>
                                             
                                         </div></a>
                                         <div class="modal-body" id="faculty-dialog-${index}" title="${item.name}">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Name: ${item.name}</h2>
                                    <p class="item-intro text-muted">Account Username: ${item.username}</p>
                                    <p class="item-intro text-muted">Tagline: ${item.tagline}</p>
                                    <img src='${item.imagePath}'/>
                                    <p class="item-intro text-muted">Title: ${item.title}</p>
                                    <p class="item-intro text-muted">Interest Area: ${item.interestArea}</p>
                                    <p>${item.office}</p>
                                    <p class="item-intro text-muted"><a href="${item.website}">${item.website}</a></p>
                                    <p class="item-intro text-muted">Phone Number:${item.phone}</p>
                                    <p class="item-intro text-muted">E-mail: ${item.email}</p>
                                    <p class="item-intro text-muted">Twitter:<a href="${item.twitter}">${item.twitter}</a></p>
                                    <p class="item-intro text-muted">Facebook:<a href="${item.facebook}">${item.facebook}</a></p>
                                    
                                    
            </div>
                                     </div>
            `);
            //creating the on click dialog
            $(`#faculty-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#faculty-dialog-clicked-${index}` ).click(function() {
                $( `#faculty-dialog-${index}` ).dialog( "open" );
            });
        });
        $.each(json.staff, function (index, item) {
            //Appending the div according to the id
            $('#staffDiv').append(`
                                    <div class="col-lg-4 ">
                                        <a class="portfolio-link" data-toggle="modal"  id="staff-dialog-clicked-${index}">
                                         <div class="bg-dark text-center">
                                             <p class="text-white">${item.name}</p>
                                             <p class="text-white">${item.title}</p>
                                             
                                         </div></a>
                                         <div class="modal-body" id="staff-dialog-${index}" title="${item.name}">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Name: ${item.name}</h2>
                                    <p class="item-intro text-muted">Account Username: ${item.username}</p>
                                    <p class="item-intro text-muted">Tagline: ${item.tagline}</p>
                                    <img src='${item.imagePath}'/>
                                    <p class="item-intro text-muted">Title: ${item.title}</p>
                                    <p class="item-intro text-muted">Interest Area: ${item.interestArea}</p>
                                    <p>${item.office}</p>
                                    <p class="item-intro text-muted"><a href="${item.website}">${item.website}</a></p>
                                    <p class="item-intro text-muted">Phone Number:${item.phone}</p>
                                    <p class="item-intro text-muted">E-mail: ${item.email}</p>
                                    <p class="item-intro text-muted">Twitter:<a href="${item.twitter}">${item.twitter}</a></p>
                                    <p class="item-intro text-muted">Facebook:<a href="${item.facebook}">${item.facebook}</a></p>
                                    
                                    
            </div>
                                     </div>
            `).hide();
            //creating the on click dialog
            $(`#staff-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#staff-dialog-clicked-${index}` ).click(function() {
                $( `#staff-dialog-${index}` ).dialog( "open" );
            });
        });
        //selecting which div to show
        $('#faculty').click(function(){
            $('#staffDiv').hide(400);
            $('#facultyDiv').show(400);
        });

        $('#staff').click(function(){
            $('#facultyDiv').hide(400);
            $('#staffDiv').show(400);
        });

    });

//Creating the research divs and adding the data to it
ISTDepartmentConsumer.getData('/research/byInterestArea')
    .done(function (json) {

        $('#research').append(`<h2 class="my-3 text-center">Faculty Reasearch: Areas of Interest</h2>
                                 <div class="row justify-content-center" id="byInterest"></div>`);
        $.each(json.byInterestArea, function (index, item) {

            $('#byInterest').append(`
            <a class="portfolio-link" data-toggle="modal"  id="interestArea-dialog-clicked-${index}"><div class="random rounded-circle m-2 p-2 justify-content-center align-content-center" ><p class="text-white text-center pt-5">${item.areaName}</p></div></a>
            
            <div class="modal-body" id="interestArea-dialog-${index}" title="${item.areaName}">
                <h2 class="text-white text-center text-dark pt-5">${item.areaName}</h2>
                <ul class="list-inline" id="list-ia-${index}">

                </ul>
            </div>        
`);         //Appending the div according to the id
            $.each(item.citations, function (num, element){
                $(`#list-ia-${index}`).append(`
                <li>${element}</li>
            `)})//Appending the div according to the id
            //Appending the div according to the id
            $(`#interestArea-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //Appending the div according to the id
            $( `#interestArea-dialog-clicked-${index}` ).click(function() {
                $( `#interestArea-dialog-${index}` ).dialog( "open" );
            });


        });
        //random color function
        $('.random').each(function() {
            var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

            $(this).css({'background-color':randomColor});

        });

    });

//Creating the research divs and adding the data to it
ISTDepartmentConsumer.getData('/research/byFaculty')
    .done(function (json) {
        //Appending the div according to the id
        $('#research').append(`<h2 class="my-3 text-center">Faculty Reasearch: Lookup by Faculty</h2>
                                 <div class="row" id="byFaculty"></div>`);
        //Appending the div according to the id
        $.each(json.byFaculty, function (index, item) {
            //Appending the div according to the id
            $('#byFaculty').append(`
            <a class="portfolio-link" data-toggle="modal"  id="byFaculty-dialog-clicked-${index}"><div class="m-2 p-2 justify-content-center align-content-center"><img class="mx-auto rounded-circle" src="https://ist.rit.edu/assets/img/people/${item.username}.jpg" alt="${item.username}" /></div></a>
            <div class="modal-body" id="byFaculty-dialog-${index}" title="${item.facultyName}">
                <h2 class="text-white text-center text-dark pt-5">${item.facultyName}</h2>
                <ul class="list-inline" id="list-bf-${index}">

                </ul>
            </div>
`);         //Appending the div according to the id
            $.each(item.citations, function (num, element){
                $(`#list-bf-${index}`).append(`
                <li>${element}</li>
            `)})
            //Appending the div according to the id
            $(`#byFaculty-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#byFaculty-dialog-clicked-${index}` ).click(function() {
                $( `#byFaculty-dialog-${index}` ).dialog( "open" );
            });
        });


    });

//Creating the resources divs and adding the data to it
ISTDepartmentConsumer.getData('/resources')
    .done(function (json) {
        //Appending the div according to the id
        $('#resources').append(`<h2 class="my-3 text-center">${json.title}</h2>
                                <h5 class="my-3 text-center text-muted">${json.subTitle}</h5>
                                 <div class="row justify-content-center align-content-center" id="resourcesDiv"></div>`);
        //Appending the div according to the id
        $.each(json, function (index, item) {
            $('#resourcesDiv').append(`
            <a class="portfolio-link" data-toggle="modal"  id="#"><div class="m-2 p-2 ">${item.title}</div></a>
                <div class="modal-body" id="resources-dialog-${index}" title="${item.title}">
                <h2 class="text-white text-center text-dark pt-5">${item.title}</h2>
            </div>    
    `);
            //Appending the div according to the id which is list-bf-
            $.each(item.citations, function (num, element){
                $(`#list-bf-${index}`).append(`
                <li>${element}</li>
            `)})
            //Appending the div according to the id
            $(`#resources-dialog-${index}`).dialog({
                autoOpen: false,
                draggable:false,
                width:'auto',
                height:'auto',
                modal: true
            })
            //creating the on click dialog
            $( `#resources-dialog-clicked-${index}` ).click(function() {
                $( `#resources-dialog-${index}` ).dialog( "open" );
            });
        });

    });

//Creating the footer divs and adding the data to it
ISTDepartmentConsumer.getData('/footer')
    .done(function (json) {
        $('#footer').append(`
        <div class="col-md-3" ><ul id="first"></ul></div>
        <div class="col-md-6" id="second">
        
        </div>
        <div class="col-md-3" id="third">
            <ul id="third"></ul>
        </div>`);

        //Appending the div according to the id which is first
        $.each(json.quickLinks, function (index, item) {
            $('#first').append(`
            <li><a href="${item.href}" target="_blank">${item.title}</a></li>`);
        });
        //Appending the div according to the id which is third
        $('#third').append(`<li><a href="${json.news}">News</a></li>`);
        //Appending the div according to the id which is second
        $('#second').append(`${json.copyright.html}`);


    });
