import React from 'react';
import {AreaChart, Area, Tooltip } from 'recharts';

const PanelAreaChart = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,

        },
        {
            name: "Page B",
            uv: 3000,

        },
        {
            name: "Page C",
            uv: 2000,

        },
        {
            name: "Page D",
            uv: 2780,

        }

    ];
    return (
        <>
            <AreaChart
                width={140}
                height={60}
                data={data}

            >
                <Tooltip/>
                <Area type="monotone" dataKey="uv"   fill="#8884d8"/>
            </AreaChart>
        </>
    );
};

export default PanelAreaChart;