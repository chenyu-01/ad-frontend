import React ,{ Component }from "react";
import Image from "next/image";
import ContactInfo from "./sections/_ContectInfo";
export default class FloatInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isSticky: false, componentHeight: 0 };
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ componentHeight: this.ref.current.clientHeight });
  }

  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const stickyClass = this.ref.current;
    const offsetTop = stickyClass.offsetTop;
    const isSticky = window.pageYOffset > offsetTop ;

    if (isSticky) {

      const componentWidth = stickyClass.offsetWidth;
      this.setState({
        isSticky: true,
        stickyWidth: componentWidth
      });
    } else {
      this.setState({ isSticky: false });
    }
  };


  render(){
    const { isSticky, componentHeight, stickyWidth } = this.state;
    const stickyStyle = isSticky ? { position: 'fixed', top: 20, zIndex: 1000, width: `${stickyWidth}px` } : {};

    const nextSiblingStyle = isSticky ? { marginTop: `${componentHeight}px` } : {};
    
    
    return (
      <>
        <div ref={this.ref} style={stickyStyle} className="bg-zinc-300 p-4 rounded-2xl shadow-lg">
        <h2 className="text-slate-900 text-2xl font-bold leading-tight">
          Information
        </h2>
        <div className="my-4 border-t border-black"></div> 
        <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <Image
                src="/details/bed.svg"
                alt="Bedroom"
                width={49}
                height={49}
              />
              <span className="text-gray-400 text-xs mt-2">Bedroom</span>
              <span className="text-black text-xl font-medium">2</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/details/bathIcon.svg"
                alt="Bathroom"
                width={53}
                height={53}
              />
              <span className="text-gray-400 text-xs mt-2">Bathroom</span>
              <span className="text-black text-xl font-medium">1</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/details/areaIcon.svg"
                alt="Area"
                width={53}
                height={53}
              />
              <span className="text-gray-400 text-xs mt-2">Area (ft²)</span>
              <span className="text-black text-xl font-medium">100</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/details/psfIcon.svg"
                alt="Price psf"
                width={49}
                height={49}
              />
              <span className="text-gray-400 text-xs mt-2">Price psf</span>
              <span className="text-black text-xl font-medium">$100</span>
            </div>
          </div>
          <div>
          <ContactInfo />  
          </div>
          <div className="flex justify-around mt-4">
            <Image
              src="/details/meeting.png"
              alt="Meeting"
              width={149}
              height={60}
            />
            <Image
              src="/details/message.png"
              alt="Message"
              width={149}
              height={60}
            />
          </div>
        </div>

        {/* <div style={(isSticky && window.innerWidth < 1024) ? nextSiblingStyle : {}}></div> */}
      </>
    );
  }
}
