$(document).ready(function(){

    $("#upload-image").change(function(e){
        alert("upload image start");
        var file = e.target.files[0];
      if(file){
        var reader = new FileReader();
        reader.onload = function(e){
         $("#preview-image").attr('src', e.target.result);
            $("#preview-image").show();
            console.log(reader.result);
        };
        reader.onerror = function(error){
            console.error("Error reading file:", error);
        };
        reader.readAsDataURL(file);
      }   
    });

    // alert("function working");
    $("#add-project").click(function(){
        let newNode = $("<input type='text' id='employment-history' name='employment-history' style='margin-bottom: 0;margin-top: 10px;' rows='4' placeholder='Describe your past job experiences...'></input>");
        newNode.insertBefore("#add-project");
        
    });
    $("#add-education").click(function(){
        let newNode = $("<input type='text' id='education' name='education' style='margin-bottom: 0;margin-top: 10px;' rows='4' placeholder='E.g., Bachelor of Science in Computer Science - ABC University (2016 - 2020)'></input>");
        newNode.insertBefore("#add-education");
        
    });
    $("#add-course").click(function(){
        let newNode = $("<input type='text' id='courses' name='courses' style='margin-bottom: 0;margin-top: 10px;' rows='4' placeholder='List any courses you've completed...'></input>");
        newNode.insertBefore("#add-course");
        
    });
    $("#add-link").click(function(){
        let newNode = $("<input type='text' id='social-media' name='employment-history' style='margin-bottom: 0;margin-top: 10px;' rows='4' placeholder='E.g., LinkedIn Profile'></input>");
        newNode.insertBefore("#add-link");
        
    });
    $("#add-skills").click(function(){
        let newNode = $("<input type='text' id='skills' name='employment-history' style='margin-bottom: 0;margin-bottom: 10px;width: 50%;margin-inline: 2px;' rows='4' placeholder='List your skills...'></input>");
        newNode.insertBefore("#skills");
        
    });
    $("#summary-text").click(function(){
        $("#summary").text("Passionate web developer with over 3 years of experience in creating modern and responsive websites. Proficient in HTML, CSS, JavaScript, and various frameworks. Looking to bring my technical and problem-solving skills to a dynamic team.")
        $("#summary").css({'height': '68px'})
    });
    $("#submit").click(function(event){
        event.preventDefault();
        var title = $("#job-title").val().trim();
        var name = $("#full-name").val().trim();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
        var skill = $("#skills").val().trim();
        var skill2 = $("#skills-2").val().trim();
        var skill3 = $("#skills-3").val().trim();
        var skill4 = $("#skills-4").val().trim();
        var summary = $("#summary").val().trim();
        var project = $("#employment-history").val().trim();
        var project_2 = $("#employment-history2").val().trim();
        var education = $("#education").val().trim();
        var education_2 = $("#education2").val().trim();
        var course = $("#courses").val().trim();
        var course2 = $("#courses2").val().trim();
        var links = $("#social-media").val().trim();

        

        if(title && name && email && phone && skill && summary && project && education && course && links){
            var userData = {
                job_title: title,
                full_name: name,
                email: email,
                tel: phone,
                skills: skill,
                skills_2: skill2,
                skills_3: skill3,
                skills_4: skill4,
                summary: summary,
                employment_history: project,
                employment_history2: project_2,
                education: education,
                education2: education_2,
                courses: course,
                courses_2: course2,
                social_media: links,
                
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            // $("#name_set").html(title);
            alert("Your Professional Resume is Here 'JUST CLICK GENERATE BUTTON'.");
            window.location.href = "resume.html";
        }else{
            alert("Please fill all the Fields.");
        }
        
    });

    $("#ready").click(function(){
        var storeduserData = JSON.parse(localStorage.getItem('userData'));
        alert("Function are start");
        var r_name = $("#name_set").html(storeduserData.full_name);
        var r_job = $("#job-title_set").html("<strong>Field: </strong>" + storeduserData.job_title);
        var r_email = $("#email_set").html("<strong>Email Address: </strong>" + storeduserData.email);
        var r_phone = $("#phone_set").html("<strong>Phone: </strong>" + storeduserData.tel);
        var r_summary = $("#summary_set").html(storeduserData.summary);
        var r_history = $("#employment-history_set").html(storeduserData.employment_history);
        var r_history_2 = $("#employment-history_set2").html(storeduserData.employment_history2)
        var r_education = $("#education_set").html(storeduserData.education);
        var r_education_2 = $("#education_set2").html(storeduserData.education2);
        var r_skill = $("#skills_set").html(storeduserData.skills);
        var r_skill_2 = $("#skills_set2").html(storeduserData.skills_2);
        var r_skill_3 = $("#skills_set3").html(storeduserData.skills_3);
        var r_skill_4 = $("#skills_set4").html(storeduserData.skills_4);
        var r_link = $("#social-media_set").html(storeduserData.social_media);
        var r_course = $("#courses_set").html(storeduserData.courses);
        var r_course_2 = $("#courses_set2").html(storeduserData.courses_2);
        var pic = $("#preview-image").attr("src", "https://cdn-icons-png.flaticon.com/512/14663/14663189.png");
    });

    $("#download").click(function(){
        alert("Click save button to Download Resume.")
        $("#print").printThis({
            base: "https://abdulsamad2522.github.io/abdulsamad-profile/",
            importCSS: true,   
             importStyle: true,    
             loadCSS: "resume.css"
        });
    });

    $("#theme").click(function(){
        $("#print").css({'background-color': 'rgb(42 43 45)'});
        $("#print h1").css('color', 'aliceblue');
        $("#print h2").css({'color': 'white', 'border-bottom': '1px solid #c2c7cb'});
        $("#print p").css('color', '#c2c7cb');
        $("#print a").css('color', 'aliceblue');
        $("#print strong").css('color', 'aliceblue');
        $("#preview-image").css('border', '3px solid #c2c7cb');
        $("#theme").html("Vintage Theme").click(function(){
            $("#print").css({'background-color': '#fff4e6'});
            $("#print h1").css('color', '#a67c52');
            $("#print h2").css({'color': '#5b3b24', 'border-bottom': '2px solid #a67c52'});
            $("#print p").css('color', '#5b3b24');
            $("#print a").css('color', '#8a5a32');
            $("#print strong").css('color', '#5b3b24');
            $("#preview-image").css('border', '3px solid #a67c52');
        })
    });

});