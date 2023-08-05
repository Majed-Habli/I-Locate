import React, {useState} from "react";
import styles from "./login.module.css";
import { Footer } from "../../components/footerComponent/footer";

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <img src="/hero-map.png" alt="" />
            </div>
            <div className={styles.container_right}>
                <div className={styles.input_container}>
                    <div className={styles.row}>
                        <label className="label">Email: </label>
                        <input value={email} onChange={ e=> setEmail(e.target.value) }/>
                    </div>
                    <div className={styles.row}>
                        <label className="label">Password: </label>
                        <input value={password} onChange={ e=> setPassword(e.target.value) }/>
                    </div>
                    <div className={styles.button}>
                        <button >log in</button>  
                        {/* onClick={gunctionname} */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;