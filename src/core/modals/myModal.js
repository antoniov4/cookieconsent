import { ARIA_HIDDEN, BUTTON_TAG, CLICK_EVENT, DIV_TAG } from '../../utils/constants';
import { addClass, addClassPm, addEvent, appendChild, createNode, debug, fireEvent, getModalFocusableData, getSvgIcon, handleFocusTrap, setAttribute } from '../../utils/general';
import { guiManager } from '../../utils/gui-manager';
import { globalObj } from '../global';
import QRCode from 'qrcode';

/**
 * Generates custom modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createMyModal = async (api, createMainContainer) => {
    const state =  globalObj._state;
    const dom = globalObj._dom;

    const { hideMyModal} = api;

    const titleData = 'Manage Cookies with BTS',
        closeIconLabel = 'Close',
        description = 'This is a custom modal.';

    if(!dom._mmContainer) {
        dom._mmContainer = createNode(DIV_TAG);
        addClass(dom._mmContainer, 'mm-wrapper');

        
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
        addClassPm(dom._mmBody, 'body');

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

    //Add a loading message
    const loadingMessage = createNode('p');
    addClass(loadingMessage, 'loading-message');
    loadingMessage.innerHTML = 'Loading...';
    appendChild(dom._mmBody, loadingMessage);


    //Fetch data
    const request1 = fetch('https://669990df2069c438cd729c13.mockapi.io/api/test1/randomNames');
    const request2 = fetch('https://669990df2069c438cd729c13.mockapi.io/api/test1/endpoint1');
    


    Promise.all([request1, request2])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(([data1, data2]) => {
            console.log(data1, data2);
            //Remove loading message
            dom._mmBody.removeChild(loadingMessage);

            //Add QR code
            const qrCode = createNode('canvas');
            //add class qr-code
            qrCode.classList.add('qr-code');
            qrCode.id = 'qrcode';
            appendChild(dom._mmBody, qrCode);
            QRCode.toCanvas(qrCode, JSON.stringify({'names':data1,'strings':data2}), { width: 350 });

        })
        .catch(error => {
            console.error(error);
        });

    
    if (dom._mmNewBody) {
        dom._mm.replaceChild(dom._mmNewBody, dom._mmBody);
        dom._mmBody = dom._mmNewBody;
    }

    guiManager(2);

    if (!state._myModalExists) {
        state._myModalExists = true;

        debug('CookieConsent [HTML] created', 'my-modal');

        fireEvent(globalObj._customEvents._onModalReady, 'my-modal', dom._mm);
        createMainContainer(api);
        appendChild(dom._ccMain, dom._mmContainer);
       
        setTimeout(() => addClass(dom._mmContainer, 'cc--anim'), 100);
    }

};
