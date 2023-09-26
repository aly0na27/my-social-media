// import s from "./../Navbar.module.css";
// import SiteBarItem from "./SiteBarItem/SiteBarItem";
// // import StoreContext from "../../../StoreContext";
//
// function SiteBar(props) {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let friends = store.getState().sideBar.map((el) => <SiteBarItem name={el.name} avatar={el.avatar}/> );
//                 return (
//                     <div className={s.siteBar}>
//                         <h2>Friends</h2>
//                         <div className={s.friends}>
//                             {friends}
//                         </div>
//                     </div>
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// }
//
// export default SiteBar;