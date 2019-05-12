import { Container } from "unstated";
import metaJSON from "../assets/meta.js";

class HomeStore extends Container {
    state = { 
        id: "",
        pw: "",
        level: "",
     };
     
     update = async (input_id) => {
        await this.setState({
            ...this.state,
            id: input_id,
        })
        console.log("done");
     }



}

export default HomeStore;