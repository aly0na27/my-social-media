import styles from "./Contacts.module.css"
import vkIcon from "../../../../assets/images/Icon/IconContacts/vk.svg"
import instagramIcon from "../../../../assets/images/Icon/IconContacts/instagram.svg"
import facebookIcon from "../../../../assets/images/Icon/IconContacts/facebook.svg"
import githubIcon from "../../../../assets/images/Icon/IconContacts/github.svg"

function Contacts(props) {
    debugger
    const contacts = Object.entries(props.contacts).filter(el => {

        return props.contacts[el[0]]
    })

    return (
        <div className={styles.section}>
            <h2>Contacts</h2>
            <div className={styles.contacts}>
                {
                    contacts.map(el => {
                        switch (el[0]) {
                            case "facebook":
                                return <a className={styles.links} href={el[1]}>
                                    <img className={styles.contactsIcon} src={facebookIcon} alt={""}/>
                                    <span className={styles.contactsSpan}>Facebook</span>
                                </a>
                            case "vk":
                                return <a className={styles.links} href={el[1]}>
                                    <img className={styles.contactsIcon} src={vkIcon} alt={""}/>
                                    <span className={styles.contactsSpan}>VK</span>
                                </a>
                            case "instagram":
                                return <a className={styles.links} href={el[1]}>
                                    <img className={styles.contactsIcon} src={instagramIcon} alt={""}/>
                                    <span className={styles.contactsSpan}>Instagram</span>
                                </a>
                        }

                    })
                }
            </div>
        </div>
    )
}

export default Contacts