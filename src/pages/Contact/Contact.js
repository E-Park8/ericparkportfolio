import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

const Contact = () => {
  return (
    <Container>
      <Form className="row">
        <section className="col-md-2"></section>
        <section id="content" className="text-center col-md-8">
          <h1>Contact</h1>
          <hr />
          <p> <b>Email Address:</b> epark0995@gmail.com</p>
          <p> <b>Phone Number:</b> (562) 519-8425 </p>
          <FormGroup className="form-group">
            <Label htmlFor="exampleFormControlInput1">Name</Label>
            <Input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Full Name Here" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="exampleFormControlInput1">Email address</Label>
            <Input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="exampleFormControlTextarea1">Message</Label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Want to talk? Send me a message!"></textarea>
          </FormGroup>
          <Button id="Submit" className="btn btn-success" type="submit">Submit</Button>
        </section>
      </Form>
    </Container>
  )
}

export default Contact