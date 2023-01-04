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

    // function refreshPage() {
    //     window.location.reload(true);
    // }
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


// <div className='container'>
//     <div className='row'>
//         <div class="text-styling col-33">
//             Drop us a message, and we’ll get back to you in no time.
//         </div>
//         <div className='col-33'>
//             <Box
//                 component="form"
//                 sx={{
//                     '& .MuiTextField-root': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <div>
//                     <TextField
//                         error
//                         id="outlined-error"
//                         label="Error"
//                         defaultValue="Hello World"
//                     />
//                     <TextField
//                         error
//                         id="outlined-error-helper-text"
//                         label="Error"
//                         defaultValue="Hello World"
//                         helperText="Incorrect entry."
//                     />
//                 </div>
//                 <div>
//                     <TextField
//                         error
//                         id="filled-error"
//                         label="Error"
//                         defaultValue="Hello World"
//                         variant="filled"
//                     />
//                     <TextField
//                         error
//                         id="filled-error-helper-text"
//                         label="Error"
//                         defaultValue="Hello World"
//                         helperText="Incorrect entry."
//                         variant="filled"
//                     />
//                 </div>
//                 <div>
//                     <TextField
//                         error
//                         id="standard-error"
//                         label="Error"
//                         defaultValue="Hello World"
//                         variant="standard"
//                     />
//                     <TextField
//                         error
//                         id="standard-error-helper-text"
//                         label="Error"
//                         defaultValue="Hello World"
//                         helperText="Incorrect entry."
//                         variant="standard"
//                     />
//                 </div>

//             </Box>
//         </div>
//     </div>
//     <div class="col-33">
//     </div>
// </div>

// <div className="wrapper">
//     <div className="columns">
//         <div className="col col-50">
//             Drop us a message, and we’ll get back to you in no time.
//         </div>
//         <div className="col col-50">
//             <div id="registration-page" className='form'>
//                 <Box
//                     onSubmit={(onSubmit)}
//                     className="signup-form"
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <div className="form-body">

//                         <div className="row">
//                             <div className='input-group'>
//                                 <TextField
//                                     required
//                                     placeholder='Please enter you full name'
//                                     id="standard-required"
//                                     label="Your Name"
//                                     variant="standard"
//                                     name="fullName"
//                                 />
//                                 <TextField
//                                     required
//                                     id="standard-required"
//                                     label="Organization Name"
//                                     variant="standard"
//                                 />
//                             </div>
//                             <div className='input-group'>
//                                 <TextField
//                                     required
//                                     id="standard-required"
//                                     label="Contact Number"
//                                     defaultValue=""
//                                     variant="standard"
//                                 />
//                                 <TextField
//                                     required
//                                     id="standard-required"
//                                     label="Email Id"
//                                     defaultValue=""
//                                     variant="standard"
//                                 />
//                             </div>
//                             <div className='input-group'>
//                                 <TextField
//                                     required
//                                     id="standard-multiline-static"
//                                     label="Message"
//                                     multiline
//                                     rows={3}
//                                     defaultValue=""
//                                     variant="standard"
//                                 />
//                                 <ReCAPTCHA
//                                     sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                                     onChange={onChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className='input-group'>
//                             <Button type='submit' variant="outline-dark" disabled={!verified}>
//                                 Submit
//                             </Button>
//                         </div>

//                     </div>
//                 </Box>
//             </div>
//         </div>
//     </div>
//     </div>