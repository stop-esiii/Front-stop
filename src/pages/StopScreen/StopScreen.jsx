import React from "react";
import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function StopScreen() {
        const navigate = useNavigate();

        return(
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundColor: '#ffc94d',
                        flexDirection: 'column',
                }}>
                        <Box sx={{
                                width: 300,
                                height: 300,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ffc94d',
                                border: '15px solid #f74440',
                                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                        }}> <Typography sx={{fontSize: "48px", color: "#fff", fontWeight: "bold"}}>STOP</Typography>

                        </Box>

                </Box>
        )
}
export default StopScreen;