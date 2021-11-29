import './popup.css';

function Popup(props) {

    const { trigger, setTrigger, title, subTitle, children } = props
    
    return (
        <div className={trigger? "popup show-popup" : "popup"}>
                <button className="close-btn" onClick={()=>setTrigger(false)}>X</button>
            <div className="popup-inner">
                <h2>{title && title}</h2>
                {subTitle ? <h3>{ subTitle }</h3> : "" }
                { children && children }
            </div>
        </div>
    )
}

export default Popup;