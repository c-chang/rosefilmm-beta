/* ------------------------------------------------------------------------------------
*
* OKAY. DIRECTIONS! :) 
*
* Basically ONLY edit text that is in between quotation marks. To prevent any unwanted errors, make sure that all quotations have an opening and closing pair! 
* Also, there is usually a semi-colon at the end of lines, but not always. 
* For Example: 
     const brand_name = "rosefilmm";           <--- You only want to change the text "rosefilmm" to something else. Keep the beginning and ending quotes.
     const brand_name = "helloworld";          <--- This is how it should look if you wanted the brand_name value to be "helloworld" instead of "rosefilmm".
*
* Adding images:
     For the gallery thumbnail hover title and subtitle, you need to uncomment new sections in the "projects" dictionary below, and add your title/subtitle in the quotes.
     Add the caption text for each image here as well. Make sure to match the key to the name of your image file.
* For Example: 
    "portraits": {                             <--- "portraits" is your KEY (in this case, "portraits" project). Everything inside the {} is your VALUE
        title: "portraits thumbnail title",    <--- "title" is your KEY. The VALUE shown in all caps light grey is "PORTRAITS THUMBNAIL HERE"
        subtitle: "",                          <--- "subtitle" is your KEY. There is an empty (nothing) subtitle here.
        thumbnail: "",                         <--- "thumbnail" is your KEY. This is the caption for the image you choose as your thumbnail.
        isPortrait: true,                      <--- [OPTIONAL] set this value if the thumbnail photo is in portrait mode. 
        images: {                              <--- "images" is your KEY. Here you will store the captions for each image.
            img_2: "",                         <--- "img_2" is your KEY. Make sure that this matches with what you are saving your image file as in your assets folder!
                                                        DO NOT include the thumbnail image caption here! That should go under the "thumbnail" field.
                                                        If you don't want a caption for a specific image, just leave the caption as empty quotes "". 
                                                        The code will only load images which have a matching key pairing here. 
                                                        For example, if you have 8 portraits but only "img_2" and "img_3", your gallery will only have those two images
                                                            (not including the thumbnail image).
            img_3: "",
            .
            .
            .
            img_x: ""
        }   
    }
*
------------------------------------------------------------------------------------ */

const brand_name = "rosefilmm";
const navbar_content_1 = "Portfolio";
const navbar_content_2 = "Contact & Booking";

const title = "rosefilmm photography";
const bio = "My name is Sabrina and I am a freelance photographer located in Manhattan, NYC. My web designer is pretty cool but she sucks at writing bios, so I'll have to update this soon."
const bio_button = "View Portfolio";

const contact_info_header = "Let's Get In Touch!";
const contact_info_text = "Ready to capture your special moments with us? Send us a message and we will get back to you as soon as possible!";
const contact_info_name = "Your full name please";
const contact_info_email = "Your email";
const contact_info_phone = "Your phone number";
const contact_info_message = "Please provide some preliminary information so I can begin brainstorming!";
const contact_button = "Send Request";

/* Chnage to true if you want to show captions on images. NO QUOTATIONS. Keep the semi-colon at the end. */
const showCaptions = false;
// const showInstagram = "";
// const showFacebook = "display:none;"
// const showTiktok = "display:none;"

const copyright = "Copyright &copy; 2022 - rosefilmm";
const last_updated = "Last Updated: June 2022 - Cynthia Chang";

const projects = {
    "portraits": {
        title: "project 0 title",
        subtitle: "project 0 subtitle",
        thumbnail: "thumbnail image caption",
        images: {
            img_2: "image caption",
            img_3: "image caption",
            img_4: "",
            img_5: ""
        }
    },
    "wedding_2": {
        title: "project 3 title",
        subtitle: "project 3 subtitle",
        thumbnail: "thumbnail image caption",
        isPortrait: true,
        images: {
            img_2: "",
            img_3: "",
            img_4: "",
            img_5: "",
            img_6: "",
            img_7: "",
            img_8: "",
            img_9: ""
        }
    },
    "graduation_22": {
        title: "Click to see more grad photos!",
        subtitle: "Click to see more grad photos!",
        thumbnail: "thumbnail image caption",
        isPortrait: true,
        images: {
            img_2: "",
            img_3: "3rd image caption",
            img_4: "",
            img_5: "",
            img_6: "",
            img_7: ""
        }
    },
    "wedding_1": {
        title: "project 1 title",
        subtitle: "project 1 subtitle",
        thumbnail: "thumbnail image caption",
        images: {
            img_2: "",
            img_3: "",
            img_4: "",
            img_5: ""
        }
    },
    "family_1": {
        title: "project 2 title",
        subtitle: "project 2 subtitle",
        thumbnail: "thumbnail image caption",
        images: {
            img_2: "",
            img_3: "",
            img_4: "",
            img_5: "", 
            img_6: ""
        }
    },
    "wedding_3": {
        title: "project 4 title",
        subtitle: "project 4 subtitle",
        thumbnail: "thumbnail image caption",
        images: {
            img_2: "",
            img_3: "",
            img_4: "caption",
            img_5: "",
            img_6: ""
        }
    }
    // "empty template": {
    //     title: "".
    //     subtitle: "",
    //     thumbnail: "",
    //     images: {
    //         sometitle: ""
    //     }
    // }
};