"use client"

interface Props {
    text: string;
    bgColor?: string; 
    color?: string;
    border?:string
  }
  
  export default function Button(prop: Props) {
    let customStyle = {};
  
    
    if (prop.bgColor) {
      customStyle = { backgroundColor: prop.bgColor,color:prop.color ,border:prop.border };
    } 
    

  
    return (
      <button style={customStyle} className=" bg-white text-btncolor py-[9px] px-[40px] font-bold rounded-3xl cursor-pointer ">
        {prop.text}
      </button>
    );
  }
  