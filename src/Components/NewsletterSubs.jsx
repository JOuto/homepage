import MailchimpSubscribe from 'react-mailchimp-subscribe';
import '../Page.css';

const NewsletterSubscribe = ({ setShowNewletterSubs }) => {
  return (
    <div>
      <div
        className='fullScreenDimmer'
        /* style={displayStyle}
      onClick={() => setFullScreenView(false)} */
      ></div>

      <div className='newsletterSubs'>
        <button
          className='newsLetterCloseButton'
          onClick={() => setShowNewletterSubs(false)}
        >
          x
        </button>
        <p>Subscribe for newsletter</p>
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
      </div>
    </div>
  );
};
export default NewsletterSubscribe;
