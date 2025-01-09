import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export function InfoLines({
    startVal, 
    quantity, 
    offset, 
    count, 
    onValClick
} : {
    startVal: number, 
    quantity: number, 
    offset: number,
    count: number, 
    onValClick: (e: any) => void
}
) {
    const dirStr = offset > 0? "Gain": "Loss";
    const gainLossCls = offset > 0? "gain": "loss";

    const shares = quantity * 100;
    const startTotal = startVal * shares;
    const rows = [];
    for (let i=1; i < count; i++) {
        let val = startVal + (i * offset);
        if (val <= 0) {
            break;
        }
        const gain = (val * shares) - startTotal;
        const absGain = Math.abs(gain);
        const percentGain = ((val - startVal) / startVal) * 100;
        rows.push({
            val: Number(val).toFixed(2),
            gain: gain < 0 ? 
                    "- $" + Number(absGain).toFixed(2) : 
                    "$" + Number(absGain).toFixed(2),
            percent: Number(percentGain).toFixed(2)
        })
    }

    return (
        <Paper sx={{padding: 1, margin: 1}}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Price</TableCell>
                        <TableCell>$ {dirStr}</TableCell>
                        <TableCell>% {dirStr}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((data) => (
                        <TableRow key={data.val}>
                            <TableCell 
                                className="value"
                                onClick={(e) => {onValClick(data.val)}}
                            >
                                $ {data.val}
                            </TableCell>
                            <TableCell className={"dollar dollar-" + gainLossCls}>
                                {data.gain}
                            </TableCell>
                            <TableCell className={"percentage percent-" + gainLossCls}>
                                {data.percent} %
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
