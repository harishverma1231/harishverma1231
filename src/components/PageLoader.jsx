import { useEffect, useState } from "react";

export default function PageLoader(){
    return (
        <div className='loader'>
            <div id='firstname'>
                <h2>Harish</h2>
            </div>
            <div id="hr">
                <div id="blob"></div>
            </div>
            <div id='lastname'>
                <h2>Verma</h2>
            </div>
        </div>
    )
}