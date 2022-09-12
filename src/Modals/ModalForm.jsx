import emailjs from "emailjs-com";

const ModalForm = (props) => {
  const { handleModalState, handleModalStateOnKeyDown } = props;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_inaxbvg", "template_t8m8ggn", e.target, "4mo4_gM5t_ewavMxc").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="form-container display-none" tabIndex={0} onKeyDown={handleModalStateOnKeyDown}>
      <div className="modal-form-container">
        <div className="close-button" onClick={handleModalState}>
          <div className="close-line close-line-1"></div>
          <div className="close-line close-line-2"></div>
        </div>
        <div className="left-side">
          <div className="left-side__img box-shadow">
            <div className="left-side__title">
              <p>Let's do bussines</p>
            </div>
          </div>
          <form id="the-form" className="the-form" onSubmit={sendEmail}>
            <input className="the-form__name" type="text" name="user_name" placeholder="Name" required minLength="3" />
            <input className="the-form__email" type="email" name="user_email" placeholder="Email" required />
            <textarea
              className="the-form__message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              form="the-form"
            ></textarea>
            <input className="the-form__button" type="submit" name="submit" value="Send Message" />
          </form>
        </div>
        <div className="right-side">
          <div className="right-side__img box-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
