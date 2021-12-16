import AbstractShareButton from "./AbstractShareButton";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter";
import { DOMEventHandler } from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();


const shareButtonTwitter: AbstractShareButton = new ShareButtonTwitter(eventHandler,".btn-tiwitter", "http:/www.youtube.com/rodrigobranas",);
shareButtonTwitter.bind();
const shareButtonFacebook: AbstractShareButton = new ShareButtonFacebook(eventHandler,".btn-facebook", "http:/www.youtube.com/rodrigobranas", );
shareButtonFacebook.bind();
const shareButtonLinkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler,".btn-linkedin", "http:/www.youtube.com/rodrigobranas", );
shareButtonLinkedin.bind();
const shareButtonPrint: AbstractShareButton = new ShareButtonPrint(eventHandler,".btn-print");
shareButtonPrint.bind();