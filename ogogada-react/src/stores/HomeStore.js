import { Container } from "unstated";
import metaJSON from "../assets/meta.js";

class HomeStore extends Container {
    state = { 
        id: "",
        pw: "",
        level: "",
     };
     
     update = (input_id) => {
         this.setState({
            ...this.state,
            id: input_id,
        })
     }



}

export default HomeStore;