import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'
const Details = (props) => {
    const {header, head_title, description,price,price_per_class } = props.info 
    console.log(props)
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 wid p-8">

            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="text-center">
                    <h1 className="text-4xl text-center my-3">{header}</h1>
                    <h2 className="text-xl ">{head_title}</h2>
                </div>
                <div >
                <span className="text-center flex justify-around  my-3">
                    <svg  width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#germany-flag)"><path d="M1.742 37.74C5.698 48.4 15.96 56 28 56s22.302-7.599 26.258-18.26L28 35.303 1.742 37.74z" fill="#F2C55D"></path><path d="M28 0C15.961 0 5.698 7.598 1.742 18.26L28 20.697l26.258-2.435C50.302 7.599 40.04 0 28 0z"></path><path d="M1.742 18.26A27.94 27.94 0 000 28c0 3.425.616 6.706 1.742 9.74h52.517A27.94 27.94 0 0056 28c0-3.425-.616-6.706-1.742-9.74H1.742z" fill="#E74A3F"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" strokeOpacity=".1" fill="none"></path></g><defs><clipPath id="germany-flag"><path fill="#fff" d="M0 0h56v56H0z"></path></clipPath></defs></svg>
                    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#fff"></path><path d="M28 40.174c6.724 0 12.174-5.45 12.174-12.174 0-6.723-5.45-12.174-12.174-12.174-6.723 0-12.174 5.45-12.174 12.174 0 6.723 5.45 12.174 12.174 12.174z" fill="#E74A3F"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" strokeOpacity=".1" fill="none"></path></svg>
                    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#uk-flag)"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#fff"></path><path d="M5.788 10.953a27.898 27.898 0 00-4.823 9.743H15.53l-9.743-9.743zM55.035 20.696a27.901 27.901 0 00-4.823-9.743l-9.743 9.743h14.566zM.965 35.304a27.9 27.9 0 004.823 9.743l9.743-9.742H.965zM45.047 5.788A27.9 27.9 0 0035.304.965V15.53l9.743-9.743zM10.953 50.212a27.9 27.9 0 009.743 4.823V40.47l-9.743 9.743zM20.696.965a27.9 27.9 0 00-9.743 4.823l9.743 9.743V.965zM35.304 55.035a27.9 27.9 0 009.743-4.823l-9.743-9.743v14.566zM40.47 35.304l9.742 9.743a27.9 27.9 0 004.823-9.742H40.47z" fill="#154CCF"></path><path d="M55.763 24.348h-24.11V.237a28.28 28.28 0 00-7.305 0v24.11H.237a28.28 28.28 0 000 7.305h24.11v24.111a28.285 28.285 0 007.305 0v-24.11h24.111a28.285 28.285 0 000-7.305z" fill="#E74A3F"></path><path d="M35.304 35.304L47.8 47.8a28.082 28.082 0 001.646-1.797L38.748 35.303h-3.444zM20.696 35.304L8.2 47.8a28.077 28.077 0 001.798 1.646l10.697-10.697v-3.444zM20.696 20.696L8.2 8.2a28.07 28.07 0 00-1.646 1.798l10.697 10.697h3.444zM35.304 20.696L47.8 8.2a28.068 28.068 0 00-1.797-1.646L35.304 17.253v3.443z" fill="#E74A3F"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" strokeOpacity=".1" fill="none"></path></g><defs><clipPath id="uk-flag"><path fill="#fff" d="M0 0h56v56H0z"></path></clipPath></defs></svg>
                    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#fff"></path><path d="M56 28c0-12.039-7.598-22.302-18.26-26.258v52.517C48.401 50.301 56 40.038 56 28z" fill="#E74A3F"></path><path d="M0 28c0 12.039 7.598 22.302 18.26 26.258V1.742C7.599 5.698 0 15.96 0 28z" fill="#449862"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" strokeOpacity=".1" fill="none"></path></g></svg>
                    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z" fill="#E74A3F"></path><path d="M15.323 17.04l2.418 7.438h7.82l-6.322 4.605 2.417 7.437-6.333-4.593-6.332 4.593 2.428-7.437-6.333-4.605h7.82l2.417-7.437zM33.195 43.367l-1.848-2.275-2.735 1.061 1.586-2.46-1.848-2.287 2.833.755L32.78 35.7l.153 2.931 2.843.755-2.745 1.05.164 2.931zM36.87 36.695l.875-2.8L35.35 32.2l2.931-.044.864-2.8.952 2.778 2.931-.032-2.351 1.75.94 2.778-2.395-1.696-2.352 1.761zM41.825 20.552l-1.29 2.636 2.1 2.045-2.9-.416-1.29 2.625-.503-2.887-2.91-.416 2.604-1.367-.503-2.898 2.1 2.045 2.592-1.367zM33.272 12.567l-.219 2.92 2.724 1.105-2.855.7-.208 2.931-1.542-2.493-2.855.7 1.892-2.242-1.553-2.483 2.724 1.104 1.892-2.242z" fill="#F2C55D"></path><path d="M55.5 28c0 15.188-12.312 27.5-27.5 27.5S.5 43.188.5 28 12.812.5 28 .5 55.5 12.812 55.5 28z" stroke="#000" strokeOpacity=".1" fill="none"></path></svg>
                    </span>
                    <span>
                    
                    </span>
                </div>

                <div className="items-center text-center leading-tight p-2 md:p-4 mb-4">
                <p className="text-4xl">{price}</p>
                <p className="text-xl">{price_per_class}</p>
                </div>
                <article>

                    <div className="divide-y divide-light-blue-400 ...">
                    <div>
                    <p className="text-lg px-2"> <span><i className="fas fa-check mr-2"></i></span>{description.point_1}</p>
                    </div>
                    <div><p className="text-lg px-2 py-2"><span><i className="fas fa-check mr-2"></i></span>{description.point_2} </p></div>
                    <div><p className="text-lg px-2"> <span><i className="fas fa-check mr-2"></i></span>{description.point_3}</p></div>
                    </div>
                    {/* <hr /> */}
                    

                </article>

                <footer className="items-center  leading-none p-2 md:p-4">
                    <div className="my-8 text-center">
                    <Link className="text-2xl bg-red-200 px-16 py-2 text-center monthly text-white" to="/payment">Choose your plan</Link>
                    </div>
                    <div className="text-center my-4">
                    <Link className="text-2xl  px-16 py-2 text-center trial" to="/payment">Start free 7-day trial</Link>
                    </div>
                </footer>

            </article>
            {/* <!-- END Article --> */}

        </div>
    );
};

export default Details;