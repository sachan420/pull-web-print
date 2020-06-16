import React from 'react'
import styles from './Instagram.module.css' 
class Instagram extends React.Component{
    render(){
        return(
            <div>
               <div id={styles["wrapper"]}>
                   <div className={styles.container}>
                        <div className={styles['phone-app-demo']}>
                        
                        </div>
                        <div className={styles['form-data']}>
                            <form action="">
                               <div className={styles.logo}>
                                  <div className={styles.instaicon}/>
                               </div>
                               <input type="text" placeholder="Phone number, username, or email" />
                               <input type="password" placeholder="Password" />
                               <button className={styles['form-btn']} type="submit" >Log in</button>
                               <span className={styles['has-separator']}>Or</span>
                               <a className={styles['facebook-login']} href="#">
                                 <div className={styles.fbicon}/> Log in with Facebook 
                               </a>
                               <a className={styles['password-reset']} href="#">Forgot password</a>                                 
                            </form>
                            <div className={styles['sign-up']}>
                              Don't have an account? <a href="#">Sign up</a>
                            </div>
                            <div className={styles['get-the-app']}>
                               <span>Get the app.</span>
                               <div className={styles['badges']}>
                                  <img src="./Images/googleplay.png" />
                                  <img src="./Images/applestore.png" />                                  
                               </div>
                            </div>            
                        </div>
                   </div>
               </div>
               <footer>
                   <div className={styles.container}>
                   <nav className={styles['footer-nav']}>
                     <ul>
                        <li>
                           <a href="#">About</a> 
                        </li>
                        <li>
                           <a href="#">Support</a> 
                        </li>
                        <li>
                           <a href="#">Press</a> 
                        </li>
                        <li>
                           <a href="#">Api</a> 
                        </li>
                        <li>
                           <a href="#">Jobs</a> 
                        </li>
                        <li>
                           <a href="#">Privacy</a> 
                        </li>
                        <li>
                           <a href="#">Terms</a> 
                        </li>
                        <li>
                           <a href="#">Directory</a> 
                        </li>
                        <li>
                           <a href="#">Profiles</a> 
                        </li>
                        <li>
                           <a href="#">Hashtags</a> 
                        </li>
                        <li>
                           <a href="#">Languages</a> 
                        </li>                        
                     </ul>    
                   </nav>
                   <div className={styles['coyright-notice']}>
                     &copy; 2019 Instagram
                   </div>
                   </div>
               </footer>
            </div>
        )
    }
}
export default Instagram