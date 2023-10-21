function Contacts(props) {
    return (
        <div>
            {
                Object.keys(props.contacts).map(el => {
                    return (
                        <p>
                            {el}: {props.contacts[el]}
                        </p>

                    )
                })
            }
        </div>
    )
}

export default Contacts