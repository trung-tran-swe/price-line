import { useState } from "react";
import { Paper, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { InfoLines } from "./InfoLines";
import "./priceline.css";


function PriceLine() {
    const [strikePrice, setStrikePrice] = useState(0.25);
    const [quantity, setQuantity] = useState(10);
    const [offsetPrice, setOffsetPrice] = useState(0.01);
    const [count, setCount] = useState(30);

    function setNewStrikePrice(val: number) {
        setStrikePrice(Number(val));
    }

    return (
        <div>
            <Paper elevation={2} sx={{padding: 2, margin: 1}}>
                <Grid container direction="row" spacing={1}>
                    <Grid>
                        <TextField
                            label="Strike Price"
                            type="number"
                            slotProps={{htmlInput: {step: offsetPrice, min: 0}}}
                            size="small" sx={{width: 100}}
                            value={strikePrice} 
                            onChange={(e: any) => setStrikePrice(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                            label="Quantity"
                            type="number"
                            slotProps={{htmlInput: {min: 1}}}
                            size="small" sx={{width: 100}}
                            value={quantity}
                            onChange={(e: any) => setQuantity(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                            label="Price Offset" 
                            type="number"
                            slotProps={{htmlInput: {step: 0.01, min: 0.01}}}
                            size="small" sx={{width: 100}}
                            value={offsetPrice}
                            onChange={(e: any) => setOffsetPrice(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                            label="Count" 
                            type="number"
                            slotProps={{htmlInput: {min: 10}}}
                            size="small" sx={{width: 80}}
                            value={count}
                            onChange={(e: any) => setCount(Number(e.target.value))}
                        />
                    </Grid>
                    <Grid size={12}>
                        Cost: ${Number(strikePrice * quantity * 100).toFixed(2)}
                    </Grid>
                </Grid>
            </Paper>

            <Stack direction="row">
                <InfoLines
                    startVal={strikePrice}
                    quantity={quantity}
                    offset={offsetPrice}
                    count={count}
                    onValClick={setNewStrikePrice}
                />
                <InfoLines
                    startVal={strikePrice}
                    quantity={quantity}
                    offset={offsetPrice * -1}
                    count={count}
                    onValClick={setNewStrikePrice}
                />
            </Stack>
        </div>
    );
}

export default PriceLine;
