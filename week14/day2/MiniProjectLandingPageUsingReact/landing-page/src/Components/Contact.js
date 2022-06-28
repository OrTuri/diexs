import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Contact = () => {
  return (
    <>
      <h3>Contact Us</h3>
      <div className="row align-items-center mb-4">
        <div className="col-lg-5 text-start mb-4">
          <p>Contact us and we will get back to you in 24 hours</p>
          <div>
            <i class="fa-solid fa-location-dot me-2"></i>
            <span>Company Name</span>
          </div>
          <div>
            <i class="fa-solid fa-phone me-2"></i>
            <span>+972-7562983</span>
          </div>
          <div>
            <i class="fa-solid fa-envelope me-2"></i>
            <span>something@google.com</span>
          </div>
        </div>
        <div className="col-lg-7">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Comment">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              style={{ backgroundColor: "#ef5130", borderColor: "#ef5130" }}
            >
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
