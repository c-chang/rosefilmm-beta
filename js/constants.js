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
------------------------------------------------------------------------------------ */
const site_tab = "rosefilmm photos";
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
const thankyou_message = "Request received! We look forward to connecting with you."

/* ------------------------------------------------------------- 
SETTINGS: 
Below are settings for showing different things. Change to true if you want to enable them. NO QUOTATIONS. Keep the semi-colon at the end. 
    * showCaptions = true;          <--- if you want images to have captions upon clicking into each gallery.

    * showInstagram = true;         <--- if you want the Instagram icon to show in the site footer. Make sure you have a valid site link attached to instagramLink! 
    * showFacebook = true;          <--- if you want the Facebook icon to show in the site footer. Make sure you have a valid site link attached to facebookLink! 
    * showTiktok = true;            <--- if you want the TikTok icon to show in the site footer. Make sure you have a valid site link attached to tiktokLink! 
------------------------------------------------------------- */
const showCaptions = true;

const showInstagram = true;
const instagramLink = "https://www.instagram.com/studiosabrina__";

const showFacebook = true;
const facebookLink = "";

const showTiktok = false;
const tiktokLink = "";

const copyright = "Copyright &copy; 2022 - rosefilmm";
const last_updated = "Last Updated: June 2022";

/* -------------------------------------------------------------
ADDING IMAGES:
    Upload your set(s) of images as .jpg in separated folders, under ASSETS > IMG > PORTFOLIO.

    For the gallery thumbnail hover title and subtitle, you need to uncomment new sections in the "projects" dictionary below, and add your title / subtitle in the quotes.
    See the "empty template" section at the very bottom. 
    Add the caption text for each image here as well. Make sure to match the image filename to the indicated caption key.

For Example:
"portraits": {                             < --- "portraits" is your folder name in assets > img > portfolio.
    title: "portraits thumbnail title",    < --- "title" is what is shown in all caps light grey on the main page, upon hovering over the thumbnail image. 
                                                        Here it will be "PORTRAITS THUMBNAIL TITLE"
    subtitle: "",                          < --- "subtitle" is what is shown in sentence case white on the main page, under the title (if title exists).
                                                        Here it will be nothing.
    thumbnail: "",                         < --- "thumbnail" is the caption for the image you choose as your thumbnail. It will only be shown upon clicking into the gallery.
                                                        Here it will be nothing.
    isPortrait: true,                      < --- [OPTIONAL] set this value if the thumbnail photo is in portrait mode.
    images: {                              < --- "images" is your KEY.Here you will store the captions for each image.
        img_2: "",                         < --- "img_2" is your KEY.Make sure that this matches with what you are saving your image file as in your project folder!
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
------------------------------------------------------------- */
const projects = {
    "portraits": {
        title: "Portraits",
        subtitle: "click to see more",
        thumbnail: "web designer's first time in NYC. shot on iPhone 11",
        images: {
            img_2: "",
            img_3: "",
            img_4: "",
            img_5: ""
        }
    },
    "wedding_2": {
        title: "project 3 title",
        subtitle: "project 3 subtitle",
        thumbnail: "",
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
        title: "Graduation",
        subtitle: "click to see more",
        thumbnail: "",
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
        subtitle: "click to see more",
        thumbnail: "",
        images: {
            img_2: "",
            img_3: "",
            img_4: "",
            img_5: ""
        }
    },
    "family_1": {
        title: "family portraits",
        subtitle: "click to see more",
        thumbnail: "",
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
        thumbnail: "",
        images: {
            img_2: "",
            img_3: "",
            img_4: "caption",
            img_5: "",
            img_6: ""
        }
    }
    /* Below: Anything in the <carats> is something to be replaced. For example, "<folder name>" should be renamed to it's matching folder, like "wedding_6"*/
    // "<folder name>": {
    //     title: "".
    //     subtitle: "",
    //     thumbnail: "",
    //     images: {
    //         <filename>: "",
    //         <filename>: "",
    //         <filename>: "",
    //         <filename>: ""
    //     }
    // }
};
