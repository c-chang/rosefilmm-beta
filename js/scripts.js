/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
const projectTag = "project-";
const titleTag = "-title";
const subtitleTag = "-subtitle";

window.addEventListener('DOMContentLoaded', event => {
    const numProjects = Object.keys(projects).length;
    const needsCenter = numProjects % 2;
    let i = 0;
    for (id in projects) {
        if (needsCenter) {
            if (i === (numProjects - 1).toString()) {
                addToGallery(id, 'center');
            } else if (i % 2) {
                addToGallery(id, 'right');
            } else {
                addToGallery(id, 'left');
            }
        } else {
            if (i % 2) {
                addToGallery(id, 'right');
            } else {
                addToGallery(id, 'left');
            }
        }
        var simpleLightboxElements = `#portfolio a.project-${id}`;
        // Activate SimpleLightbox plugin for portfolio items
        new SimpleLightbox(simpleLightboxElements, { captionSelector: "self", captions: false });
        i += 1;
    }

    function addToGallery(index, location) {
        var gallery;
        var thumbnail = createProject(index);
        // createImageGallery(index);
        switch (location) {
            case 'center':
                gallery = document.getElementById("gallery-center");
                break;
            case 'right':
                gallery = document.getElementById("gallery-right");
                break;
            default:
                gallery = document.getElementById("gallery-left");
                break;
        }
        gallery.appendChild(thumbnail);
    }

    function createProject(index) {
        var project = document.createElement("div");
        project.id = `project-${index}`;
        project.classList.add("col-auto");
        
        var thumbnail = document.createElement("a");
        thumbnail.classList.add("portfolio-box",`project-${index}`);
        thumbnail.href = `assets/img/portfolio/fullsize/${index}/img_1.jpg`;
        thumbnail.title = "CATEGORY";
        thumbnail.innerHTML = `<img class="img-fluid" src="assets/img/portfolio/thumbnails/${index}.jpg" alt="..." />
                                    <div class="portfolio-box-caption">
                                        <div class="project-category text-white-50" id="project-${index}-title"></div>
                                        <div class="project-name" id="project-${index}-subtitle"></div>
                                    </div>`
        project.appendChild(thumbnail);
        return project;
    }

    function loadNavigationBar() {
        makeElementText(brand_name, "navbar-brand");
        makeElementText(navbar_content_1, "navbar-content-1");
        makeElementText(navbar_content_2, "navbar-content-2");
    }

    function loadBiography() {
        makeElementText(title, "title");
        makeElementText(bio, "bio");
        makeElementText(bio_button, "bio-button");
    }

    function loadContactInfo() {
        makeElementText(contact_info_header, "contact-info-header");
        makeElementText(contact_info_text, "contact-info-text");
        makeElementText(contact_info_name, "contact-info-name");
        makeElementText(contact_info_email, "contact-info-email");
        makeElementText(contact_info_phone, "contact-info-phone");
        makeElementText(contact_info_message, "contact-info-message");
        makeElementText(contact_button, "contact-button");
    }

    function loadPortfolio() {
        for (i in projects) {
            let html_title = getTitle(i);
            let html_subtitle = getSubtitle(i);
            if (html_title) {
                var project_title = projectTag + i.toString() + titleTag;
                makeElementText(html_title, project_title);
            }
            if (html_subtitle) {
                var project_subtitle = projectTag + i.toString() + subtitleTag;
                makeElementText(html_subtitle, project_subtitle);
            }
        }
    }

    function loadFooter() {
        makeElementText(copyright, "copyright");
        makeElementText(last_updated, "last-updated");
    }

    // Load the dynamic contents
    function loadContents() {
        loadNavigationBar();
        loadBiography();
        loadContactInfo();
        loadFooter();
        // loadPortfolio();
    }
    loadContents();

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function makeElementText(html, id) {
        let x = document.getElementById(id);
        x.innerHTML = html;
    }

    function getTitle(index) {
        if (projects[index]) {
            return projects[index].title;
        }
        return null;
    }

    function getSubtitle(index) {
        if (projects[index]) {
            return projects[index].subtitle;
        }
        return null;
    }
});
