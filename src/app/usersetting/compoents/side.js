'use client'
import * as React from "react";
import "../styles/side.css";
import { icon } from "./icon";




const Siderbar = ({ onPageChange}) =>{
    
    React.useEffect(() =>{
        icon();
    },[]);
    
    

    const handleButtonClick = (page) => {
        onPageChange(page);
    }
    
        
    
    
    return (
    <div >
       <aside>
    
    <nav>                                         
        <button className="home">
            <div>
                <div className="icon">
                    <svg className="house" viewBox="0 0 24 24">
                        <g className="outline">
                            <path d="M22.601 7.49432L12.3602 1.97113C12.1341 1.84963 11.8635 1.84963 11.6375 1.97113L1.3987 7.49432C1.02974 7.69378 0.89188 8.15447 1.09157 8.52403C1.22841 8.77716 1.49094 8.92194 1.76057 8.92194C1.8822 8.92194 2.00688 8.89157 2.12142 8.83082L2.94754 8.38532L4.59875 20.0422C4.81567 21.2724 5.92459 22.13 7.29301 22.13H16.7016C18.072 22.13 19.1799 21.2714 19.4009 20.0169L21.0491 8.38329L21.8782 8.83082C22.2472 9.02623 22.7094 8.89157 22.9091 8.52302C23.1078 8.15548 22.9699 7.69479 22.601 7.49432V7.49432ZM17.8997 19.779C17.7913 20.3926 17.1871 20.6113 16.7036 20.6113H7.29503C6.80849 20.6113 6.20537 20.3926 6.10097 19.8033L4.37575 7.61582L11.9983 3.50304L19.6229 7.61379L17.8997 19.779V19.779Z" />
                            <path d="M8.21973 12.3C8.21973 14.384 9.91473 16.08 11.9997 16.08C14.0847 16.08 15.7797 14.384 15.7797 12.3C15.7797 10.216 14.0847 8.52002 11.9997 8.52002C9.91473 8.52002 8.21973 10.216 8.21973 12.3ZM14.2797 12.3C14.2797 13.558 13.2577 14.58 11.9997 14.58C10.7417 14.58 9.71973 13.558 9.71973 12.3C9.71973 11.042 10.7417 10.02 11.9997 10.02C13.2577 10.02 14.2797 11.042 14.2797 12.3Z" />
                        </g>
                        <path className="fill" d="M22.4824 7.448L12.4695 1.995C12.1753 1.835 11.8215 1.835 11.5282 1.995L1.52027 7.448C1.0387 7.712 0.859349 8.318 1.11896 8.804C1.29732 9.139 1.63918 9.329 1.99094 9.329C2.14948 9.329 2.31199 9.291 2.46161 9.209L3.18892 8.813L4.76442 20.063C4.97846 21.277 6.06248 22.125 7.40018 22.125H16.5976C17.9353 22.125 19.0193 21.277 19.2353 20.037L20.8088 8.812L21.5391 9.21C22.0197 9.473 22.6212 9.292 22.8808 8.806C23.1414 8.32 22.96 7.713 22.4805 7.451L22.4824 7.448ZM11.9989 15.533C10.2202 15.533 8.7785 14.078 8.7785 12.283C8.7785 10.488 10.2202 9.033 11.9989 9.033C13.7775 9.033 15.2192 10.488 15.2192 12.283C15.2192 14.078 13.7775 15.533 11.9989 15.533Z" />
                    </svg>
                    <svg className="feather left" viewBox="0 0 14 7">
                        <path d="M9.16667 1L13.5 3.94648C11.6429 6.89297 4.83333 6.89297 0.5 2.47324C3.59524 1 6.69048 2.47324 6.69048 2.47324L5.45238 1L9.16667 2.47324V1Z" />
                        <path d="M12 4.1C9 4.65 4.5 3.5 4.5 3.5" />
                    </svg>
                    <svg className="feather right" viewBox="0 0 14 7">
                        <path d="M4.83333 1L0.499999 3.94648C2.35714 6.89297 9.16667 6.89297 13.5 2.47324C10.4048 1 7.30952 2.47324 7.30952 2.47324L8.54762 1L4.83333 2.47324V1Z" />
                        <path d="M2 4.1C5 4.65 9.5 3.5 9.5 3.5" />
                    </svg>
                </div>
                Home
            </div>
        </button>

        <button onClick={() => handleButtonClick('profile')} className="profile">
            <div>
                <div className="icon">
                    <svg viewBox="0 0 24 24">
                        <path className="head" d="M16 7C16 9.76142 15.7614 11 12 11C8.23858 11 8 9.76142 8 7C8 4.23858 9.23858 2.25 12 2.25C14.7614 2.25 16 4.23858 16 7Z" />
                        <path d="M11.9999 14C15.9613 14 18.962 16.5405 19.4799
                         19.5352C19.6485 20.5106 18.7676 21.25 17.7778
                          21.25H6.22181C5.23198 21.25 4.35113 20.5106
                           4.51978 19.5352C5.03763 16.5405 8.03845 14 11.9999 14Z" />
                    </svg>
                </div>
                Profile
            </div>
        </button>

        <button onClick={() => handleButtonClick('preference')} className="explore">
            <div>
                <div className="icon">
                    <svg viewBox="0 0 24 24">
                        <path className="outline" d="M20.1215 3.68027C20.2477 3.62291 20.3775 3.75271 20.3202 3.87889L15.4927 14.4992C15.2926 14.9394 14.9398 15.2923 14.4996 15.4924L3.87927 20.3198C3.7531 20.3771 3.6233 20.2473 3.68065 20.1212L8.50808 9.50082C8.70818 9.0606 9.06099 8.70779 9.5012 8.50769L20.1215 3.68027Z" />
                        <path className="triangle" d="M14.6722 14.6718L9.32861 9.32822C9.08175 9.08137 9.15745 8.66395 9.47526 8.51949L20.1215 3.68027C20.2477 3.62291 20.3775 3.75271 20.3202 3.87889L15.4809 14.5252C15.3365 14.843 14.9191 14.9187 14.6722 14.6718Z" />
                    </svg>
                </div>
                Preference
            </div>
        </button>
        



        <button className="messages">
            <div>
                <div className="icon">
                    <div className="top">
                        <svg className="default" viewBox="0 0 24 13">
                            <path d="M11.1321 11.4858L11.133 11.4864C11.6584 11.8379 12.3416 11.8379 12.867 11.4864L22.417 5.09804L22.75 4.87529V4.47466V4.2579C22.75 2.60182 21.4067 1.25 19.75 1.25H4.25C2.59331 1.25 1.25 2.60182 1.25 4.2579V4.45559V4.85556L1.58214 5.0784L11.1321 11.4858Z" />
                        </svg>
                        <svg className="inner" viewBox="0 0 24 13">
                            <path d="M11.133 1.51361L11.1321 1.51417L1.58214 7.92157L1.25 8.14441V8.54438V11V11.75L2.00002 11.75H2.00007H2.00021H2.00076H2.00296H2.01167L2.04584 11.75L2.17721 11.75L2.66002 11.75L4.25 11.75H19.75L21.34 11.75L21.8228 11.75L21.9542 11.75L21.9883 11.75H21.997H21.9992H21.9998H21.9999H22L22.75 11.75V11V8.52531V8.12468L22.417 7.90193L12.867 1.51362C12.867 1.51361 12.867 1.5136 12.867 1.51359C12.3416 1.16213 11.6583 1.16214 11.133 1.51361Z" />
                            <rect x="2" y="11" width="20" height="1.5" />
                        </svg>
                    </div>
                    <svg viewBox="0 0 24 24">
                        <rect className="background" x="1.25" y="2.25" width="21.5" height="19.95" rx="3" />
                        <path className="front" d="M2.41843 6.8296L1.25 6.04411V7.45203V19.1891C1.25 20.8464 2.59174 22.202 4.25 22.202H19.75C21.4083 22.202 22.75 20.8464 22.75 19.1891V7.47013V6.06476L21.5825 6.84707L12.8425 12.7035L12.7821 12.744C12.5397 12.8907 12.2708 12.9628 12 12.9628C11.7065 12.9628 11.4157 12.8781 11.1584 12.7052L2.41843 6.8296Z" />
                    </svg>
                </div>
                Messages
            </div>
        </button>



        <button onClick={() => handleButtonClick('submit')} className="lists">
            <div>
                <div className="icon">
                    <svg className="pencil" viewBox="0 0 8 22">
                        <path d="M1.34869 4.87898L6.65199 4.87898M6.65193 16.8942L4.00028 20.6065L1.34863 16.8942L1.34863 2.66652C1.34869 2.26878 1.50672 1.88734 1.78797 1.60609C2.06922 1.32484 2.45066 1.16681 2.84841 1.16675L5.15216 1.16675C5.54991 1.16681 5.93134 1.32484 6.21259 1.60609C6.49384 1.88734 6.65187 2.26878 6.65193 2.66652V16.8942Z" />
                    </svg>
                    <svg className="list" viewBox="0 0 24 24">
                        <rect x="2.5" y="2.5" width="19" height="19" rx="2.25" />
                        <path className="top" d="M7 8H17" />
                        <path className="middle" d="M7 12H17" />
                        <path className="bottom" d="M7 16H12" />
                    </svg>
                </div>
                Submit
            </div>
        </button>

        <button className="mores">
            <div>
                <div className="icon">
                    <svg className="more" viewBox="0 0 1028 1024"   width="200" height="200">
                        <path d="M514.554 62c-248.709 0-450.284 200.379-450.284 447.598s201.586 447.594 450.283 447.594c248.674 0 450.261-200.375 450.261-447.594 0.001-247.211-201.587-447.598-450.261-447.598zM514.479 899.037c-214.814 0-388.955-174.142-388.955-388.955 0-214.814 174.142-388.955 388.955-388.955 214.813 0 388.955 174.142 388.955 388.955 0 214.814-174.142 388.955-388.955 388.955z"
                        fill="#D9D9D9" ></path>
                        <path className="first"d="M280.224 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z"
                        fill="#D9D9D9"></path>
                        <path className="second" d="M470.086 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z"
                        fill="#D9D9D9"></path>
                        <path className="third" d="M641.49 507.447c0 31.312 25.384 56.695 56.695 56.695s56.695-25.384 56.695-56.695c0-31.312-25.384-56.695-56.695-56.695-31.312 0-56.695 25.384-56.695 56.695z"
                        fill="#D9D9D9"></path>
                    </svg>
                </div>
                More
            </div>
        </button>


        


        
    </nav>
</aside>


 
    </div>
    
    
  );
};

export default Siderbar;