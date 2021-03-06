import chroma from 'chroma-js'

const style ={
    ColorBox:{
        width:"20%",
        height:props=> props.showingFullPalette?"25%":"50%",
        margin:"0 auto",
        display:"inline-block",
        position:"relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button":{
            opacity:1
        }
    },
    copyText:{
        color:props=>(chroma(props.background).luminance() >=0.5)?"black":"white"
    },
    colorName:{
        color:props=>(chroma(props.background).luminance() <=0.08)?"white":"black"
    },
    seeMore:{
        backgroundColor:  "rgba(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right:"0px",
        bottom:"0px",
        color: props=>(chroma(props.background).luminance() >=0.5)?"black":"white",
        width:"60px",
        height:"30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform:"uppercase",
    },
    copyButton:{
        width:"100px",
        height:"30px",
        position:"absolute",
        display:"inline-block",
        top:"50%",
        left:"50%",
        marginLeft:"-50px",
        marginTop:"-15px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color:props=>(chroma(props.background).luminance() >=0.5)?"black":"white",
        textTransform:"uppercase",
        border:"none",
        textDecoration: "none",
        opacity:"0"
    },
    boxContent:{
        position: "absolute",
        width:"100%",
        left:"0px",
        bottom:"0px",
        padding:"10px",
        color:"black",
        letterSpacing: "1px",
        fontSize: "12px",
        textTransform:"uppercase"
    },
    copyOverlay:{
        opacity: "0",
        zIndex: "0",
        width:"100%",
        height:"100%",
        transform:"scale(0.1)"
    },
    showOverlay:{
        opacity: "1",
        transform:"scale(50)",
        zIndex:"10",
        position:"absolute",
        transition: "transform 0.6s ease-in-out"
    },
    copyMsg:{
        position: "fixed",
        left:"0",
        right:"0",
        top:"0",
        bottom:"0",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize:"4rem",
        transform:"scale(0.1)",
        opacity:"0",
        color:"white",
        flexDirection: "column",
        "& h1":{
            fontWeight:"400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255,255,255,0.2)",
            width:"100%",
            textAlign: "center",
            marginBottom: "0",
            padding:"1rem",
            textTransform: "uppercase"
        },
        "& p":{
            fontSize:"2rem",
            fontWeight: "100"
        }
    },
    copyMsgShow:{
        opacity:"1",
        zIndex:"25",
        transform:"scale(1)",
        transition: "all 0.4s ease-in-out 0.3s"
    }
}

export{style}