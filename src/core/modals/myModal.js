import { DIV_TAG } from "../../utils/constants";
import { addClass, appendChild, debug, fireEvent, getModalFocusableData, handleFocusTrap } from "../../utils/general";
import { guiManager } from "../../utils/gui-manager";

/**
 * Generates custom modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createMyModal = (api, createMainContainer) => {
    console.log('createCustomModal');
    const state =  globalObj._state;
    const dom = globalObj._dom;

    const {hide, hideMyModal, showMyModal} = api;

    const titleData = "My Modal",
        closeIconLabel = "Close"
        description = 'This is a custom modal.';

    if(!dom._mmContainer) {
        dom._mmContainer = createNode(DIV_TAG)
        addClass(dom._mmContainer, "pm-wrapper");
        
        const mmOverlay = createNode('div');
        addClass(mmOverlay, 'pm-overlay');
        appendChild(dom._mmContainer, mmOverlay);
        
        /**
         * Hide modal when overlay is clicked
        */
       addEvent(mmOverlay, CLICK_EVENT, hideMyModal);
     

       //My modal

       dom._mm = createNode(DIV_TAG);

        addClass(dom._mm, 'pm');
        setAttribute(dom._mm, 'role', 'dialog');
        setAttribute(dom._mm, ARIA_HIDDEN, true);
        setAttribute(dom._mm, 'aria-modal', true);
        setAttribute(dom._mm, 'aria-labelledby', 'mm__title');

        // Hide preferences on 'esc' key press
        addEvent(dom._htmlDom, 'keydown', (event) => {
            if (event.keyCode === 27)
                hideMyModal();
        }, true);
        
        // Create header
        dom._mmHeader = createNode(DIV_TAG);
        addClassPm(dom._mmHeader, 'header');

        // Create title
        dom._mmTitle = createNode('h2');
        addClassPm(dom._mmTitle, 'title');
        dom._mmTitle.id = 'mm__title';

        // Create close button
        dom._mmCloseBtn = createNode(BUTTON_TAG);
        addClassPm(dom._mmCloseBtn, 'close-btn');
        setAttribute(dom._mmCloseBtn, 'aria-label', '');
        addEvent(dom._mmCloseBtn, CLICK_EVENT, hideMyModal);
       
        //Add svg icon to close button
        dom._mmFocusSpan = createNode('span');
        dom._mmFocusSpan.innerHTML = getSvgIcon();
        appendChild(dom._mmCloseBtn, dom._mmFocusSpan);

        // Add title and close button to header
        appendChild(dom._mmHeader, dom._mmTitle);
        appendChild(dom._mmHeader, dom._mmCloseBtn);

        // Create body
        dom._mmBody = createNode(DIV_TAG);
        addClassPm(dom._pmBody, 'body');

        appendChild(dom._mm, dom._mmHeader);
        appendChild(dom._mm, dom._mmBody);

        appendChild(dom._mmContainer, dom._mm);
    }else {
        dom._mmNewBody = createNode(DIV_TAG);
        addClassPm(dom._mmNewBody, 'body');
    }

    // Set title
    if (titleData) {
        dom._mmTitle.innerHTML = titleData;
    }

    // Set description
    if (description) {
        dom._mmBody.innerHTML = description;
    }

    
    if (dom._mmNewBody) {
        dom._mm.replaceChild(dom._mmNewBody, dom._mmBody);
        dom._mmBody = dom._mmNewBody;
    }

    guiManager(2);

    if (!state._myModalExists) {
        state._myModalExists = true;

        debug('CookieConsent [HTML] created', 'my-modal');

        //fireEvent(globalObj._customEvents._onModalReady, 'my-modal', dom._mm);
        createMainContainer(api);
        appendChild(dom._ccMain, dom._mmContainer);
       //handleFocusTrap(dom._mm);

        /**
         * Enable transition
         */
        setTimeout(() => addClass(dom._mmContainer, 'cc--anim'), 100);
    }

    getModalFocusableData(3);
};
