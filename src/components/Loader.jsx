import React from 'react';

const Loader = () => {

    setTimeout(() => {
        var loader = document.getElementById('loader_id');
		loader.style.opacity = '0';
		loader.style.zIndex = '-1';
    }, 1000);
    
    setTimeout(() => {
        var loader = document.getElementById('loader_id');
        loader.style.display = 'none';
    }, 2600);

    return (
        <div className="loader_div" id="loader_id">
            <div className="loader_con">
                <div className="loader_box">
                    <div style={{left:'27px', top:'27px', animationDelay:'0s'}}></div>
                    <div style={{left:'43px', top:'27px', animationDelay:'0.125s'}}></div>
                    <div style={{left:'59px', top:'27px', animationDelay:'0.25s'}}></div>
                    <div style={{left:'27px', top:'43px', animationDelay:'0.875s'}}></div>
                    <div style={{left:'59px', top:'43px', animationDelay:'0.375s'}}></div>
                    <div style={{left:'27px', top:'59px', animationDelay:'0.75s'}}></div>
                    <div style={{left:'43px', top:'59px', animationDelay:'0.625s'}}></div>
                    <div style={{left:'59px', top:'59px', animationDelay:'0.5s'}}></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;