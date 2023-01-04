import "./AddressDetail.css"
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import device from "./assets/path7.png"
import linkedin from "./assets/linkedin-mob.png"
import tweeter from "./assets/Vector.png"
import youtube from "./assets/youtube-mob.png"
import advent from "./assets/advent.png"

function AddressDetail() {
    return (
        <div>
            <div className='location'>
            </div>
            <div className="wrapper">
                <div className="columns">
                    <div className="col col-50">
                        <img className="company-picture" src={advent} alt="company" />
                        <Card className="card-design alignment" sx={{ maxWidth: 545 }}>
                            <CardActionArea >
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Advent Chembio Pvt. Ltd.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <img src={device} alt="hello" />
                                        <p className="card-item">+91 7777084837</p>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton aria-label="linkedin">
                                            <img src={linkedin} alt="linkedin" />
                                        </IconButton>
                                        <IconButton aria-label="tweeter">
                                            <img src={tweeter} alt="tweeter" />
                                        </IconButton>
                                        <IconButton aria-label="youtube">
                                            <img src={youtube} alt="youtube" />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="columns alignment-card">
                    <div className="col col-50">
                        <Card className="card-design alignment-col-2 " sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        FDA approved manufacturing facility
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        W-279, MIDC, TTC Rabale, Navi Mumbai - 400701, Bharat
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <img src={device} alt="hello" />
                                        <p className="card-item">+91 7777084837</p>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col col-50">
                        <Card className="card-design" sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Central Warehouse
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Sri Arihant Complex, Building No.I-12 Gala No. 1 to 5, Kalher village, at Kopar Bhiwandi, Thane - 421302
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <img src={device} alt="hello" />
                                        <p className="card-item">+91 7777084837</p>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressDetail;