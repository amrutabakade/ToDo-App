import styles from "./Welcome.module.css"
function Welcome (){
    return(
        <>
        <center>
        <h1>Welcome to Todo App</h1>
        <p className={`${styles.textBody}`}>Start your journey with timely completion of tasks</p>
        </center>
        </>
    )
}
export default Welcome;