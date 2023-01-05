import './ContactForm.css'
import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Button from "react-bootstrap/Button";


function ContactForm() {
    const [verified, setverified] = useState(false);

    function onChange(value) {
        console.log("Captcha value:", value);
        setverified(true)
    }
    return (
        <>
            <div className='background'>
                <p className='text-styling text-alignment'>Home/<span style={{ color: "#7B7B7B" }}> Contact us </span></p>
                <h2 className='text-styling text-position' >Contact Us</h2>
            </div>
            <div className="wrapper">
                <div className="columns">
                    <div className="col col-50 text-align align-items">
                        Drop us a message, and <br /> we’ll get back  to you in no time.
                    </div>
                    <div className="col col-50 form-content">
                        <Card style={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto", border: "none", boxShadow: "none" }}>
                            <CardContent>
                                <form>
                                    <Grid container spacing={8}>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                required
                                                placeholder='Please enter you full name'
                                                id="name"
                                                label="Your Name"
                                                variant="standard"
                                                name="fullName"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                required
                                                placeholder='your organization name'
                                                id="organization"
                                                label="Organization Name"
                                                variant="standard"
                                                name="Organization"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                required
                                                placeholder='your Contact Number'
                                                id="number"
                                                label="Contact Number"
                                                variant="standard"
                                                name="number"
                                                type="number"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                required
                                                placeholder='your Email Id'
                                                id="email"
                                                label="Email ID"
                                                variant="standard"
                                                name="Organization"
                                                type="email"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                required
                                                id="message"
                                                label="Message"
                                                multiline
                                                rows={3}
                                                defaultValue=""
                                                variant="standard"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <ReCAPTCHA
                                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                onChange={onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button className="button" type='submit' variant="outline-dark" disabled={!verified}>
                                                Submit
                                            </Button>
                                            <div className="message">
                                                <div className="success" id="success">Your Message Successfully Sent!</div>
                                                <div className="danger" id="danger">Feilds Can't be Empty!</div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;