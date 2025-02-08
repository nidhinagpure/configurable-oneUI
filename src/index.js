
import { createRoot } from "react-dom/client";
import "./index.css";
import { WEBSITE_NAME , WEBSITE_TITLE , HEADER_IMAGES ,WEB_DESCRIPTIONS ,WEB_BUTTON2 , WEB_BUTTON1,CONTAIN_IMAGE} from "./config";


const root = createRoot(document.getElementById("root"));

function ConFigs() {
    return (
        <div>
            <p className="text-4xl font-bold text-center mt-2">{WEBSITE_NAME}</p>
            <p className="text-center mt-2 "><span className="text-3xl font-bold">{WEBSITE_TITLE} </span>
                <span className="text-3xl font-bold text-[rgb(255,0,170)]"></span></p>

            <div className="flex justify-center items-center mt-4">
                <input type="text" placeholder="Sreach Cake"
                    className="w-300 border border-gray-400 rounded-md w-[550px] p-1 text-lg pl-2" ></input>
            </div>

            <div className="flex justify-evenly">
                <div>
                    <img src={HEADER_IMAGES}
                        className="mt-4 pl-10 flex justify-center h-[400px]w-[400px] "></img>
                </div>
                <div className=" pl-10 text-16sm mt-4">
                    <p><span className="font-bold text-xl leading-loose">A cake shop</span>{WEB_DESCRIPTIONS} </p>

                    <div className="flex  justify-center pr-10 mt-8">
                        <button className="bg-[rgb(255,128,213)] text-lg pl-4 pr-4 pt-2 pb-2 rounded-md mr-10" >{WEB_BUTTON1}</button>
                        <button className="bg-[rgb(255,128,213)] text-lg pl-4 pr-4 pt-2 pb-2 rounded-md mr-10 ">{WEB_BUTTON2}</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly mr-2" >
                <div>
                    <img src={CONTAIN_IMAGE}
                        className="mt-6 pr-1  flex justify-center w-[700px] h-[400px]" />
                </div>
                <div className=" pl-10 text-16sm mt-4">
                    <h2 className="font-bold text-xl" >Variety of Cakes</h2>
                    <p className="mt-4">
                        <span className="font-bold text-2lg">Custom Cakes: </span>Many cake shops offer custom-made cakes for birthdays, weddings,<br></br>
                        anniversaries, and other special occasions. You can often choose the flavor,<br></br>
                        filling, and even the design.<br></br><br></br>
                        <span className="font-bold text-2lg">Classic Cakes: </span>These might include traditional flavors like chocolate cake, vanilla<br></br>
                        sponge, red velvet, or fruit cakes.<br></br><br></br>
                        <span className="font-bold text-2lg">Specialty Cakes:: </span> Some cake shops offer unique cakes like gluten-free, vegan, <br></br>
                        or sugar-free options, catering to dietary preferences or restrictions.<br></br><br></br>
                        <span className="font-bold text-2lg">Cupcakes : </span> Many cake shops also offer cupcakes in a variety of flavors and decorations.<br></br><br></br>
                        Cake shops often offer a wide range of fillings like cream, fruit preserves,<br></br> chocolate ganache, or mousse.
                    </p>
                </div>
                
            </div>
           
            <p className="text-center text-xl mt-4">Contact us : 92481102570</p>
            <p className="text-center font-bold text-2xl mt-2">T H A N K - Y O U U ..!!!🤩</p>
        </div>
    );
}
root.render(
    <>
        <ConFigs />
    </>
)